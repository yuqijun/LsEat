import React from 'react'
import { Text, View } from 'react-native' 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CommunicationIndexPage from '../page/communicationIndexPage'
// export default class CommunicationList extends React.Component{

    
    
// }

const Stack = createNativeStackNavigator();

function CommunicationListNavigation (){

    return(
    <Stack.Navigator initialRouteName = 'communicationIndex' >
        {/* 通讯列表 */}
        {/* <Stack.Screen  name='communicationIndex' component={CommunicationIndexPage} /> */}

        <Stack.Screen  name='communicationIndex' component={()=>{
            return(
                <View>
                    <Text>
                        通讯列表
                    </Text>
                </View>
            )
        }} />
        {/* 单线通讯 */}
        <Stack.Screen name='communicationSingle' component={
            ()=>{
                return(
                <View>
                    <Text>
                        单线通讯
                    </Text>
                </View>
                )
            }
        }  />
    </Stack.Navigator>
    )
}

export default CommunicationListNavigation;