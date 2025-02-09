import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

export default function ElevatedCards() {
  return (
    <View>
      <CustomText style={styles.headingCustomText}>ElevatedCards</CustomText>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <CustomText>Tap</CustomText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <CustomText>me</CustomText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <CustomText>to</CustomText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <CustomText>Scroll</CustomText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <CustomText>more...</CustomText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <CustomText>Damm</CustomText>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingCustomText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 4,
    color: '#000000',
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
  },
});
