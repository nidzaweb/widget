import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useItemSelector } from '../context/item-selector/ItemSelectorContext';
import { ItemSelectorRow } from './ItemSelectorRow';

const ITEM_HEIGHT = 33;

export function ItemSelectorList() {
  const { visibleItems } = useItemSelector();
  const scrollRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: visibleItems.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  if (visibleItems.length === 0) {
    return (
      <div className="widget-item-list">
        <p>No items found.</p>
      </div>
    );
  }

  return (
    <div className="widget-item-list" ref={scrollRef}>
      <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <ItemSelectorRow item={visibleItems[virtualRow.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
