import { X } from 'lucide-react';
import React from 'react';
import { Button } from '../button/Button';

interface ChipProps {
  children: React.ReactNode;
  removeable?: boolean;
  onRemove?: (itemId: number) => void;
  itemId: number;
}

export function Chip({ children, removeable, itemId, onRemove }: ChipProps) {
  return (
    <div className="chip">
      <span>{children}</span>
      <div className="chip-separator"></div>
      {removeable && (
        <Button variant="ghost" size="icon" onClick={() => onRemove?.(itemId)}>
          <X size={12} className="remove-icon-light" />
        </Button>
      )}
    </div>
  );
}
