import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/native';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification')
  }

  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
      </Text>

        <Image
          source={wateringImg}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
      </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleStart}
        >
          <MaterialIcons name="arrow-forward-ios" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.heading,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 38,
    marginTop: 38
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  subtitle: {
    color: colors.body_dark,
    fontFamily: fonts.text,
    fontSize: 18,
    fontWeight: "normal",
    lineHeight: 25,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.green,
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 24
  },
})
