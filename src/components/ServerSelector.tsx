import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

import { GameCover } from '@/components/GameCover';
import { theme } from '@/theme';

type Props = {
  name: string;
  game: string;
  cover: ImageSource;
  onPress?: () => void;
};

export function ServerSelector({ name, game, cover, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View pointerEvents="none" style={styles.border} />
      <GameCover source={cover} />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.game}>{game}</Text>
      </View>

      <Image source={require('../../assets/icons/chevron.svg')} style={styles.chevron} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
  },
  // A borda fica por baixo para a capa (64x68) ocupar o card inteiro
  border: {
    ...StyleSheet.absoluteFill,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius,
  },
  pressed: {
    opacity: 0.7,
  },
  content: {
    flex: 1,
    marginLeft: 20,
    gap: 4,
  },
  name: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  game: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
  chevron: {
    width: 6,
    height: 8.5,
    marginRight: 24,
  },
});
