import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  // within the style you are calling the function, passing the size parameter and getting the radius back
  return (
<TouchableOpacity style={[styles(size).radius, style]}> 
    <Text 
        style={[styles(size).text, textStyle]} 
        onPress={props.onPress}>
            {props.title}
    </Text> 
</TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: { color: '#fff', fontSize: size / 3 },
  });
