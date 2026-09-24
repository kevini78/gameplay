import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { ListDivider } from '@/components/ListDivider';
import { PlayerItem } from '@/components/PlayerItem';
import { SectionHeader } from '@/components/SectionHeader';
import { guildDetails } from '@/data/games';
import { theme } from '@/theme';

export default function ServerDetails() {
  const insets = useSafeAreaInsets();
  const { name, description, banner, players } = guildDetails;

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <Pressable accessibilityRole="button" accessibilityLabel="Compartilhar" hitSlop={12}>
            <Image source={require('../../assets/icons/share.svg')} style={styles.share} />
          </Pressable>
        }
      />

      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Image source={banner} style={styles.banner} contentFit="cover" />
            <LinearGradient
              colors={['rgba(18,29,51,0)', 'rgba(18,29,51,0.611)', 'rgba(18,29,51,0.828)', '#121D33']}
              locations={[0, 0.536, 0.766, 1]}
              style={styles.bannerFade}
            />
            <View style={styles.bannerContent}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>

            <View style={styles.playersHeader}>
              <SectionHeader title="Jogadores" caption={`Total ${players.length}`} />
            </View>
          </View>
        }
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <ListDivider inset={64} top={12} bottom={11} />}
        renderItem={({ item }) => <PlayerItem player={item} />}
        style={styles.list}
      />

      <View style={[styles.footer, { paddingBottom: Math.max(insets.bottom, 40) }]}>
        <Button title="Entrar na partida" withDiscord />
      </View>
    </Background>
  );
}

const BANNER_HEIGHT = 234;

const styles = StyleSheet.create({
  share: {
    width: 24,
    height: 24,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: theme.gutter,
    paddingBottom: 24,
  },
  // O banner ocupa a largura toda, então cancela o padding da lista
  listHeader: {
    marginHorizontal: -theme.gutter,
  },
  banner: {
    width: '100%',
    height: BANNER_HEIGHT,
  },
  bannerFade: {
    ...StyleSheet.absoluteFill,
    height: BANNER_HEIGHT,
  },
  bannerContent: {
    position: 'absolute',
    left: theme.gutter,
    top: 0,
    maxWidth: 311,
    height: BANNER_HEIGHT,
    justifyContent: 'flex-end',
    paddingBottom: 24,
    gap: 12,
  },
  name: {
    fontFamily: theme.fonts.title700,
    fontSize: 28,
    color: theme.colors.heading,
  },
  description: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 21,
    color: theme.colors.heading,
  },
  playersHeader: {
    paddingHorizontal: theme.gutter,
    marginTop: 24,
    marginBottom: 23,
  },
  footer: {
    paddingHorizontal: theme.gutter,
    paddingTop: 16,
  },
});
