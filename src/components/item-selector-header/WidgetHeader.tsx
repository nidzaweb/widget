import { Button } from '../../shared/ui/button/Button';
import { X } from 'lucide-react';
import { useItemSelector } from '../../context/item-selector/ItemSelectorContext';

export function WidgetHeader() {
  const { closeWidget } = useItemSelector();

  return (
    <div className="widget-header">
      <div className="widget-header-content">
        <h3>Select items</h3>
        <Button variant="ghost" size="icon" onClick={closeWidget}>
          <X size={14} className="remove-icon-dark" />
        </Button>
      </div>
    </div>
  );
}
