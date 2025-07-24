import type { ReactPortal } from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DropdownContext } from '#src/components/DropdownProvider';
import observeRect from '#src/components/common/observeRect';
import type { TableProps } from '#src/components/Table';
import type { css } from 'styled-components';

import { dragObserver } from '../dragObserver';
import { MirrorColumn } from '../style';

type ColumnDragProps = {
  dimension: 'xl' | 'l' | 'm' | 's';
  onColumnDrag: TableProps['onColumnDrag'];
  onColumnDragEnd: TableProps['onColumnDragEnd'];
  isAnyColumnDraggable: boolean;
  isAnyStickyColumnDraggable: boolean;
  tableRef: React.RefObject<HTMLElement>;
  normalColumnsWrapperRef: React.RefObject<HTMLElement>;
  stickyColumnsWrapperRef: React.RefObject<HTMLElement>;
  draggedColumnCssMixin?: ReturnType<typeof css>;
};

export const ColumnDrag = ({
  onColumnDrag,
  onColumnDragEnd,
  dimension,
  isAnyColumnDraggable,
  isAnyStickyColumnDraggable,
  tableRef,
  normalColumnsWrapperRef,
  stickyColumnsWrapperRef,
  draggedColumnCssMixin,
}: ColumnDragProps): ReactPortal | null => {
  const { rootRef } = useContext(DropdownContext);

  const [columnDragging, setColumnDragging] = useState(false);

  // save callback via useRef to not update dragObserver on each callback change
  const columnDragCallback = useRef(onColumnDrag);
  const columnDragEndCallback = useRef(onColumnDragEnd);
  const columnMirrorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    columnDragCallback.current = onColumnDrag;
    columnDragEndCallback.current = onColumnDragEnd;
  }, [onColumnDrag, onColumnDragEnd]);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.dataset.dragging = String(columnDragging);
    }
  }, [columnDragging]);

  useEffect(() => {
    if (columnMirrorRef.current && columnDragging && (isAnyColumnDraggable || isAnyStickyColumnDraggable)) {
      const table = tableRef.current;

      const observer = observeRect(columnMirrorRef.current, (rect: any) => {
        const rightCoord = table?.getBoundingClientRect().right || 0;
        const leftCoord =
          stickyColumnsWrapperRef.current?.getBoundingClientRect().right || table?.getBoundingClientRect().left || 0;

        if (table) {
          const scrollLeft = table.scrollLeft;
          const scrollWidth = table.scrollWidth;
          const offsetWidth = table.offsetWidth;

          if (rect.right > rightCoord && scrollWidth > offsetWidth && scrollLeft + offsetWidth < scrollWidth) {
            table.scrollBy({ left: Math.abs(rightCoord - rect.right) });
          }
          if (rect.left < leftCoord && scrollLeft > 0) {
            table.scrollBy({ left: -Math.abs(leftCoord - rect.left) });
          }
        }
      });

      observer.observe();
      return () => observer.unobserve();
    }
  }, [isAnyColumnDraggable, isAnyStickyColumnDraggable, columnDragging]);

  useEffect(() => {
    const stickyCols = stickyColumnsWrapperRef.current;
    const normalCols = normalColumnsWrapperRef.current;
    const columnMirror = columnMirrorRef.current;

    function handleDrop(item: HTMLElement | null, before: HTMLElement | null) {
      const columnName = item?.dataset?.thColumn;
      if (columnName) {
        if (stickyCols?.contains(item) && before === null) {
          // if we place sticky column at the end of stickyCols
          columnDragCallback.current?.(
            columnName,
            (normalCols?.firstElementChild as HTMLElement)?.dataset?.thColumn ?? null,
          );
        } else {
          columnDragCallback.current?.(columnName, before?.dataset?.thColumn ?? null);
        }
      }
    }
    function handleDragStart() {
      setColumnDragging(true);
    }
    function handleDragEnd(item: HTMLElement | null) {
      setColumnDragging(false);

      const columnName = item?.dataset?.thColumn;
      if (columnName) {
        columnDragEndCallback.current?.(columnName);
      }
    }
    function renderMirror(dragColumn: HTMLElement | null) {
      const title = dragColumn?.querySelector('[data-title]');

      if (columnMirror && title) {
        columnMirror.appendChild(title.cloneNode(true));
      }
    }
    function removeMirror() {
      if (columnMirror && columnMirror.lastChild) {
        columnMirror.removeChild(columnMirror.lastChild);
      }
    }

    if (normalCols && isAnyColumnDraggable) {
      const observer = dragObserver(
        [normalCols],
        {
          mirrorRef: columnMirrorRef,
          renderMirror,
          removeMirror,
          dimension,
          direction: 'horizontal',
          invalid: (el: HTMLElement) => {
            return el.dataset.draggable == 'false';
          },
          accepts: (_, target: HTMLElement | null, source: HTMLElement | null, sibling: HTMLElement | null) => {
            // column can be dragged only inside parent container
            if (target !== source) return false;
            // can not place column before CheckboxCell or ExpandCell
            if (sibling?.dataset.droppable == 'false') return false;
            return true;
          },
        },
        handleDrop,
        handleDragStart,
        handleDragEnd,
      );
      if (stickyCols && isAnyStickyColumnDraggable) observer.containers.push(stickyCols);
      return () => {
        observer.unobserve();
      };
    }
  }, [isAnyColumnDraggable, isAnyStickyColumnDraggable, dimension]);

  return isAnyColumnDraggable || isAnyStickyColumnDraggable
    ? createPortal(
        <MirrorColumn $dimension={dimension} ref={columnMirrorRef} $cssMixin={draggedColumnCssMixin} />,
        rootRef?.current || document.body,
      )
    : null;
};
