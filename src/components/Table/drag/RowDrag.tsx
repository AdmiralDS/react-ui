import type { ReactPortal } from 'react';
import { useState, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { DropdownContext } from '#src/components/DropdownProvider';
import observeRect from '#src/components/common/observeRect';
import type { TableProps } from '#src/components/Table';

import { dragObserver } from '../dragObserver';
import { MirrorRow } from '../style';
import type { GroupRows } from '../types';

type RowDragProps = {
  dimension: 'xl' | 'l' | 'm' | 's';
  onRowDrag: TableProps['onRowDrag'];
  rowsDraggable?: boolean;
  scrollBodyRef: React.RefObject<HTMLElement>;
  rowToGroupMap: GroupRows;
};

export const RowDrag = ({
  rowsDraggable,
  dimension,
  onRowDrag,
  scrollBodyRef,
  rowToGroupMap,
}: RowDragProps): ReactPortal | null => {
  const { rootRef } = useContext(DropdownContext);

  const [rowDragging, setRowDragging] = useState(false);

  // save callback via useRef to not update dragObserver on each callback change
  const rowDragCallback = useRef(onRowDrag);
  const rowToGroup = useRef(rowToGroupMap);
  const rowMirrorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rowToGroup.current = rowToGroupMap;
  }, [rowToGroupMap]);

  useEffect(() => {
    rowDragCallback.current = onRowDrag;
  }, [onRowDrag]);

  useEffect(() => {
    if (rowMirrorRef.current && rowDragging && rowsDraggable) {
      const observer = observeRect(rowMirrorRef.current, (rect: any) => {
        const topCoord = scrollBodyRef.current?.getBoundingClientRect().top || 0;
        const bottomCoord = scrollBodyRef.current?.getBoundingClientRect().bottom || 0;

        if (scrollBodyRef.current) {
          const scrollTop = scrollBodyRef.current.scrollTop;
          const scrollHeight = scrollBodyRef.current.scrollHeight;
          const offsetHeight = scrollBodyRef.current.offsetHeight;

          if (rect.bottom > bottomCoord && scrollHeight > offsetHeight && scrollTop + offsetHeight < scrollHeight) {
            scrollBodyRef.current.scrollBy({ top: Math.abs(bottomCoord - rect.bottom) });
          }
          if (rect.top < topCoord && scrollTop > 0) {
            scrollBodyRef.current.scrollBy({ top: -Math.abs(topCoord - rect.top) });
          }
        }
      });

      observer.observe();
      return () => observer.unobserve();
    }
  }, [rowsDraggable, rowDragging]);

  useEffect(() => {
    const body = scrollBodyRef.current;
    const rowMirror = rowMirrorRef.current;

    function handleDrop(item: HTMLElement | null, before: HTMLElement | null, immediate?: HTMLElement) {
      // item - не всегда актуальный элемент, если мы перетаскивали строку и поместили её в закрытую группу,
      // то строка перестает рендерится в dom, и колбек handleDrop вернет в качестве item тот объект строки,
      // который существовал до размонтирования строки и удаления её из dom
      // в объекте item имеет смысл работать только с data-row атрибутом, остальные атрибуты могут быть не актуальными
      const rowId = item?.dataset?.row;

      if (rowId) {
        const rowInGroup = rowToGroup.current?.[rowId]?.groupId;
        const beforeRowId = before?.dataset?.row ?? null;
        const immediateRowId = immediate?.dataset?.row;
        const immediateGroup = immediate?.dataset?.group;
        const immediateInGroup = immediate?.dataset?.ingroup;
        const immediateFirstRowInGroup = immediate?.dataset?.firstRowInGroup;

        // навелись мышкой на заголовок группы
        if (immediateRowId && immediateGroup == 'true') {
          // перетаскиваемая строка не является частью этой группы или
          // перетаскиваемая строка находится внутри этой группы, но не на первой позиции
          if (rowInGroup !== immediateRowId || (rowInGroup == immediateRowId && immediateFirstRowInGroup !== rowId)) {
            const nextRowId = immediateFirstRowInGroup ?? beforeRowId;
            rowDragCallback.current?.(rowId, nextRowId, immediateRowId);
          }
        } else {
          rowDragCallback.current?.(rowId, beforeRowId, immediateInGroup ?? null);
        }
      }
    }
    function handleDragStart() {
      setRowDragging(true);
    }
    function handleDragEnd() {
      setRowDragging(false);
    }
    function renderMirror(dragRow: HTMLElement | null) {
      const firstCell = dragRow?.getElementsByClassName('td')[0];
      if (firstCell && rowMirror) {
        rowMirror.appendChild(firstCell.cloneNode(true));
      }
    }
    function removeMirror() {
      if (rowMirror && rowMirror.lastChild) {
        rowMirror.removeChild(rowMirror.lastChild);
      }
    }
    function updateDragItem(selector: string, seacrhInGroup?: boolean) {
      let newItem: HTMLElement | null = null;
      if (body) {
        newItem = body.querySelector(`[data-row="${selector}"]`);

        if (!newItem && seacrhInGroup) {
          const groupId = rowToGroup.current?.[selector]?.groupId;
          newItem = body.querySelector(`[data-row="${groupId}"]`);
        }
      }
      return newItem;
    }

    if (body && rowsDraggable) {
      const observer = dragObserver(
        [body],
        {
          mirrorRef: rowMirrorRef,
          renderMirror,
          removeMirror,
          updateDragItem,
          dimension,
          direction: 'vertical',
          invalid: (el: HTMLElement, initEl: HTMLElement) => {
            const validDrag =
              initEl.getAttribute('data-dragicon') || initEl.parentElement?.getAttribute('data-dragicon');
            return !validDrag;
          },
        },
        handleDrop,
        handleDragStart,
        handleDragEnd,
      );
      return () => {
        observer.unobserve();
      };
    }
  }, [rowsDraggable]);

  return rowsDraggable
    ? createPortal(<MirrorRow $dimension={dimension} ref={rowMirrorRef} />, rootRef?.current || document.body)
    : null;
};
