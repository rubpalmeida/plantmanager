import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export function PlantCardSecundary({ data, ...rest }: PlantProps) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >

      <View style={styles.plant}>
        <SvgFromUri
          uri={data.photo}
          width={56}
          height={56}
        />
        <Text style={styles.plantName}>
          {data.name}
        </Text>
      </View>

      <View>
        <Text style={styles.timeLabel}>
          Regar às
        </Text>
        <Text style={styles.time}>
          {data.hour}
        </Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 26,
    marginBottom: 20,
  },
  plant: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  plantName: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginLeft: 20
  },
  timeLabel: {
    textAlign: 'right',
    fontSize: 13,
    fontFamily: fonts.complement,
    color: colors.body_light
  },
  time: {
    textAlign: 'right',
    fontSize: 13,
    fontFamily: fonts.heading,
    color: colors.heading,
  }
})
