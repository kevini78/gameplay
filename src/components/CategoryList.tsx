import { ScrollView, StyleSheet } from 'react-native';

import { CategoryCard } from '@/components/CategoryCard';
import { categories, type CategoryId } from '@/data/games';
import { theme } from '@/theme';

type Props = {
  /** Sem `selected`, os cards são apenas atalhos (Home). */
  selected?: CategoryId | null;
  onSelect?: (id: CategoryId) => void;
};

export function CategoryList({ selected, onSelect }: Props) {
  const selectable = selected !== undefined;

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
          selected={selectable ? selected === category.id : undefined}
          onPress={() => onSelect?.(category.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
  },
  content: {
    paddingHorizontal: theme.gutter,
    gap: 8,
  },
});
