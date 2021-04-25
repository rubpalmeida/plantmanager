import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/core';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ConfirmationProps {
  title: string;
  subTitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug'
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😁'
}

export function Confirmation() {

  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subTitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as ConfirmationProps;

  function handleMoveON() {
    navigation.navigate(nextScreen)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.text}>
          {subTitle}
        </Text>

        <View style={styles.buttonContainer}>
          <Button title={buttonTitle} onPress={handleMoveON} />
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
    width: '100%',
    paddingHorizontal: 80,
    marginTop: 20
  }
})
