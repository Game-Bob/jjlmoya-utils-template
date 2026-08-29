#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readdirSync, renameSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const categoryInput = process.argv[2];
const category = normalizeCategory(categoryInput);
const repositoryName = `jjlmoya-utils-${category}`;
const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const baseDirectory = getBaseDirectory(process.cwd());
const targetDirectory = join(baseDirectory, repositoryName);

if (!category) {
    fail('Usage: npx @jjlmoya/utils-template <category>');
}

if (existsSync(targetDirectory)) {
    fail(`Target directory already exists: ${targetDirectory}`);
}

mkdirSync(targetDirectory, { recursive: true });
copyTemplate(packageRoot, targetDirectory);
removeGeneratedFiles(targetDirectory);
transformProject(targetDirectory, category, repositoryName);
renameCategorySeo(targetDirectory, category);
initializeGit(targetDirectory, repositoryName);
createRemoteRepository(targetDirectory, repositoryName);

function normalizeCategory(value) {
    if (!value || !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(value)) return '';
    return value;
}

function getBaseDirectory(currentDirectory) {
    return basename(currentDirectory) === 'jjlmoya-utils-template' ? dirname(currentDirectory) : currentDirectory;
}

function copyTemplate(sourceDirectory, destinationDirectory) {
    for (const entry of readdirSync(sourceDirectory, { withFileTypes: true })) {
        if (['.git', '.astro', 'dist', 'node_modules', 'bin'].includes(entry.name)) continue;
        const sourcePath = join(sourceDirectory, entry.name);
        const destinationPath = join(destinationDirectory, entry.name);
        cpSync(sourcePath, destinationPath, { recursive: true });
    }
}

function removeGeneratedFiles(projectDirectory) {
    for (const entry of ['.astro', 'dist', 'node_modules']) {
        rmSync(join(projectDirectory, entry), { recursive: true, force: true });
    }
}

function transformProject(projectDirectory, category, repositoryName) {
    const displayName = toDisplayName(category);
    const upperCategory = category.replaceAll('-', '_').toUpperCase();
    for (const filePath of collectFiles(projectDirectory)) {
        if (!isTextFile(filePath)) continue;
        const original = readFileSync(filePath, 'utf8');
        const transformed = original
            .replaceAll('@jjlmoya/utils-tabletop', `@jjlmoya/utils-${category}`)
            .replaceAll('jjlmoya-utils-tabletop', repositoryName)
            .replaceAll('TABLETOP', upperCategory)
            .replaceAll('Tabletop', displayName)
            .replaceAll('tabletop', category);
        if (transformed !== original) writeFileSync(filePath, transformed);
    }
    const packagePath = join(projectDirectory, 'package.json');
    const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'));
    packageJson.name = `@jjlmoya/utils-${category}`;
    packageJson.version = '1.0.0';
    delete packageJson.bin;
    packageJson.files = packageJson.files.filter((entry) => entry !== 'bin');
    writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 4)}\n`);
}

function renameCategorySeo(projectDirectory, category) {
    const source = join(projectDirectory, 'src/category/TabletopCategorySEO.astro');
    const destination = join(projectDirectory, `src/category/${toDisplayName(category).replaceAll(' ', '')}CategorySEO.astro`);
    if (existsSync(source)) renameSync(source, destination);
}

function collectFiles(directory) {
    const files = [];
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
        if (['.git', '.astro', 'dist', 'node_modules'].includes(entry.name)) continue;
        const path = join(directory, entry.name);
        if (entry.isDirectory()) files.push(...collectFiles(path));
        else files.push(path);
    }
    return files;
}

function isTextFile(filePath) {
    return /\.(astro|css|js|json|md|mjs|ts|yml)$/.test(filePath);
}

function toDisplayName(category) {
    return category.split('-').map((part) => `${part[0].toUpperCase()}${part.slice(1)}`).join(' ');
}

function initializeGit(projectDirectory, repositoryName) {
    run('git', ['-C', projectDirectory, 'init', '-b', 'main']);
    run('git', ['-C', projectDirectory, 'add', '.']);
    run('git', ['-C', projectDirectory, 'commit', '-m', `chore: bootstrap ${repositoryName}`]);
}

function createRemoteRepository(projectDirectory, repositoryName) {
    const ghCommand = process.platform === 'win32' ? 'gh.exe' : 'gh';
    run(ghCommand, ['repo', 'create', `Game-Bob/${repositoryName}`, '--private', '--source', projectDirectory, '--remote', 'origin', '--push']);
}

function run(command, args) {
    const result = spawnSync(command, args, { stdio: 'inherit', shell: false });
    if (result.error || result.status !== 0) fail(`Command failed: ${command} ${args.join(' ')}`);
}

function fail(message) {
    console.error(message);
    process.exit(1);
}
