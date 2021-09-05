import {StyleSheet,Dimensions} from 'react-native'; 


const {width,height} = Dimensions.get('window')
var borderWidth = width-155;
var leftSideWidth = width*(1/5);
var rightSidiWidth = width*(4/5);
var rightSideTextWidth = rightSidiWidth-120-10;


export default styles = StyleSheet.create({
    bigBox:{
      flex:1,
      flexDirection:"row",
      flexWrap:"wrap",
      backgroundColor:'#FFFFFF',
      marginTop:3,
      marginBottom:3,
      borderRadius:5,
      width:width*0.96
  },
  infoBox:{
    width:borderWidth,
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap"
  },
  storeNameText:{
    width:borderWidth,
    marginLeft:10,
    marginTop:5,
    marginBottom:5,
    fontWeight:"bold",
    fontSize:20
  },
  infoBoxNode1:{
  width:borderWidth ,
  flexDirection:"row" 
  },
  infoBoxNode1_source:{
    marginLeft:10,
    marginRight:5,
    marginTop:5,
    marginBottom:5,
    fontWeight:'bold'
  },
  infoBoxNode2:{
  width:borderWidth ,
  flexDirection:"row",
  marginTop:5,
  marginBottom:5,
  borderRadius:10,
  },
  infoBoxNode2_description_view:{
    marginLeft:10,
    borderWidth:2,
    borderColor:'#fab27b',
    borderRadius:7,
    backgroundColor:'#fab27b'
  },
  infoBoxNode2_description:{
    paddingLeft:10,
    color:'#b64533'
  },
  leftContentBox:{
  width:leftSideWidth,
  borderWidth:0.1,
  borderColor:'#D3D3D3',
  },
  leftContentBox1:{
  width:leftSideWidth,
  borderWidth:1,
  borderColor:'#D3D3D3',
  backgroundColor:'#999d9c'
  },
  defaultLeftItem:{
  height:80,
  borderWidth:0.5,
  borderColor:'#D3D3D3',
  flex:1,
  justifyContent:"center",
  alignItems:"center"
  },
  activetLeftItem:{
  height:80,
  borderWidth:0.5,
  borderColor:'#D3D3D3',
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:'#fcaf17',

  },
  pre_Item:{
  height:80,
  borderWidth:0.5,
  borderColor:'#D3D3D3',
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  borderBottomRightRadius:15,
  },
  next_item:{
  height:80,
  borderWidth:0.5,
  borderColor:'#D3D3D3',
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  borderTopRightRadius:15,
  }
  })