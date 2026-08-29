import type { BoardNode, BoardConnection, NodeCategory } from './types';

export function createNode(options: {
  name: string;
  category: NodeCategory;
  x: number;
  y: number;
  color: string;
}): BoardNode {
  return {
    id: Math.random().toString(36).substring(2, 9),
    name: options.name,
    category: options.category,
    description: '',
    notes: '',
    tags: [],
    color: options.color,
    x: options.x,
    y: options.y,
  };
}

export function updateNode(
  nodes: BoardNode[],
  id: string,
  updates: Partial<Omit<BoardNode, 'id'>>,
): BoardNode[] {
  return nodes.map((n) => (n.id === id ? { ...n, ...updates } : n));
}

export function deleteNode(
  nodes: BoardNode[],
  connections: BoardConnection[],
  id: string,
): { nodes: BoardNode[]; connections: BoardConnection[] } {
  return {
    nodes: nodes.filter((n) => n.id !== id),
    connections: connections.filter((c) => c.fromId !== id && c.toId !== id),
  };
}

export function createConnection(
  fromId: string,
  toId: string,
  label: string,
  color: string,
): BoardConnection {
  return {
    id: Math.random().toString(36).substring(2, 9),
    fromId,
    toId,
    label,
    color,
  };
}

export function updateConnection(
  connections: BoardConnection[],
  id: string,
  updates: Partial<Omit<BoardConnection, 'id'>>,
): BoardConnection[] {
  return connections.map((c) => (c.id === id ? { ...c, ...updates } : c));
}

export function deleteConnection(
  connections: BoardConnection[],
  id: string,
): BoardConnection[] {
  return connections.filter((c) => c.id !== id);
}

export function filterNodes(
  nodes: BoardNode[],
  search: string,
  category: string,
): BoardNode[] {
  const query = search.toLowerCase().trim();
  return nodes.filter((n) => {
    const matchesCategory = !category || category === 'all' || n.category === category;
    const matchesSearch =
      !query ||
      n.name.toLowerCase().includes(query) ||
      n.description.toLowerCase().includes(query) ||
      n.notes.toLowerCase().includes(query) ||
      n.tags.some((t) => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });
}

export function getHighlightPath(
  connections: BoardConnection[],
  nodeId: string,
): { nodeIds: Set<string>; connectionIds: Set<string> } {
  const nodeIds = new Set<string>([nodeId]);
  const connectionIds = new Set<string>();
  for (const c of connections) {
    if (c.fromId === nodeId) {
      nodeIds.add(c.toId);
      connectionIds.add(c.id);
    } else if (c.toId === nodeId) {
      nodeIds.add(c.fromId);
      connectionIds.add(c.id);
    }
  }
  return { nodeIds, connectionIds };
}
