import { Feather } from '@expo/vector-icons';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  },
  handleRemove: () => void;
}

export const PlantCardSecundary = ({ data, handleRemove, ...rest }: PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
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
  },
  buttonRemove: {
    width: 100,
    height: 85,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    position: 'relative',
    right: 20,
    borderRadius: 20,
    paddingLeft: 15,
  },
})
