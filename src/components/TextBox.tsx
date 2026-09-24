import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { theme } from '@/theme';

type Props = TextInputProps & {
  /** Caixa quadrada de um dígito/par de dígitos (data e hora) ou área de texto. */
  variant: 'small' | 'area';
};

export function TextBox({ variant, style, ...rest }: Props) {
  return (
    <TextInput
      placeholderTextColor={theme.colors.body}
      selectionColor={theme.colors.primary}
      multiline={variant === 'area'}
      textAlignVertical={variant === 'area' ? 'top' : 'center'}
      style={[styles.base, variant === 'small' ? styles.small : styles.area, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.input,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.heading,
  },
  small: {
    width: 48,
    height: 48,
    textAlign: 'center',
    fontSize: 15,
  },
  area: {
    height: 95,
    padding: 16,
    lineHeight: 21,
  },
});
