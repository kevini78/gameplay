import type { ReactNode } from 'react';
import { StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { theme } from '@/theme';

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Background({ children, style }: Props) {
  return (
    <LinearGradient
      colors={[...theme.colors.background]}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
