import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Background } from '@/components/Background';
import { Button } from '@/components/Button';
import { CategoryList } from '@/components/CategoryList';
import { Header } from '@/components/Header';
import { SectionHeader } from '@/components/SectionHeader';
import { ServerSelector } from '@/components/ServerSelector';
import { TextBox } from '@/components/TextBox';
import { selectedServer, type CategoryId } from '@/data/games';
import { theme } from '@/theme';

export default function Schedule() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [category, setCategory] = useState<CategoryId | null>(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  // Tocar na categoria já selecionada desfaz a seleção
  function handleSelectCategory(id: CategoryId) {
    setCategory((current) => (current === id ? null : id));
  }

  return (
    <Background>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Header title="Agendar partida" />

        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.content, { paddingBottom: Math.max(insets.bottom, 40) }]}
        >
          <View style={styles.field}>
            <Text style={styles.label}>Categoria</Text>
          </View>
          <View style={styles.categories}>
            <CategoryList selected={category} onSelect={handleSelectCategory} />
          </View>

          <View style={styles.server}>
            <ServerSelector
              name={selectedServer.name}
              game={selectedServer.game}
              cover={selectedServer.cover}
            />
          </View>

          <View style={styles.dateTime}>
            <View>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.inputs}>
                <TextBox
                  variant="small"
                  keyboardType="number-pad"
                  maxLength={2}
                  value={day}
                  onChangeText={setDay}
                  accessibilityLabel="Dia"
                />
                <Text style={styles.divider}>/</Text>
                <TextBox
                  variant="small"
                  keyboardType="number-pad"
                  maxLength={2}
                  value={month}
                  onChangeText={setMonth}
                  accessibilityLabel="Mês"
                />
              </View>
            </View>

            <View>
              <Text style={styles.label}>Horário</Text>
              <View style={styles.inputs}>
                <TextBox
                  variant="small"
                  keyboardType="number-pad"
                  maxLength={2}
                  value={hour}
                  onChangeText={setHour}
                  accessibilityLabel="Hora"
                />
                <Text style={styles.divider}>:</Text>
                <TextBox
                  variant="small"
                  keyboardType="number-pad"
                  maxLength={2}
                  value={minute}
                  onChangeText={setMinute}
                  accessibilityLabel="Minutos"
                />
              </View>
            </View>
          </View>

          <View style={styles.description}>
            <SectionHeader title="Descrição" caption="Max 100 caracteres" />
            <TextBox
              variant="area"
              maxLength={100}
              autoCorrect={false}
              value={description}
              onChangeText={setDescription}
            />
          </View>

          <View style={styles.footer}>
            <Button title="Agendar" onPress={() => router.navigate('/home')} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingTop: 32,
  },
  field: {
    paddingHorizontal: theme.gutter,
    marginBottom: 12,
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  categories: {
    marginBottom: 32,
  },
  server: {
    paddingHorizontal: theme.gutter,
  },
  dateTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.gutter,
    marginTop: 28,
  },
  inputs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },
  divider: {
    width: 11,
    textAlign: 'center',
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.body,
  },
  description: {
    paddingHorizontal: theme.gutter,
    marginTop: 28,
    gap: 12,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: theme.gutter,
    paddingTop: 32,
  },
});
