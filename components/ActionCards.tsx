import { StyleSheet, View, Linking, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import CustomText from './CustomText';

export default function ActionCards() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <CustomText style={styles.headingCustomText}>Blog Card</CustomText>
      <View style={[styles.card, styles.elevatedCard]}>
        <CustomText style={styles.headerCustomText}>
          What's new in Javascript 21 -ES12
        </CustomText>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bottomContainer}>
          <View>
            <CustomText style={styles.cardDescription}>
              {' '}
              JavaScript ES2021 (ES12) introduced several new features to enhance the language's functionality and developer experience.Some of the notable additions include logical assignment operators (&&=, ||=, ??=), which provide a more concise way to apply
logical..
            </CustomText>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => openWebsite('https://www.freecodecamp.org/news/')}>
              <CustomText style={styles.socialLink}>Read More</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openWebsite('https://www.freecodecamp.org/news/')}>
              <CustomText style={styles.socialLink}>Follow Me</CustomText>
            </TouchableOpacity>
          </View>
        </View>
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
    marginVertical: 10,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  bottomContainer: {
    flex: 1,
  },
  headerCustomText: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  cardDescription: {
    padding: 8,
    fontSize: 17,
    marginBottom: 20,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    alignContent: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
  },
  socialLink: {
    backgroundColor: '#FFF',
    padding: 4,
    borderRadius: 6,
    
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
