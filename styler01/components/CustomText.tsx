import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';


const CustomText: React.FC<TextProps> = ({ style, ...props }) => {
  return <Text style={[styles.text, style]} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    color: '#fff', // white text
  },
});

export default CustomText;