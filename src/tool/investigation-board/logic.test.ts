import { describe, it, expect } from 'vitest';
import {
  createNode,
  updateNode,
  deleteNode,
  createConnection,
  updateConnection,
  deleteConnection,
  filterNodes,
  getHighlightPath,
} from './logic';
import type { BoardNode, BoardConnection } from './types';

describe('Investigation Board Logic', () => {
  it('should create a node with unique id and category', () => {
    const node = createNode({ name: 'Test Card', category: 'clue', x: 10, y: 20, color: '#ef4444' });
    expect(node.id).toBeDefined();
    expect(node.name).toBe('Test Card');
    expect(node.category).toBe('clue');
    expect(node.x).toBe(10);
    expect(node.y).toBe(20);
    expect(node.color).toBe('#ef4444');
  });

  it('should update a node name and coordinates', () => {
    const node = createNode({ name: 'Original', category: 'item', x: 10, y: 20, color: '#f59e0b' });
    const nodes = [node];
    const updated = updateNode(nodes, node.id, { name: 'New Name', x: 50 });
    expect(updated[0].name).toBe('New Name');
    expect(updated[0].x).toBe(50);
    expect(updated[0].y).toBe(20);
  });

  it('should delete a node and clean up its connections', () => {
    const n1 = createNode({ name: 'N1', category: 'character', x: 0, y: 0, color: '#000' });
    const n2 = createNode({ name: 'N2', category: 'clue', x: 0, y: 0, color: '#000' });
    const conn = createConnection(n1.id, n2.id, 'links', '#000');

    const result = deleteNode([n1, n2], [conn], n1.id);
    expect(result.nodes).toHaveLength(1);
    expect(result.nodes[0].id).toBe(n2.id);
    expect(result.connections).toHaveLength(0);
  });

  it('should create and delete a connection', () => {
    const conn1 = createConnection('n1', 'n2', 'rel1', '#fff');
    const conn2 = createConnection('n2', 'n3', 'rel2', '#fff');
    const list = [conn1, conn2];

    const updated = updateConnection(list, conn1.id, { label: 'updated label' });
    expect(updated[0].label).toBe('updated label');

    const filtered = deleteConnection(list, conn1.id);
    expect(filtered).toHaveLength(1);
    expect(filtered[0].id).toBe(conn2.id);
  });

  it('should filter nodes based on category and search query', () => {
    const n1: BoardNode = {
      id: '1',
      name: 'Agent Cooper',
      category: 'character',
      description: 'FBI Special Agent',
      notes: 'Loves cherry pie',
      tags: ['fbi', 'investigator'],
      color: '#000',
      x: 0,
      y: 0,
    };
    const n2: BoardNode = {
      id: '2',
      name: 'Blue Rose Case',
      category: 'clue',
      description: 'Mysterious case file',
      notes: 'Classified',
      tags: ['clue', 'secret'],
      color: '#000',
      x: 0,
      y: 0,
    };

    const list = [n1, n2];

    const filteredCategory = filterNodes(list, '', 'character');
    expect(filteredCategory).toHaveLength(1);
    expect(filteredCategory[0].name).toBe('Agent Cooper');

    const filteredSearch = filterNodes(list, 'cherry', 'all');
    expect(filteredSearch).toHaveLength(1);
    expect(filteredSearch[0].name).toBe('Agent Cooper');
  });

  it('should retrieve highlight paths connected to a specific node', () => {
    const conn1: BoardConnection = { id: 'c1', fromId: 'n1', toId: 'n2', label: '1', color: '#000' };
    const conn2: BoardConnection = { id: 'c2', fromId: 'n2', toId: 'n3', label: '2', color: '#000' };
    const connections = [conn1, conn2];

    const highlight = getHighlightPath(connections, 'n2');
    expect(highlight.nodeIds.has('n1')).toBe(true);
    expect(highlight.nodeIds.has('n3')).toBe(true);
    expect(highlight.nodeIds.has('n2')).toBe(true);
    expect(highlight.connectionIds.has('c1')).toBe(true);
    expect(highlight.connectionIds.has('c2')).toBe(true);
  });
});
