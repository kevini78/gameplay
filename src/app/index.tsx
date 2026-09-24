import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { Button } from '@/components/Button';
import { theme } from '@/theme';

export default function Login() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <Background>
      <Image
        source={require('../../assets/images/login-stripes.svg')}
        style={styles.stripes}
        contentFit="fill"
      />

      {/* A ilustração está espelhada no Figma */}
      <Image
        source={require('../../assets/images/login-hero.png')}
        style={styles.hero}
        contentFit="cover"
      />
      <LinearGradient
        colors={['rgba(12,18,59,0)', theme.colors.fade]}
        locations={[0, 0.86]}
        style={styles.fade}
      />

      <View style={[styles.content, { paddingBottom: insets.bottom + 128 }]}>
        <Text style={styles.title}>{'Conecte-se\ne organize suas\njogatinas'}</Text>
        <Text style={styles.subtitle}>
          {'Crie grupos para jogar seus games\nfavoritos com seus amigos'}
        </Text>

        <Button
          title="Entrar com Discord"
          withDiscord
          style={styles.button}
          onPress={() => router.replace('/home')}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  stripes: {
    position: 'absolute',
    top: 100,
    left: -6,
    width: 387,
    height: 359,
  },
  hero: {
    position: 'absolute',
    top: 114,
    alignSelf: 'center',
    width: 250,
    height: 297,
    transform: [{ scaleX: -1 }],
  },
  fade: {
    position: 'absolute',
    top: 291,
    left: 0,
    right: 0,
    height: 220,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    lineHeight: 40,
    color: theme.colors.heading,
  },
  subtitle: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: theme.fonts.text400,
    fontSize: 15,
    lineHeight: 25,
    color: theme.colors.heading,
  },
  button: {
    marginTop: 48,
    width: 274,
  },
});
