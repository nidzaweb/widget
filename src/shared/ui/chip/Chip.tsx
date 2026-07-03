import { X } from 'lucide-react';
import React from 'react';
import { Button } from '../button/Button';
import './Chip.css';

interface ChipProps {
  children: React.ReactNode;
  removable?: boolean;
  onRemove?: (itemId: number) => void;
  itemId: number;
}

export function Chip({ children, removable, itemId, onRemove }: ChipProps) {
  return (
    <div className="chip">
      <span>{children}</span>
      <div className="chip__separator"></div>
      {removable && (
        <Button variant="ghost" size="icon" onClick={() => onRemove?.(itemId)}>
          <X size={12} className="icon--light" />
        </Button>
      )}
    </div>
  );
}
