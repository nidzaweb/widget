import type { Item } from '../../shared/types/item';

export const MAX_SELECTED_ITEMS = 3;

export type ElementNumberFilter = 'all' | 'gt-100' | 'gt-2500' | 'gt-10000';

export type ItemSelectorState = {
  isOpen: boolean;
  items: Item[];
  selectedItemIds: number[];
  draftSelectedItemIds: number[];
  isMaxItemsSelected: boolean;
  searchValue: string;
  elementNumberFilter: ElementNumberFilter;
};

export type ItemSelectorAction =
  | { type: 'OPEN_WIDGET' }
  | { type: 'CLOSE_WIDGET' }
  | { type: 'TOGGLE_DRAFT_ITEM'; payload: number }
  | { type: 'REMOVE_SELECTED_ITEM'; payload: number }
  | { type: 'SAVE_SELECTION' }
  | { type: 'CANCEL_SELECTION' }
  | { type: 'SET_SEARCH_VALUE'; payload: string }
  | { type: 'SET_ELEMENT_NUMBER_FILTER'; payload: ElementNumberFilter };

export type ItemSelectorContextValue = {
  isOpen: boolean;
  items: Item[];
  visibleItems: Item[];
  selectedItems: Item[];
  draftSelectedItems: Item[];
  selectedItemIds: number[];
  draftSelectedItemIds: number[];
  isMaxItemsSelected: boolean;
  searchValue: string;
  elementNumberFilter: ElementNumberFilter;

  openWidget: () => void;
  closeWidget: () => void;
  toggleDraftItem: (itemId: number) => void;
  removeSelectedItem: (itemId: number) => void;
  saveSelection: () => void;
  cancelSelection: () => void;
  setSearchValue: (value: string) => void;
  setElementNumberFilter: (filter: ElementNumberFilter) => void;
};
