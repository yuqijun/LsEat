//入驻商家列表
import {Text, View,FlatList,Image,Alert,SafeAreaView} from 'react-native'; 
import React from 'react'
import myStorage  from'../util/DeviceStorage'
import {storeApi} from '../environmental/dev'
import styles from '../css/indexPageCss'
class IndexScreen extends React.Component{

    constructor(props){
    super(props);
    this.state={
        loginName:'',
        password:'',
        storeList:[] 
        }
    }
  
    _extraUniqueKey(item ,index){
        return "index"+index+item;
    }

    getUser(){
        var user  = myStorage.get('user');
        return user;
    }

    componentDidMount(){
        //获取所有商店信息
        let opt = {
            method:'POST',
            headers:{
                Accept: "application/json", "Content-Type": "application/json",
            }
        }
        let url = storeApi+'/api/store/indexPageData'
        fetch(url,opt)
        .then(response =>response.json())
        .then(json=>{
            var data = json.data;
            this.setState({
                storeList:data
            })
        } )
    }

    render(){
        const {navigation} = this.props;
        return (
            <SafeAreaView>
            <View style={{backgroundColor:'#DCDCDC',flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <FlatList showsVerticalScrollIndicator = {false}

                    keyExtractor={this._extraUniqueKey}
                    data={this.state.storeList}
                    renderItem={
                        ({item}) => 
                        <View style={styles.bigBox}>

                            <Image 
                            source = {{uri:item.logoAvatar}}
                            style = {styles.logo}
                            resizeMode='stretch'
                            resizeMethod='auto'
                            />
                  
                            <View style={styles.infoBox}>
                                <Text style={styles.storeNameText}
                                onPress={()=>{
                                    navigation.navigate('storeGoodsListPage',{storeId:item.storeId,storeName:item.storeName,telephone:item.telephone});
                                }}
                                >
                                {item.storeName}
                                </Text>
                                <View style={styles.infoBoxNode1}>
                                <Text style={styles.infoBoxNode1_source}>
                                    评分 {item.storeSource}
                                </Text>
                                <Text style={styles.infoBoxNode1_volume}>
                                    月售 {item.storeSalesVolume}
                                </Text>
                                </View>
                                <View style={styles.infoBoxNode2}>
                                <View style={styles.infoBoxNode2_description_view}>
                                    <Text style={styles.infoBoxNode2_description}>
                                    {item.description}
                                    </Text>
                                </View>
                                </View>
                            </View>

                            <View />


                        </View> 
                    }
                />
            </View>

            </SafeAreaView>
        );
    }    

}

export default IndexScreen;

