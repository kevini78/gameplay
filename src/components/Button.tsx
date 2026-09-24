import { Pressable, StyleSheet, Text, View, type PressableProps } from 'react-native';
import { Image } from 'expo-image';

import { theme } from '@/theme';

type Props = Omit<PressableProps, 'children'> & {
  title: string;
  withDiscord?: boolean;
};

export function Button({ title, withDiscord = false, style, ...rest }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      style={(state) => [
        styles.container,
        state.pressed && styles.pressed,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...rest}
    >
      {withDiscord && (
        <View style={styles.icon}>
          <Image
            source={require('../../assets/icons/discord.svg')}
            style={styles.discord}
            contentFit="contain"
          />
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: theme.radius,
    backgroundColor: theme.colors.primary,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.85,
  },
  icon: {
    width: 56,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: theme.colors.primaryDivider,
  },
  discord: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    lineHeight: 25,
    color: theme.colors.heading,
  },
});
