/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

import Crashes from 'appcenter-crashes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      {Platform.OS === 'ios' ? null : <StatusBar barStyle={'light-content'} />}
      <View style={styles.container}>
        <Text>Welcome to CICD React Native Example</Text>
        <TouchableOpacity 
        style={{
          backgroundColor: '#ccc',
          padding: 20,
          width: 100,
          alignItems: 'center'
        }}
        onPress={() => { Crashes.generateTestCrash()}}>
          <Text>Crash</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
