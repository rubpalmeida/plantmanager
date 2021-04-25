import React, { useEffect, useState } from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FlatList } from 'react-native-gesture-handler';
import { loadPlant, PlantProps } from '../libs/storage';

import { Header } from '../components/Header';
import { PlantCardSecundary } from '../components/PlantCardSecundary';
import { Load } from '../components/Load ';

import waterdropImg from '../assets/waterdrop.png'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>('');

  useEffect(() => {
    async function loadStorageData() {
      const plantsStorage = await loadPlant()

      const nextTime = formatDistance(
        new Date(plantsStorage[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      )

      setNextWatering(`Regue a sua ${plantsStorage[0].name} daqui à ${nextTime} horas`)

      setMyPlants(plantsStorage)
      setLoading(false);
    }

    loadStorageData();

  }, [])

  if (loading)
    return <Load />

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image
          source={waterdropImg}
          style={styles.spotlightImage}
        />
        <Text style={styles.spotlightText}>
          {nextWatering}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Proximas Regadas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <PlantCardSecundary
                data={
                  {
                    photo: item.photo,
                    name: item.name,
                    hour: item.hour
                  }
                }
              />
            )
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotlight: {
    height: 110,
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  spotlightImage: {
    width: 60,
    height: 60,
  },
  spotlightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  plants: {
    flex: 1,
    width: '100%',
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20,
  }
})
