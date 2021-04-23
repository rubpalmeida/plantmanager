import React from 'react';

import { StyleSheet, Text } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}


export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>
        {title}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 76,
    height: 40,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20,
    marginRight: 5
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  text: {
    fontSize: 13,
    fontFamily: fonts.text,
    color: colors.heading
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark
  },

})
