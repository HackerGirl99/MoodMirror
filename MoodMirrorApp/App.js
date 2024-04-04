// // import { StatusBar } from 'expo-status-bar';
// // import React from 'react';
// // import { StyleSheet, Text, View } from 'react-native';

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <StatusBar style="auto" />
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
//-------------------------------------------------------------------------


import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'; // Import icons library

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
    </View>
  );
};

const AnalyzeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Analyze your emotions here!</Text><br></br>
      <View>
      <View style={styles.cameraButtonContainer}>
       <Button title="Open Your Camera" onPress={() => { /* navigate to camera screen */}} />
       </View><br></br>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Analyze') {
              iconName = focused ? 'video' : 'video-outline';
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Analyze" component={AnalyzeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navBar: {
    height: 50,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraButtonContainer: {
    backgroundColor: 'transparent',
  },
  cameraButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#3498db', // Customize button background color
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
