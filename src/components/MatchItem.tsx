import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

import { GameCover } from '@/components/GameCover';
import type { Match } from '@/data/games';
import { theme } from '@/theme';

type Props = {
  match: Match;
  onPress?: () => void;
};

export function MatchItem({ match, onPress }: Props) {
  const role = match.isHost ? 'Anfitrião' : 'Visitante';
  const roleColor = match.isHost ? theme.colors.primary : theme.colors.success;

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <GameCover source={match.cover} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.guild}>{match.guild}</Text>
          <Text style={styles.category}>{match.category}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.info}>
            <Image source={require('../../assets/icons/calendar.svg')} style={styles.icon} />
            <Text style={styles.date}>{match.date}</Text>
          </View>

          <View style={styles.info}>
            <Image
              source={
                match.isHost
                  ? require('../../assets/icons/player-red.svg')
                  : require('../../assets/icons/player-green.svg')
              }
              style={styles.icon}
            />
            <Text style={[styles.role, { color: roleColor }]}>{role}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 69,
    flexDirection: 'row',
    gap: 20,
  },
  pressed: {
    opacity: 0.7,
  },
  content: {
    flex: 1,
    paddingTop: 5,
    gap: 11,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    width: 16,
    height: 16,
  },
  guild: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  category: {
    marginTop: 3,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
  date: {
    fontFamily: theme.fonts.text500,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.heading,
  },
  role: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 17,
  },
});
