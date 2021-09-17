import {Text, View,SafeAreaView} from 'react-native'; 
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
            // <SafeAreaView>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'red',marginTop:43 }}>
                <Text>Mine Screen</Text>
            </View>
     
            );
    }
}
export default MineScreen;