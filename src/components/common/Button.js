import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onClick, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onClick}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles ={
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 16,
        paddingBottom: 16
    }

};

export {Button};