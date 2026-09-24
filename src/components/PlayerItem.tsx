import { StyleSheet, Text, View } from 'react-native';

import { ProfilePicture } from '@/components/ProfilePicture';
import type { Player } from '@/data/games';
import { theme } from '@/theme';

type Props = {
  player: Player;
};

export function PlayerItem({ player }: Props) {
  const statusColor = player.available ? theme.colors.success : theme.colors.primary;

  return (
    <View style={styles.container}>
      <ProfilePicture source={player.avatar} position={player.avatarPosition} />

      <View style={styles.content}>
        <Text style={styles.name}>{player.name}</Text>

        <View style={styles.status}>
          <View style={[styles.dot, { backgroundColor: statusColor }]} />
          <Text style={styles.statusText}>{player.available ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  content: {
    flex: 1,
    gap: 6,
  },
  name: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
});
