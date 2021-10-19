import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {createGroup} from 'react-native-wifi-p2p';

const Send = () => {
  useEffect(() => {
    createGroup()
      .then(() => console.log('Group created successfully!'))
      .catch(err => console.error('2Something gone wrong. Details: ', err));
  }, []);
  return (
    <View>
      <Text>Select Files</Text>
    </View>
  );
};

export default Send;
