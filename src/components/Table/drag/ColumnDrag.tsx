import type { ReactPortal } from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DropdownContext } from '#src/components/DropdownProvider';
import observeRect from '#src/components/common/observeRect';
import type { TableProps } from '#src/components/Table';

import { dragObserver } from '../dragObserver';
import { MirrorColumn } from '../style';

type ColumnDragProps = {
  dimension: 'xl' | 'l' | 'm' | 's';
  onColumnDrag: TableProps['onColumnDrag'];
  isAnyColumnDraggable: boolean;
  isAnyStickyColumnDraggable: boolean;
  tableRef: React.RefObject<HTMLElement>;
  scrollBodyRef: React.RefObject<HTMLElement>;
  normalColumnsWrapperRef: React.RefObject<HTMLElement>;
  stickyColumnsWrapperRef: React.RefObject<HTMLElement>;
};

export const ColumnDrag = ({
  onColumnDrag,
  dimension,
  isAnyColumnDraggable,
  isAnyStickyColumnDraggable,
  tableRef,
  scrollBodyRef,
  normalColumnsWrapperRef,
  stickyColumnsWrapperRef,
}: ColumnDragProps): ReactPortal | null => {
  const { rootRef } = useContext(DropdownContext);

  const [columnDragging, setColumnDragging] = useState(false);

  // save callback via useRef to not update dragObserver on each callback change
  const columnDragCallback = useRef(onColumnDrag);
  const columnMirrorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    columnDragCallback.current = onColumnDrag;
  }, [onColumnDrag]);

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.dataset.dragging = String(columnDragging);
    }
  }, [columnDragging]);

  useEffect(() => {
    if (columnMirrorRef.current && columnDragging && (isAnyColumnDraggable || isAnyStickyColumnDraggable)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const observer = observeRect(columnMirrorRef.current, (rect: any) => {
        const rightCoord = tableRef.current?.getBoundingClientRect().right || 0;
        const leftCoord =
          stickyColumnsWrapperRef.current?.getBoundingClientRect().right ||
          tableRef.current?.getBoundingClientRect().left ||
          0;
        if (scrollBodyRef.current) {
          const scrollLeft = scrollBodyRef.current.scrollLeft;
          const scrollWidth = scrollBodyRef.current.scrollWidth;
          const offsetWidth = scrollBodyRef.current.offsetWidth;

          if (rect.right > rightCoord && scrollWidth > offsetWidth && scrollLeft + offsetWidth < scrollWidth) {
            scrollBodyRef.current.scrollBy({ left: Math.abs(rightCoord - rect.right) });
          }
          if (rect.left < leftCoord && scrollLeft > 0) {
            scrollBodyRef.current.scrollBy({ left: -Math.abs(leftCoord - rect.left) });
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
    function handleDragEnd() {
      setColumnDragging(false);
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
            // can not place column before CheckboxCell or ExnandCell
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
    ? createPortal(<MirrorColumn $dimension={dimension} ref={columnMirrorRef} />, rootRef?.current || document.body)
    : null;
};
