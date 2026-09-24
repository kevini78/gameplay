import { StyleSheet, Text, View } from 'react-native';

import { theme } from '@/theme';

type Props = {
  title: string;
  caption?: string;
};

export function SectionHeader({ title, caption }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {caption ? <Text style={styles.caption}>{caption}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  caption: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
});
