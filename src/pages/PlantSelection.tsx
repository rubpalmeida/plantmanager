import React, { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'

import { useNavigation } from '@react-navigation/core';

import api from '../services/api';

import { EnviromentButton } from '../components/EnviromentButton';
import { Header } from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { Load } from '../components/Load ';
import { PlantProps } from '../libs/storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentsProps {
  key: string;
  title: string;
}

export function PlantSelection() {
  const [envioroments, setEnviroments] = useState<EnviromentsProps[]>([])
  const [plants, setPlants] = useState<PlantProps[]>([])
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([])
  const [enviromentSelected, setEnviromentSelected] = useState('all')
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  async function fetchPlants() {
    const { data } = await api
      .get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data)
      return setLoading(true)

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data])
      setFilteredPlants(oldValue => [...oldValue, ...data])
    } else {
      setPlants(data);
      setFilteredPlants(data);
      setLoading(false);
    }

    setLoading(false);
    setLoadingMore(false);

  }

  function handleEnviromentSelected(enviroment: string) {
    setEnviromentSelected(enviroment)

    if (enviroment == 'all')
      return setFilteredPlants(plants);

    const filtered = plants.filter(plant =>
      plant.environments.includes(enviroment)
    );

    setFilteredPlants(filtered)
  }

  function handleFetchMore(distance: number) {
    if (distance < 1)
      return;

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant })
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api
        .get('plants_environments?_sort=title&_order=asc');

      setEnviroments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data
      ])
    }

    fetchEnviroment();

  }, [])

  useEffect(() => {
    fetchPlants();
  }, [])

  if (loading)
    return <Load />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>
          Em qual ambiente
        </Text>
        <Text style={styles.subtitle}>
          você quer colocar sua planta?
        </Text>

      </View>

      <View>
        <FlatList
          data={envioroments}
          keyExtractor={(item) => String(item.key)}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          renderItem={({ item }) => {
            return (
              <EnviromentButton
                title={item.title}
                active={item.key === enviromentSelected}
                onPress={() => handleEnviromentSelected(item.key)}
              />
            )
          }}
        />
      </View>

      <View style={styles.plantsContainer}>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          renderItem={({ item }) => {
            return (
              <PlantCardPrimary data={item} onPress={() => handlePlantSelect(item)} />
            )
          }}
          ListFooterComponent={
            loadingMore ?
              <ActivityIndicator color={colors.green} />
              : <></>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    paddingHorizontal: 30
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15,
    lineHeight: 20
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  environmentList: {
    paddingHorizontal: 30,
  },
  plantsContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginTop: 40,
  },
})
