import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactCards from './components/ContactCards';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
        <ContactCards />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});

export default App;
