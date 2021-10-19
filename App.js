import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {PermissionsAndroid} from 'react-native';
import {
  initialize,
  startDiscoveringPeers,
  stopDiscoveringPeers,
  unsubscribeFromPeersUpdates,
  unsubscribeFromThisDeviceChanged,
  unsubscribeFromConnectionInfoUpdates,
  subscribeOnConnectionInfoUpdates,
  subscribeOnThisDeviceChanged,
  subscribeOnPeersUpdates,
  connect,
  cancelConnect,
  createGroup,
  removeGroup,
  getAvailablePeers,
  sendFile,
  receiveFile,
  getConnectionInfo,
  getGroupInfo,
  receiveMessage,
  sendMessage,
} from 'react-native-wifi-p2p';
import Home from './src/screens/Home';
import Send from './src/screens/Send';
import Receive from './src/screens/Recieve';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    (async () => {
      try {
        await initialize();
        // since it's required in Android >= 6.0
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          {
            title: 'Access to wi-fi P2P mode',
            message: 'ACCESS_FINE_LOCATION',
          },
        );

        console.log(
          granted === PermissionsAndroid.RESULTS.GRANTED
            ? 'You can use the p2p mode'
            : 'Permission denied: p2p mode will not work',
        );

        subscribeOnPeersUpdates(console.log);
        subscribeOnConnectionInfoUpdates(console.log);
        subscribeOnThisDeviceChanged(console.log);

        const status = await startDiscoveringPeers();
        console.log('startDiscoveringPeers status: ', status);
      } catch (e) {
        console.error(e);
      }
    })();
    // initialize()
    //   .then(isInitializedSuccessfully =>
    //     console.log('isInitializedSuccessfully: ', isInitializedSuccessfully),
    //   )
    //   .catch(err => console.log('initialization was failed. Err: ', err));

    // PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    //   {
    //     title: 'Access to wi-fi P2P mode',
    //     message: 'ACCESS_FINE_LOCATION',
    //   },
    // ).then(granted => {
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log('You can use the p2p mode');
    //   } else {
    //     console.log('Permission denied: p2p mode will not work');
    //   }
    // });

    // startDiscoveringPeers()
    //   .then(() => console.log('Starting of discovering was successful'))
    //   .catch(err =>
    //     console.error(
    //       `Something is gone wrong. Maybe your WiFi is disabled? Error details: ${err}`,
    //     ),
    //   );
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Recieve" component={Receive} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// https://github.com/kirillzyusko/react-native-wifi-p2p/issues/44
