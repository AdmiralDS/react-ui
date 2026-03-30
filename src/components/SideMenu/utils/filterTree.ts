import type { SideMenuNode, SearchFormat } from '../types';

function isItem(node: SideMenuNode): boolean {
  return node.type !== 'group' && node.type !== 'divider';
}

interface FilterTreeResult {
  nodes: SideMenuNode[];
  hasAnyVisible: boolean;
}

export function filterMenuTree(
  nodes: SideMenuNode[],
  query: string,
  onFilterItem: (value: string, searchValue: string, searchFormat: SearchFormat) => boolean,
  searchFormat: SearchFormat,
): FilterTreeResult {
  const q = query.trim();
  if (!q) {
    return { nodes, hasAnyVisible: nodes.length > 0 };
  }

  const filteredNodes: SideMenuNode[] = [];
  let hasAnyVisible = false;

  for (const node of nodes) {
    if (node.type === 'divider') {
      continue;
    }

    if (isItem(node)) {
      const matched = onFilterItem(node.label, query, searchFormat);

      if (matched) {
        filteredNodes.push(node);
        hasAnyVisible = true;
      }
      continue;
    }

    if (node.type === 'group') {
      const groupMatched = onFilterItem(node.label, query, searchFormat);
      const childResult = filterMenuTree(node.children, query, onFilterItem, searchFormat);

      // Включаем группу, если совпал заголовок или среди детей есть совпадения
      if (groupMatched || childResult.hasAnyVisible) {
        hasAnyVisible = true;
        filteredNodes.push({
          ...node,
          // Показываем только отфильтрованные дочерние элементы
          children: childResult.nodes,
        });
      }
      continue;
    }
  }

  return { nodes: filteredNodes, hasAnyVisible };
}
