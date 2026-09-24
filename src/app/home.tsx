import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { CategoryList } from '@/components/CategoryList';
import { ListDivider } from '@/components/ListDivider';
import { MatchItem } from '@/components/MatchItem';
import { ProfilePicture } from '@/components/ProfilePicture';
import { SectionHeader } from '@/components/SectionHeader';
import { matches } from '@/data/games';
import { theme } from '@/theme';

export default function Home() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <Background>
      <View style={[styles.profile, { paddingTop: Math.max(insets.top, 44) + 12 }]}>
        <ProfilePicture source={require('../../assets/images/avatar-tiago-home.png')} />

        <View style={styles.greeting}>
          <Text style={styles.hello}>
            <Text style={styles.helloLight}>Olá, </Text>
            Tiago
          </Text>
          <Text style={styles.message}>Hoje é dia de vitória</Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Agendar partida"
          onPress={() => router.push('/agendar')}
          style={({ pressed }) => [styles.add, pressed && styles.pressed]}
        >
          <Image source={require('../../assets/icons/plus.svg')} style={styles.plus} />
        </Pressable>
      </View>

      <View style={styles.categories}>
        <CategoryList />
      </View>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={[styles.listContent, { paddingBottom: insets.bottom + 24 }]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <SectionHeader title="Partidas agendadas" caption={`Total ${matches.length}`} />
          </View>
        }
        ItemSeparatorComponent={() => <ListDivider inset={84} top={1} bottom={31} />}
        renderItem={({ item }) => (
          <MatchItem match={item} onPress={() => router.push('/servidor')} />
        )}
      />
    </Background>
  );
}

const styles = StyleSheet.create({
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.gutter,
    gap: 20,
  },
  greeting: {
    flex: 1,
  },
  hello: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  helloLight: {
    fontFamily: theme.fonts.title500,
  },
  message: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: theme.colors.body,
  },
  add: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius,
    backgroundColor: theme.colors.primary,
  },
  pressed: {
    opacity: 0.85,
  },
  plus: {
    width: 24,
    height: 24,
  },
  categories: {
    marginTop: 40,
  },
  list: {
    flex: 1,
    marginTop: 40,
  },
  listContent: {
    paddingHorizontal: theme.gutter,
  },
  listHeader: {
    marginBottom: 27,
  },
});
