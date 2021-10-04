import React from 'react';
import { TextInput,View } from 'react-native';

class Keyboard1 extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            keyboardType='default'
            />
            </View>
        );
    }
}

export default Keyboard1;