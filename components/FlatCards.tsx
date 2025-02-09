import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';
export default function FlatCards() {
  return (
    <View>
      <CustomText style={styles.headingText}>FlatCards</CustomText>
      <View style={styles.container}>
        <View style={[styles.cardOne, styles.card]}>
          <CustomText>Red</CustomText>
        </View>
        <View style={[styles.cardTwo, styles.card]}>
          <CustomText>Blue</CustomText>
        </View>
        <View style={[styles.cardThree, styles.card]}>
          <CustomText>Green</CustomText>
        </View>
        <View style={[styles.cardFour, styles.card]}>
          <CustomText>Purple</CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    width: '21%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#42A5F5',
  },
  cardThree: {
    backgroundColor: '#66BB6A',
  },
  cardFour: {
    backgroundColor: '#8A2BE2',
  },
});
