import type { Item } from '../../shared/types/item';

export const items: Item[] = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  label: `Element ${index + 1}`,
}));
