


//第一步  导入 styleSheet
//第二步  创建styleSheet 对象（该对象可视为样式表）
//第三步  在jsx中使用样式表  styleSheet对象


// import React from 'react';
// import {View,Image,Text,StyleSheet} from 'react-native';





// const styleSheetOjb = StyleSheet.create({
//   red:{
//     color:'red',
//     fontSize:'10',
//   },
//   bigReg:{
//     color:'red',
//     fontSize:'20',
//   },
//   blue:{
//     color:'blue',
//     fontsize:'10',
//   },
//   bigBlue:{
//     color:'blue',
//     fontsize:'20',
//   }
// })

// export default class App extends React.Component{
//   render(){
//     return (
//       <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
//         <Text>Hello, World </Text>
//       </View>
//     )
//   }
// }













import React from 'react';
import {StyleSheet,View,Image,Text} from 'react-native';




// class Blinks extends React.Component{
//   //设置一个显示文本的组件
//   //设置state值
//   //定时更改state值 来判断要不要显示

//   state = {
//     isShow:true
//   }

//   componentDidMount(){
//     setInterval(()=>{
//       this.setState(preState =>({isShow:!preState.isShow}));
//     },1000)
//   }

//   render(){
//     if(!this.state.isShow){
//       return null;
//     }
//     return <Text>{this.props.text}</Text>;
//   }

// }


const styleSheetOjb = StyleSheet.create({
  red:{
    color:'red',
    fontSize:10,
  },
  bigReg:{
    color:'red',
  },
  blue:{
    color:'blue',
  },
  bigBlue:{
    color:'blue',
    fontSize:30
  }
});

export default class App extends React.Component{


  render(){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        {/* <Blinks text="阿尔萨斯.....">
        </Blinks> */}
        {/* <Text style={styleSheetOjb.bigBlue} >Hello , World</Text> */}
        <Text style={styleSheetOjb.bigBlue} >Hello , World</Text>
      </View>
    )
  }
}
