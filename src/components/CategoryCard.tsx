import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '@/theme';
import type { Category } from '@/data/games';

type Props = {
  category: Category;
  /** Quando informado, o card vira selecionável (tela de agendamento). */
  selected?: boolean;
  onPress?: () => void;
};

const WIDTH = 104;
const HEIGHT = 120;

export function CategoryCard({ category, selected, onPress }: Props) {
  const selectable = selected !== undefined;
  const dimmed = selectable && !selected;

  return (
    <Pressable
      accessibilityRole={selectable ? 'radio' : 'button'}
      accessibilityState={selectable ? { selected } : undefined}
      onPress={onPress}
      style={styles.container}
    >
      {/* Fundo do card: gradiente na Home, cor sólida quando selecionável */}
      {selectable ? (
        <View style={[styles.background, styles.solid, dimmed && styles.dimmed]} />
      ) : (
        <LinearGradient
          colors={[theme.colors.cardTop, theme.colors.input]}
          style={styles.background}
        />
      )}

      {selectable && (
        <View style={[styles.check, selected ? styles.checked : styles.unchecked]} />
      )}

      <Image
        source={category.icon}
        style={[styles.icon, { width: category.iconWidth }, dimmed && styles.dimmed]}
        contentFit="contain"
      />
      <Text style={styles.title}>{category.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFill,
    borderRadius: theme.radius,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  solid: {
    backgroundColor: theme.colors.input,
  },
  dimmed: {
    opacity: 0.5,
  },
  check: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 2,
  },
  checked: {
    backgroundColor: theme.colors.primary,
  },
  unchecked: {
    opacity: 0.5,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.background[1],
  },
  icon: {
    height: 48,
    marginTop: 20,
  },
  title: {
    marginTop: 'auto',
    marginBottom: 17,
    fontFamily: theme.fonts.title700,
    fontSize: 15,
    color: theme.colors.heading,
  },
});
