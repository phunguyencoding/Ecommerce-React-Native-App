/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import {View, StatusBar, useColorScheme} from 'react-native';
 import {StripeProvider} from '@stripe/stripe-react-native';
 
 import {Colors} from 'react-native/Libraries/NewAppScreen';
 import Router from './src/router';
 
 import Amplify, {Auth} from 'aws-amplify';
 import {withAuthenticator} from 'aws-amplify-react-native';
 
 import config from './src/aws-exports';
 Amplify.configure(config);
 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
     flex: 1,
   };
   return (
     <View style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <StripeProvider publishableKey="pk_test_51IzGjdITglaubVX4md70XPlLTrXVs1Z1YfRCBwvt2JU40tjMZNwidzALICXvDDFvWhbMyPktB4ZbFY0rF8TlRL2a00L0v7icJW">
         <Router />
       </StripeProvider>
     </View>
   );
 };
 
 export default withAuthenticator(App);
 