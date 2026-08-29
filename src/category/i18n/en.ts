import type { CategoryLocaleContent } from '../../types';

const slug = 'tabletop';
const title = 'Tabletop Game Utilities & Tools';
const description = 'Free tabletop and RPG utilities: roll virtual dice with live statistics, track turn times with a multiplayer game timer, and more. Works in your browser, no sign-up, 100% private.';

export const content: CategoryLocaleContent = {
  slug,
  title,
  description,
  seo: [
    { type: 'title', text: 'Tabletop Game Tools | Roll Dice Online & Track Turn Times', level: 2 },
    { type: 'paragraph', html: 'Game nights should be about fun, not hunting for lost dice or waiting for someone to add up their roll. This utility library gives you and your group fast, well-designed tools that work instantly-no strings attached. Whether you are a dungeon master juggling a hundred things or a player who just wants to roll without the fuss, these tools are built for you.' },
    { type: 'title', text: 'Roll Virtual Dice with Real-Time Statistics', level: 2 },
    { type: 'paragraph', html: 'Tired of scrambling under the table for missing dice or waiting for someone to tally results? The virtual dice roller lets you throw any combination of polyhedral dice instantly, with modifiers, advantage, disadvantage, and a full roll history. The built-in probability analyzer shows your real odds before you roll, helping you make smarter decisions at the table. Perfect for Dungeons & Dragons, Pathfinder, Call of Cthulhu, Shadowrun, or any game that relies on chance.' },
    { type: 'title', text: 'Keep Your Game on Pace with a Smart Turn Timer', level: 2 },
    { type: 'paragraph', html: 'We all know that one player who takes forever on every turn. The game timer lets you set fair and fun time limits, with modes that adapt to every play style-from a simple shared countdown to chess-style Fischer increment or Bronstein delay. Works for two-player duels with split-screen rotation or groups of up to eight with central turn control. When the game ends, review detailed stats on timing, rounds, and play pace.' },
    { type: 'title', text: 'Privacy First: Everything Runs on Your Device', level: 2 },
    { type: 'paragraph', html: 'One of the best things about this library is that everything processes in your browser. No data is sent to any server, no tracking cookies, no email or registration required. Use the tools offline, share your screen with the table, or project to a big screen TV-nothing to worry about except the game itself. And more tools are coming, always designed to make life easier for tabletop players.' },
    { type: 'stats', items: [
      { label: 'Tools', value: '2+', icon: 'mdi:tools' },
      { label: 'Players', value: '2-8', icon: 'mdi:account-group' },
      { label: 'Languages', value: '15', icon: 'mdi:translate' },
      { label: 'Privacy', value: '100% Local', icon: 'mdi:shield-check' },
    ] },
  ],
};
