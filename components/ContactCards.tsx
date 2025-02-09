import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from './CustomText';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Chaudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <CustomText style={styles.headingText}>Contact Cards</CustomText>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <CustomText style={styles.userName}>{name}</CustomText>
              <CustomText style={styles.userStatus}>{status}</CustomText>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8 },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#8D3DAF',
    borderRadius: 7,
    marginBottom: 6,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  userStatus: {
    marginTop: 3,
  },
});
