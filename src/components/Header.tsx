import React, { useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Image, StyleSheet, Text, View } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';


import colors from '../styles/colors';
import userImg from '../assets/userImg.png';
import fonts from '../styles/fonts';

export function Header() {

  const [userName, setUserName] = useState<string>()

  useEffect(() => {
    async function getUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user')

      setUserName(user || '');
    }

    getUserName();
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 40,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
})
