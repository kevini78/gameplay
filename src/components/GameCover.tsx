import { StyleSheet, View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

import { theme } from '@/theme';

type Props = {
  source: ImageSource;
};

export function GameCover({ source }: Props) {
  return (
    <View style={styles.frame}>
      <Image source={source} style={styles.image} contentFit="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    width: 64,
    height: 68,
    borderRadius: theme.radius,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
    backgroundColor: theme.colors.input,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
