import React from 'react'
import {View,Text,FlatList,Image,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')
export default class MyTextComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: this.props.goods,
            number: this.props.goodsNumber
        }
    }


    render(){
        return(
            <View style = {{flex:1,flexDirection:'row',width:width*0.95,backgroundColor:'white',alignItems:'center'}}>
            <FlatList
                bounces = {false}   //禁止弹性滑动
                style={{width:width*0.79,marginLeft:width*0.02}}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
            
                data={this.state.data}
                listKey={item => item.goodsId}
                renderItem={({item})=>

                    <View style={{borderColor:'red',borderWidth:0.1,flexDirection:'column',justifyContent:'flex-start',paddingRight:10
                    ,backgroundColor:'white'
                    }}>
                        
                        <Image source = {{uri:item.goodsAvatar}} style = {{width:80,height:80,borderRadius:5,}}/>
                        <Text style = {{textAlign:'center',marginTop:height*0.01}}>{item.goodsName}</Text>
                    </View>
                

                }
            />
            <View style={{width:width*0.2,borderColor:1,borderColor:'back',flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
            <View style={{width:width*0.06}}>
                <Text style={{width:15,textAlign:'center'}}>
                    共 {this.state.number} 件
                </Text>
            </View>
            </View>
            </View>
        )
    }



}