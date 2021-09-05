import {Text, View} from 'react-native'; 
import React from 'react'

class MineScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginName:'',
            password:'',
            result:''
        }
    }
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Mine Screen</Text>
            </View>
            );
    }
}
export default MineScreen;