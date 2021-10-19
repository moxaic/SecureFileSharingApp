import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      {[
        {
          onPress: () => navigation.navigate('Send'),
          title: 'Send files',
        },
        {
          onPress: () => navigation.navigate('Recieve'),
          title: 'Receive files',
        },
      ].map(({onPress, title}, key) => (
        <TouchableOpacity {...{key, onPress, style: styles.button}}>
          <Text>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 999,
    marginVertical: 20,
    padding: 10,
    width: 100,
  },
});

export default Home;
