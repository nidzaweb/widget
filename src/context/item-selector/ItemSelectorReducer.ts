import {
  MAX_SELECTED_ITEMS,
  type ItemSelectorAction,
  type ItemSelectorState,
} from './ItemSelectorTypes';

export function itemSelectorReducer(
  state: ItemSelectorState,
  action: ItemSelectorAction
): ItemSelectorState {
  switch (action.type) {
    case 'OPEN_WIDGET': {
      const isMaxItemsSelected =
        state.selectedItemIds.length >= MAX_SELECTED_ITEMS;
      return {
        ...state,
        isOpen: true,
        isMaxItemsSelected,
        draftSelectedItemIds: state.selectedItemIds,
      };
    }

    case 'CLOSE_WIDGET': {
      const isMaxItemsSelected =
        state.selectedItemIds.length >= MAX_SELECTED_ITEMS;
      return {
        ...state,
        isMaxItemsSelected,
        isOpen: false,
      };
    }

    case 'TOGGLE_DRAFT_ITEM': {
      const itemId = action.payload;
      const isSelected = state.draftSelectedItemIds.includes(itemId);
      const selectedItemsCount = !isSelected
        ? state.draftSelectedItemIds.length + 1
        : state.draftSelectedItemIds.length - 1;

      const isMaxItemsSelected = selectedItemsCount >= MAX_SELECTED_ITEMS;

      if (isMaxItemsSelected && isSelected) return state;

      return {
        ...state,
        isMaxItemsSelected,
        draftSelectedItemIds: isSelected
          ? state.draftSelectedItemIds.filter((id) => id !== itemId)
          : [...state.draftSelectedItemIds, itemId],
      };
    }

    case 'REMOVE_SELECTED_ITEM': {
      const itemId = action.payload;
      const isMaxItemsSelected =
        state.draftSelectedItemIds.length - 1 >= MAX_SELECTED_ITEMS;

      return {
        ...state,
        isMaxItemsSelected,
        selectedItemIds: state.selectedItemIds.filter((id) => id !== itemId),
        draftSelectedItemIds: state.draftSelectedItemIds.filter(
          (id) => id !== itemId
        ),
      };
    }

    case 'SET_SEARCH_VALUE': {
      return {
        ...state,
        searchValue: action.payload,
      };
    }

    case 'SET_ELEMENT_NUMBER_FILTER':
      return {
        ...state,
        elementNumberFilter: action.payload,
      };

    case 'SAVE_SELECTION': {
      return {
        ...state,
        selectedItemIds: state.draftSelectedItemIds,
        isOpen: false,
      };
    }

    case 'CANCEL_SELECTION': {
      const isMaxItemsSelected =
        state.selectedItemIds.length >= MAX_SELECTED_ITEMS;

      return {
        ...state,
        isMaxItemsSelected,
        draftSelectedItemIds: state.selectedItemIds,
        isOpen: false,
      };
    }

    default:
      return state;
  }
}
