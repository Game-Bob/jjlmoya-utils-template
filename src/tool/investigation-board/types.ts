export type NodeCategory = 'character' | 'clue' | 'location' | 'item' | 'custom';

export interface BoardNode {
  id: string;
  name: string;
  category: NodeCategory;
  description: string;
  notes: string;
  tags: string[];
  color: string;
  x: number;
  y: number;
}

export interface BoardConnection {
  id: string;
  fromId: string;
  toId: string;
  label: string;
  color: string;
}

export interface BoardState {
  nodes: BoardNode[];
  connections: BoardConnection[];
}
