import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import * as Location from 'expo-location';
import { WEATHER_API_KEY } from '@env'
import { useGetWeather } from './src/hooks/useGetWeather';


const App = () => {
  const [weather, isLoading, error] = useGetWeather();

  if (weather && weather.list && !isLoading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }

    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"tomato"} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;