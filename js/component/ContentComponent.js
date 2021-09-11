import  React from 'react';
import { View, Text ,StyleSheet, Image,Dimensions,FlatList,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-elements';
import IconFeather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux'
import {ShoppingCarToRightData} from '../redux/actionCreators'
import styles from '../css/ContentComponentCss'
class ContentComponent extends React.Component{


  constructor(props){
    super(props)
  }


  _right_extraUniqueKey(item ,index){
    return "right"+index+item;
    }


  _listHeaderComponent=()=>{
    const {width,height} = Dimensions.get('window')
    return(
    <View style={{width:width,height:80,borderWidth:0.2,}}>
      <Text style={{textAlign:"center"}}>
        已包含：配送费减2，满55减5
      </Text>
    </View>
    )
  }  


    //刷新购物车  +
    refreshPurchaseQuantity=(item)=>{
      //把这个商品的数据传递给reduce
      //reduce 那这个数据去right里面去找到对应的商品减少/增加 1 然后返回新的state
      this.props.changeData(item)
  }


  /* 刷新购物车 - */
  refreshPurchaseQuantitied=(item)=>{

  }



  render(){
    const {width,height} = Dimensions.get('window')
    // var borderWidth = width-155;
    // var leftSideWidth = width*(1/5);
    var rightSidiWidth = width*(4/5);
    var rightSideTextWidth = rightSidiWidth-120-10;

    // var styles = StyleSheet.create({
    //   bigBox:{
    //     flex:1,
    //     flexDirection:"row",
    //     flexWrap:"wrap",
    //     backgroundColor:'#FFFFFF',
    //     marginTop:3,
    //     marginBottom:3,
    //     borderRadius:5,
    //     width:width*0.96
    // },
    // infoBox:{
    //   width:borderWidth,
    //   flex:1,
    //   flexDirection:"row",
    //   flexWrap:"wrap"
    // },
    // storeNameText:{
    //   width:borderWidth,
    //   marginLeft:10,
    //   marginTop:5,
    //   marginBottom:5,
    //   fontWeight:"bold",
    //   fontSize:20
    // },
    // infoBoxNode1:{
    // width:borderWidth ,
    // flexDirection:"row" 
    // },
    // infoBoxNode1_source:{
    //   marginLeft:10,
    //   marginRight:5,
    //   marginTop:5,
    //   marginBottom:5,
    //   fontWeight:'bold'
    // },
    // infoBoxNode2:{
    // width:borderWidth ,
    // flexDirection:"row",
    // marginTop:5,
    // marginBottom:5,
    // borderRadius:10,
    // },
    // infoBoxNode2_description_view:{
    //   marginLeft:10,
    //   borderWidth:2,
    //   borderColor:'#fab27b',
    //   borderRadius:7,
    //   backgroundColor:'#fab27b'
    // },
    // infoBoxNode2_description:{
    //   paddingLeft:10,
    //   color:'#b64533'
    // },
    // leftContentBox:{
    // width:leftSideWidth,
    // borderWidth:0.1,
    // borderColor:'#D3D3D3',
    // },
    // leftContentBox1:{
    // width:leftSideWidth,
    // borderWidth:1,
    // borderColor:'#D3D3D3',
    // backgroundColor:'#999d9c'
    // },
    // defaultLeftItem:{
    // height:80,
    // borderWidth:0.5,
    // borderColor:'#D3D3D3',
    // flex:1,
    // justifyContent:"center",
    // alignItems:"center"
    // },
    // activetLeftItem:{
    // height:80,
    // borderWidth:0.5,
    // borderColor:'#D3D3D3',
    // flex:1,
    // justifyContent:"center",
    // alignItems:"center",
    // backgroundColor:'#fcaf17',

    // },
    // pre_Item:{
    // height:80,
    // borderWidth:0.5,
    // borderColor:'#D3D3D3',
    // flex:1,
    // justifyContent:"center",
    // alignItems:"center",
    // borderBottomRightRadius:15,
    // },
    // next_item:{
    // height:80,
    // borderWidth:0.5,
    // borderColor:'#D3D3D3',
    // flex:1,
    // justifyContent:"center",
    // alignItems:"center",
    // borderTopRightRadius:15,
    // }
    // })

  
    return(      
      <View style={{flex:1}}>
        <View style={{width:width,height:70,borderWidth:0.2,backgroundColor:'#fcaf17',borderWidth:0.2,borderTopRightRadius:7,borderTopLeftRadius:7,borderBottomWidth:0}}>
          <View style={{flex:1,alignItems:"center",justifyContent:"center",}}>
            <Text>
              已包含：配送费减2，满55减5
            </Text>
          </View>
          <View style = {{flex:1,backgroundColor:'#fffffb',flexDirection:"row",alignItems:"center"}}>
            <Text style={{fontWeight:"bold",width:200}}>
              已选商品
            </Text>



          
            <View style = {{width:width-200,flex:1,flexDirection:"row",flexWrap:"wrap"}}>
              <View style = {{width:width-200,flex:1,flexDirection:"row",flexWrap:"wrap",paddingLeft:130}}>
              <Button
                type="clear"
                icon={
                    <IconFeather
                    name="trash-2"
                    size={20}
                    color='#d3d7d4'
                    />
                }
                />
                <Text style = {{marginTop:10}}>
                  清空
                </Text>
              </View>  
            </View>
            
          </View>
        </View>
      
      <FlatList 
      // showsVerticalScrollIndicator = {false}
      keyExtractor = {this._right_extraUniqueKey}
      data = {this.props.data}
      keyExtractor={this.left}
      renderItem={
        ({item})=> 
        <View style={{backgroundColor:'#f6f5ec'}}>
        <View style = {{flexDirection:"row",flexWrap:"wrap",borderColor:'#D3D3D3',borderRadius:10,marginBottom:15,backgroundColor:'#fffffb'}}>
        
        <Image 
        source = {{uri:item.goodsAvatar}}
        style = {{width:120,height:120}}
        />
        
        <View style={{width:rightSideTextWidth}}>
            
          <Text style = {{fontWeight:"bold",fontSize:18,marginLeft:15,marginBottom:13}} >
            {/* {item.goodsName.length>10?item.goodsName.substr(0,9)+'...':item.goodsName} */}
            {item.goodsName}
          </Text>
          <View style={{marginLeft:15,marginBottom:8}}>
            <Text style = {{borderWidth:1,borderColor:'#fab27b',borderRadius:7,backgroundColor:'#fab27b',color:'#b64533'}}>
              {item.goodsDiscription}
          
            </Text>
          </View>
          <View style={{flexDirection:"row",marginLeft:15,marginBottom:10}}> 
            <Text>
              月售 {item.goodsSalesVolume}
            </Text>
          </View>
    
            <View style={{flexDirection:"row",marginLeft:15}}>
              <Text style={{fontSize:16,fontWeight:"bold"}}>
                  价格 {item.goodsPrice}
              </Text>
              <View style={{marginLeft:50,marginTop:-10,flex:1,flexDirection:"row"}}>
                <Button
                type="clear"
                icon={
                    <Icon
                    name="minuscircle"
                    size={20}
                    color='#0000ff'
                    />
                }
                />
              <Text style={{marginTop:8}}>{item.purchaseQuantity}</Text>
              <Button
              onPressIn={this.refreshPurchaseQuantity.bind(this,item)}
              type="clear"
              icon={
                  <Icon
                  name="pluscircle"
                  size={20}
                  color='#0000ff'
                  />
              }
              />
            </View>
    
            </View>
    
        </View>
    
      </View> 

      </View>
      
    }

      >
      </FlatList>
    </View>
      )
    }
}


const mapState = state => ({
  data: state.shoppingCar
})

const mapDispatch = dispatch => ({
  changeData(data) {
    dispatch(ShoppingCarToRightData(data))
  }
})

export default connect(
  mapState,
  mapDispatch
)(ContentComponent)