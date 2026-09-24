import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { theme } from '@/theme';

type Props = {
  title: string;
  action?: ReactNode;
};

export function Header({ title, action }: Props) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[theme.colors.cardTop, theme.colors.input]}
      style={[styles.container, { paddingTop: Math.max(insets.top, 44) }]}
    >
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Voltar"
        hitSlop={12}
        onPress={() => router.back()}
        style={styles.side}
      >
        <Image source={require('../../assets/icons/back.svg')} style={styles.icon} />
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <View style={[styles.side, styles.right]}>{action}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowColor: '#11173D',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 24,
    elevation: 12,
  },
  side: {
    width: 32,
    height: 60,
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    color: theme.colors.heading,
  },
});
