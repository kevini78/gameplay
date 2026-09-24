import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

import { theme } from '@/theme';

type Props = {
  source: ImageSource;
  width?: number;
  height?: number;
  /** Ponto do recorte da imagem (mesmo formato do contentPosition do expo-image). */
  position?: 'center' | 'top';
  style?: StyleProp<ViewStyle>;
};

export function ProfilePicture({ source, width = 48, height = 48, position = 'center', style }: Props) {
  return (
    <View style={[styles.frame, { width, height }, style]}>
      <Image source={source} style={styles.image} contentFit="cover" contentPosition={position} />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
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
