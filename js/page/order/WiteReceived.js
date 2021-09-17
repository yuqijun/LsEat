import  React from 'react';
import { View, Text ,FlatList} from 'react-native';
export default class WiteReceived extends React.Component{

    constructor(props){
        
        super(props)

        this.state={
            order:''
        }
    }

    componentDidMount(){
        //请求后端API获取订单数据
    }


    render(){
        return(
            <View>
                {/* <FlatList
                showsVerticalScrollIndicator = {false}
                data = {this.state.order}
                renderItem={(item)=>{
                    <View style={{backgroundColor:'white',borderRadius:12,height:height*0.3}}>

                    </View>
                }}
                >

                </FlatList> */}
                <Text>
                    待收货订单
                </Text>
            </View>
        )
    }
}