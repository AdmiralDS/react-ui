import type { SideMenuGroupNode, SideMenuItemNode, SideMenuNode } from '../types';
import { matchesByFirstLetters } from './filterByFirstLetters';

export interface FilterTreeResult {
  nodes: SideMenuNode[];
  hasAnyVisible: boolean;
}

function isItem(node: SideMenuNode): node is SideMenuItemNode {
  return node.type !== 'group' && node.type !== 'divider';
}

function isGroup(node: SideMenuNode): node is SideMenuGroupNode {
  return node.type === 'group';
}

export function filterMenuTree(nodes: SideMenuNode[], query: string): FilterTreeResult {
  const q = query.trim();
  if (!q) {
    return { nodes, hasAnyVisible: nodes.length > 0 };
  }

  const out: SideMenuNode[] = [];
  let hasAnyVisible = false;

  for (const node of nodes) {
    if (node.type === 'divider') {
      continue;
    }

    if (isItem(node)) {
      const matched = matchesByFirstLetters(node.label, q);
      if (matched) {
        out.push(node);
        hasAnyVisible = true;
      }
      continue;
    }

    if (isGroup(node)) {
      const groupMatched = matchesByFirstLetters(node.title, q);
      const childResult = filterMenuTree(node.children, q);

      // Включаем группу, если совпал заголовок ИЛИ среди детей есть совпадения.
      if (groupMatched || childResult.hasAnyVisible) {
        hasAnyVisible = true;
        out.push({
          ...node,
          // Показываем только отфильтрованные дочерние элементы
          children: childResult.nodes,
        });
      }
      continue;
    }
  }

  return { nodes: out, hasAnyVisible };
}
