import {Dimensions,StyleSheet} from 'react-native'; 
const {width,height} = Dimensions.get('window')
var borderWidth = width-155;
var leftSideWidth = width*(1/5);
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
    height:height-120
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
    },
    drawerStyle:{
        flex:1,
        backgroundColor:'#fcaf17',
        shadowColor: '#fcaf17',
        shadowRadius: 3,
        opacity: 0.5
    },
    tips:{
        width:width,
        height:40,
        backgroundColor: "#fcaf17",
        borderTopRightRadius:15,
        borderTopLeftRadius:15,
        fontSize:15,
        textAlign:"center",
        paddingTop:10
    },
    centeredView: {

        flex: 1,
        justifyContent: "flex-end",
        // alignItems: "flex-end",
        // marginTop: 22,
        width:width,
        // height:height*0.4
      },


      //抽屉内容样式
      modalView: {
        // margin: 20,
        backgroundColor: "white",
        // borderRadius: 20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        // padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width:width,
        height: height*0.4
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})