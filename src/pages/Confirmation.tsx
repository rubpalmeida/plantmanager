import React from 'react'

import { useNavigation } from '@react-navigation/core';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {

  const navigation = useNavigation();

  function handleMoveON() {
    navigation.navigate('PlantSelection')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          😁
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.text}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.buttonContainer}>
          <Button title="Começar" onPress={handleMoveON} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emoji: {
    fontSize: 96,
    paddingVertical: 30,
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 24,
    lineHeight: 30,
  },
  text: {
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    textAlign: 'center',
    paddingHorizontal: 40,
    marginTop: 16,
  },
  buttonContainer: {
    marginTop: 40,
  }
})
