import React from "react";
import { View } from "react-native";
import { Modal } from "react-native-paper";

export default class BottomDrawer extends Component  {
    static propTypes = {
        title: React.propTypes.string,
        content: React.propTypes.object,
        show: React.propTypes.func,
        hide: React.propTypes.func,

    }

    constructor(props){
        super(props)
        this.translateY = 150;
        this.state = { 
            visible: false, 
            sheetAnim: new Animated.Value(this.translateY) 
          } 
          this.cancel = this.cancel.bind(this); 
    }

    //两个方法 显示、隐藏
    //两个属性， 标题、数据

    render() { 
        const { visible, sheetAnim } = this.state; 
        return( 
          <Modal 
          visible={ visible } 
          transparent={ true } 
          animationType="none" 
          onRequestClose={ this.cancel } 
          > 
          <View style={ styles.wrapper }> 
                  <TouchableOpacity style={styles.overlay} onPress={this.cancel}></TouchableOpacity> 
              <Animated.View 
                style={[styles.bd, {height: this.translateY, transform: [{translateY: sheetAnim}]}]}> 
                { this._renderTitle() } 
                <ScrollView 
                          horizontal={ true } 
                          showsHorizontalScrollIndicator={ false }> 
                  {this._renderContainer()} 
                </ScrollView> 
              </Animated.View> 
            </View> 
          </Modal> 
        ) 
    } 



    /** 
* 标题 
*/ 
_renderTitle() { 
    const { title,titleStyle } = this.props; 
    if (!title) { 
      return null 
    } 
      // 确定传入的是不是一个React Element，防止渲染的时候出错 
    if (React.isValidElement(title)) { 
      return ( 
        <View style={styles.title}>{title}</View> 
      ) 
    } 
    return ( 
      <Text style={[styles.titleText,titleStyle]}>{title}</Text> 
    ) 
  } 
   
  /** 
  * 内容布局 
  */ 
  _renderContainer() { 
      const { content } = this.props; 
      return ( 
        <View style={styles.container}> 
          { content } 
        </View> 
      ) 
    } 

    /** 
 * 控制Modal点击关闭，Android返回键关闭 
 */ 
 cancel() { 
    this.hide(); 
  } 

  /** 
 * 显示 
 */ 
show() { 
    this.setState({visible: true}) 
    Animated.timing(this.state.sheetAnim, { 
      toValue: 0, 
      duration: 250 
    }).start(); 
  } 

  /** 
 * 隐藏 
 */ 
hide() { 
    this.setState({ visible: false }) 
    Animated.timing(this.state.sheetAnim, { 
     toValue: this.translateY, 
     duration: 150 
    }).start(); 
 } 


}