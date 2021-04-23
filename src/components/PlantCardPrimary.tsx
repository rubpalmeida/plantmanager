import React from 'react';

import { StyleSheet, Text } from 'react-native';

import { SvgFromUri } from 'react-native-svg';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri
        uri={data.photo}
        width={73.65}
        height={89.22}
      />

      <Text style={styles.plantName}>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 148,
    height: 154,
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  plantName: {
    color: colors.green_dark,
    fontFamily: fonts.heading
  }
})
