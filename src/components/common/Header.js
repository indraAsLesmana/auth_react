// import libarary
import React from 'react';
import { Text, View } from 'react-native';

// make a Component
const Header = (props) => {
    const {titleStyle, headerContainer} = styles;
    return (
        <View style={headerContainer}>
            <Text style={titleStyle}>{props.title}</Text>
        </View>
    );
};
const styles = {
    headerContainer: {
        paddingTop: 15,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f39c12',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    titleStyle: {
        fontSize: 20,
        color: '#FFF'
    }

};


// make the component availabe to other parts of the app
export {Header};