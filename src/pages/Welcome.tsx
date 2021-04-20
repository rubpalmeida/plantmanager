import React from 'react';
import { Image, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors';

export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {'\n'}
        suas plantas {'\n'}
        de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>
          {">"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 38
  },
  image: {
    width: 292,
    height: 284,
  },
  subtitle: {
    color: colors.body_dark,
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
    marginBottom: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold"
  },
})
