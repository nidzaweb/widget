import { useItemSelector } from '../../context/item-selector/ItemSelectorContext';
import { Button } from '../../shared/ui/button/Button';
import SelectedItems from '../selected-items-summary/SelectedItems';

export function WidgetFooter() {
  const {
    draftSelectedItems,
    saveSelection,
    cancelSelection,
    toggleDraftItem,
  } = useItemSelector();
  return (
    <div className="widget-footer">
      <div className="widget-footer-content">
        Current selected items:
        <SelectedItems items={draftSelectedItems} action={toggleDraftItem} />
      </div>
      <div className="widget-footer-actions">
        <Button variant="primary" size="md" onClick={saveSelection}>
          Save
        </Button>
        <Button variant="danger" size="md" onClick={cancelSelection}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
