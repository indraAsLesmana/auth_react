import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header} from  './components/common';
import firebase from 'firebase';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAdV3_b22h0V911YIrsyfpRaDA9hSaQdWo',
            authDomain: 'quakereport-cde47.firebaseapp.com',
            databaseURL: 'https://quakereport-cde47.firebaseio.com',
            projectId: 'quakereport-cde47',
            storageBucket: 'quakereport-cde47.appspot.com',
            messagingSenderId: '729452584544'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text> An App!</Text>
            </View>
        );
    }
}

export default App;