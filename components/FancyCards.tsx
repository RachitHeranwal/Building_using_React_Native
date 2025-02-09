import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

export default function FancyCards() {
  return (
    <View>
      <CustomText style={styles.headingCustomText}>FancyCards</CustomText>
      <View style={[styles.card, styles.cardEleveted]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
          }}
          style={styles.cardImage}
        />
        <CustomText style={styles.cardTitle}>Taj Mahal</CustomText>
        <CustomText style={styles.cardLabel}>Agra,India</CustomText>
        <CustomText style={styles.cardDescription}>
          The Taj Mahal is an ivory-white marble mausoleum on the right bank of
          the river Yamuna in the Indian city of Agra. It was built by Mughal
          Emperor Shah Jahan in 1632 as a mausoleum for his wife, Mumtaz Mahal,
          who died in childbirth in 1631. The Taj Mahal is generally considered
          the finest example of Mughal architecture, a blend of Indian, Persian
          and Islamic styles.
        </CustomText>
        <CustomText style={styles.cardFooter}></CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingCustomText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 12,
    padding: 8,
    marginVertical: 10
  },
  cardEleveted: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardLabel: {
    fontSize: 18,
    color: '#888',
    marginTop: 5,
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 10,
    color: '#111',
  },
  cardFooter: {
    marginTop: 10,
    fontSize: 16,
    color: '#888',
  },
});
