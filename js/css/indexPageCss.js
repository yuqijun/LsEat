import {Dimensions,StyleSheet} from 'react-native'; 
const {width,height} = Dimensions.get('window')
var borderWidth = width-155;
export default   styles = StyleSheet.create({
    bigBox:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",
        backgroundColor:'#FFFFFF',
        marginTop:3,
        marginBottom:3,
        borderRadius:5,
        width:width*0.96
    }
    ,
    logo:{
        width:155,
        height:100
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
    infoBoxNode1_volume:{
        marginLeft:5,
        marginRight:5,
        marginTop:5
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
    }
    })
