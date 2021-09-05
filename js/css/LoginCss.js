import {StyleSheet} from 'react-native'; 
export default styles = StyleSheet.create({
    container1:{
        flex:1,
        backgroundColor:'#ffffff',
    }, 
    headtitle: { 
        fontSize: 20, 
        color: '#ffffff', 
        textAlign: 'center',
        textAlignVertical: 'center',  
        marginTop:10
    }, 
    loginLogViewStyle:{
        paddingTop:25,
        paddingBottom:90,
        flex:1,
        alignItems:'center'
    },
    loginLogImgStyle:{
        marginTop:40,
        marginBottom:40,
        width:100,
        height:100,
        borderRadius:30
    },
    textInputViewStyle:{
        flex:1,
        alignItems:'center',
        paddingBottom:50
    },
    inputStyles:{
        marginBottom:40,
        borderRadius:25,
        width:320,
        height:55,
        textAlign:'center',
        fontSize:17
    },
    button:{
        marginTop:40,
        alignItems: "center",
        backgroundColor: "#FF8C00",
        padding: 10,
        borderRadius:8,
        width:320
    }, 
    inner: {
    flex: 1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center"
    },
    container: {
        flex: 1
      },
      header: {
        fontSize: 36,
        marginBottom: 48
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
      },
      btnContainer: {
        backgroundColor: "white",
        marginTop: 12
      }
})