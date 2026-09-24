import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '@/theme';

type Props = {
  /** Distância entre o divisor e a borda esquerda do conteúdo. */
  inset: number;
  /** Espaço acima do divisor. */
  top: number;
  /** Espaço abaixo do divisor. */
  bottom: number;
};

// Divisor que vai até a borda direita da tela (por isso o marginRight negativo).
export function ListDivider({ inset, top, bottom }: Props) {
  return (
    <LinearGradient
      colors={[theme.colors.cardTop, theme.colors.input]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.line, { marginLeft: inset, marginTop: top, marginBottom: bottom }]}
    />
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    marginRight: -theme.gutter,
  },
});
