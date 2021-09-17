import React from 'react'
import {Text, View,SafeAreaView,FlatList,Dimensions,Image} from 'react-native'; 
import MyTextComponent from './MyTextComponent';
import myTextComponent from './MyTextComponent'
const {width,height} = Dimensions.get('window')


class AllOrder extends React.Component{


    returnText(status){
        if(status == 0){
            return '完成'
        }else{
            return '进行中'
        }
    }

    constructor(props){
        super(props);
        this.state={
            loginName:'',
            password:'',
            result:'',
            data : [
                {
                    "orderNo": "1437329510208114689",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000004",
                            "storeId": null,
                            "goodsName": "南瓜饼",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000009",
                            "storeId": null,
                            "goodsName": "白萝卜",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000010",
                            "storeId": null,
                            "goodsName": "鸡毛菜",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        }
                    ],
                    "createTime": "2021-09-13 16:17:14",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 0,
                    "orderPrice": 0,
                    "goodsNumber": 3,
                    "receivingAddress": "上海市青浦区明珠路1188号 吴彦祖 15678940293",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 0,
                    "distributionFee": 0
                },
                {
                    "orderNo": "1437332540072660994",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000008",
                            "storeId": null,
                            "goodsName": "鸡翅",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000005",
                            "storeId": null,
                            "goodsName": "鱿鱼",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        }
                    ],
                    "createTime": "2021-09-13 16:29:16",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 0,
                    "orderPrice": 0,
                    "goodsNumber": 2,
                    "receivingAddress": "上海市青浦区明珠路1188号 吴彦祖 15678940293",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 0,
                    "distributionFee": 0
                },
                {
                    "orderNo": "1437332955652689922",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000004",
                            "storeId": null,
                            "goodsName": "南瓜饼",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000009",
                            "storeId": null,
                            "goodsName": "白萝卜",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000010",
                            "storeId": null,
                            "goodsName": "鸡毛菜",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        }
                    ],
                    "createTime": "2021-09-13 16:30:55",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 0,
                    "orderPrice": 0,
                    "goodsNumber": 3,
                    "receivingAddress": "上海市青浦区明珠路1188号 刘德华 15678940293",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 0,
                    "distributionFee": 0
                },
                {
                    "orderNo": "1437333153443483649",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000004",
                            "storeId": null,
                            "goodsName": "南瓜饼",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000009",
                            "storeId": null,
                            "goodsName": "白萝卜",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        }
                    ],
                    "createTime": "2021-09-13 16:31:42",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 0,
                    "orderPrice": 0,
                    "goodsNumber": 2,
                    "receivingAddress": "上海市青浦区明珠路1188号 吴彦祖 15678940293",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 0,
                    "distributionFee": 0
                },
                {
                    "orderNo": "1437333577928019969",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000004",
                            "storeId": null,
                            "goodsName": "南瓜饼",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000009",
                            "storeId": null,
                            "goodsName": "白萝卜",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000010",
                            "storeId": null,
                            "goodsName": "鸡毛菜",
                            "goodsPrice": 35,
                            "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        }
                    ],
                    "createTime": "2021-09-13 16:33:24",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 0,
                    "orderPrice": 0,
                    "goodsNumber": 3,
                    "receivingAddress": "上海市青浦区明珠路1188号 古天乐 15678940293",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 0,
                    "distributionFee": 0
                },
                {
                    "orderNo": "1437972273446522882",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000014",
                            "storeId": null,
                            "goodsName": "广东鸡煲",
                            "goodsPrice": 65,
                            "goodsAvatar": "https://t11.baidu.com/it/u=2000069194,272005505&fm=58",
                            "goodsTotalPrice": 65,
                            "purchaseQuantity": 1
                        }
                    ],
                    "createTime": "2021-09-15 10:51:20",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 0,
                    "orderPrice": 0,
                    "goodsNumber": 1,
                    "receivingAddress": "上海市青浦区明珠路1188号 黎明明 15678940293",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 0,
                    "distributionFee": 0
                },
                {
                    "orderNo": "1438011986836459521",
                    "createUserId": "1000001",
                    "goodsList": [
                        {
                            "goodsId": "20000000013",
                            "storeId": null,
                            "goodsName": "巴国山鸡煲",
                            "goodsPrice": 69,
                            "goodsAvatar": "https://t11.baidu.com/it/u=686571331,781781066&fm=58",
                            "goodsTotalPrice": 69,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000014",
                            "storeId": null,
                            "goodsName": "广东鸡煲",
                            "goodsPrice": 65,
                            "goodsAvatar": "https://t11.baidu.com/it/u=2000069194,272005505&fm=58",
                            "goodsTotalPrice": 65,
                            "purchaseQuantity": 1
                        },
                        {
                            "goodsId": "20000000008",
                            "storeId": null,
                            "goodsName": "鸡翅",
                            "goodsPrice": 35,
                            "goodsAvatar": "http://t13.baidu.com/it/u=2962288049,1343748027&fm=224&app=112&f=JPEG?w=500&h=500&s=3BB53E8E563643A51F1AE4710300706B",
                            "goodsTotalPrice": 35,
                            "purchaseQuantity": 1
                        }
                    ],
                    "createTime": "2021-09-15 13:29:09",
                    "arriveTime": null,
                    "storeName": "一品火锅店",
                    "storeTelephone": "856632544",
                    "orderStatus": 0,
                    "orderPrice": 0,
                    "goodsNumber": 3,
                    "receivingAddress": "江西省景德镇昌江区紫晶路999号 吴彦祖 19847284902",
                    "paymentMethod": 1,
                    "tablewareNumber": "商家提供餐具",
                    "coupon": 0,
                    "remark": null,
                    "packageFee": 0,
                    "distributionFee": 0
                }
            ]
        }
    }
    render(){


        const DATA = [
            {
                "orderNo": "1437329510208114689",
                "createUserId": "1000001",
                "goodsList": [
                    {
                        "goodsId": "20000000004",
                        "storeId": null,
                        "goodsName": "南瓜饼",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000009",
                        "storeId": null,
                        "goodsName": "白萝卜",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000010",
                        "storeId": null,
                        "goodsName": "鸡毛菜",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000011",
                        "storeId": null,
                        "goodsName": "蒜香排骨",
                        "goodsPrice": 40,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000012",
                        "storeId": null,
                        "goodsName": "牛肉煲",
                        "goodsPrice": 65,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000013",
                        "storeId": null,
                        "goodsName": "小白菜",
                        "goodsPrice": 20,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000015",
                        "storeId": null,
                        "goodsName": "干锅土豆",
                        "goodsPrice": 30,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    }
                ],
                "createTime": "2021-09-13 16:17:14",
                "arriveTime": null,
                "storeName": "一品火锅店",
                "storeTelephone": "856632544",
                "orderStatus": 0,
                "orderPrice": 0,
                "goodsNumber": 6,
                "receivingAddress": "上海市青浦区明珠路1188号 吴彦祖 15678940293",
                "paymentMethod": 1,
                "tablewareNumber": "商家提供餐具",
                "coupon": 0,
                "remark": null,
                "packageFee": 0,
                "distributionFee": 0
            },
            {
                "orderNo": "1437332540072660994",
                "createUserId": "1000001",
                "goodsList": [
                    {
                        "goodsId": "20000000008",
                        "storeId": null,
                        "goodsName": "鸡翅",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000005",
                        "storeId": null,
                        "goodsName": "鱿鱼",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    }
                ],
                "createTime": "2021-09-13 16:29:16",
                "arriveTime": null,
                "storeName": "一品火锅店",
                "storeTelephone": "856632544",
                "orderStatus": 0,
                "orderPrice": 0,
                "goodsNumber": 2,
                "receivingAddress": "上海市青浦区明珠路1188号 吴彦祖 15678940293",
                "paymentMethod": 1,
                "tablewareNumber": "商家提供餐具",
                "coupon": 0,
                "remark": null,
                "packageFee": 0,
                "distributionFee": 0
            },
            {
                "orderNo": "1437332955652689922",
                "createUserId": "1000001",
                "goodsList": [
                    {
                        "goodsId": "20000000004",
                        "storeId": null,
                        "goodsName": "南瓜饼",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000009",
                        "storeId": null,
                        "goodsName": "白萝卜",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000010",
                        "storeId": null,
                        "goodsName": "鸡毛菜",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    }
                ],
                "createTime": "2021-09-13 16:30:55",
                "arriveTime": null,
                "storeName": "一品火锅店",
                "storeTelephone": "856632544",
                "orderStatus": 0,
                "orderPrice": 0,
                "goodsNumber": 3,
                "receivingAddress": "上海市青浦区明珠路1188号 刘德华 15678940293",
                "paymentMethod": 1,
                "tablewareNumber": "商家提供餐具",
                "coupon": 0,
                "remark": null,
                "packageFee": 0,
                "distributionFee": 0
            },
            {
                "orderNo": "1437333153443483649",
                "createUserId": "1000001",
                "goodsList": [
                    {
                        "goodsId": "20000000004",
                        "storeId": null,
                        "goodsName": "南瓜饼",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000009",
                        "storeId": null,
                        "goodsName": "白萝卜",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    }
                ],
                "createTime": "2021-09-13 16:31:42",
                "arriveTime": null,
                "storeName": "一品火锅店",
                "storeTelephone": "856632544",
                "orderStatus": 0,
                "orderPrice": 0,
                "goodsNumber": 2,
                "receivingAddress": "上海市青浦区明珠路1188号 吴彦祖 15678940293",
                "paymentMethod": 1,
                "tablewareNumber": "商家提供餐具",
                "coupon": 0,
                "remark": null,
                "packageFee": 0,
                "distributionFee": 0
            },
            {
                "orderNo": "1437333577928019969",
                "createUserId": "1000001",
                "goodsList": [
                    {
                        "goodsId": "20000000004",
                        "storeId": null,
                        "goodsName": "南瓜饼",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000009",
                        "storeId": null,
                        "goodsName": "白萝卜",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000010",
                        "storeId": null,
                        "goodsName": "鸡毛菜",
                        "goodsPrice": 35,
                        "goodsAvatar": "https://t10.baidu.com/it/u=2596520388,2297576777&fm=58",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    }
                ],
                "createTime": "2021-09-13 16:33:24",
                "arriveTime": null,
                "storeName": "一品火锅店",
                "storeTelephone": "856632544",
                "orderStatus": 0,
                "orderPrice": 0,
                "goodsNumber": 3,
                "receivingAddress": "上海市青浦区明珠路1188号 古天乐 15678940293",
                "paymentMethod": 1,
                "tablewareNumber": "商家提供餐具",
                "coupon": 0,
                "remark": null,
                "packageFee": 0,
                "distributionFee": 0
            },
            {
                "orderNo": "1437972273446522882",
                "createUserId": "1000001",
                "goodsList": [
                    {
                        "goodsId": "20000000014",
                        "storeId": null,
                        "goodsName": "广东鸡煲",
                        "goodsPrice": 65,
                        "goodsAvatar": "https://t11.baidu.com/it/u=2000069194,272005505&fm=58",
                        "goodsTotalPrice": 65,
                        "purchaseQuantity": 1
                    }
                ],
                "createTime": "2021-09-15 10:51:20",
                "arriveTime": null,
                "storeName": "一品火锅店",
                "storeTelephone": "856632544",
                "orderStatus": 0,
                "orderPrice": 0,
                "goodsNumber": 1,
                "receivingAddress": "上海市青浦区明珠路1188号 黎明明 15678940293",
                "paymentMethod": 1,
                "tablewareNumber": "商家提供餐具",
                "coupon": 0,
                "remark": null,
                "packageFee": 0,
                "distributionFee": 0
            },
            {
                "orderNo": "1438011986836459521",
                "createUserId": "1000001",
                "goodsList": [
                    {
                        "goodsId": "20000000013",
                        "storeId": null,
                        "goodsName": "巴国山鸡煲",
                        "goodsPrice": 69,
                        "goodsAvatar": "https://t11.baidu.com/it/u=686571331,781781066&fm=58",
                        "goodsTotalPrice": 69,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000014",
                        "storeId": null,
                        "goodsName": "广东鸡煲",
                        "goodsPrice": 65,
                        "goodsAvatar": "https://t11.baidu.com/it/u=2000069194,272005505&fm=58",
                        "goodsTotalPrice": 65,
                        "purchaseQuantity": 1
                    },
                    {
                        "goodsId": "20000000008",
                        "storeId": null,
                        "goodsName": "鸡翅",
                        "goodsPrice": 35,
                        "goodsAvatar": "http://t13.baidu.com/it/u=2962288049,1343748027&fm=224&app=112&f=JPEG?w=500&h=500&s=3BB53E8E563643A51F1AE4710300706B",
                        "goodsTotalPrice": 35,
                        "purchaseQuantity": 1
                    }
                ],
                "createTime": "2021-09-15 13:29:09",
                "arriveTime": null,
                "storeName": "一品火锅店",
                "storeTelephone": "856632544",
                "orderStatus": 0,
                "orderPrice": 0,
                "goodsNumber": 3,
                "receivingAddress": "江西省景德镇昌江区紫晶路999号 吴彦祖 19847284902",
                "paymentMethod": 1,
                "tablewareNumber": "商家提供餐具",
                "coupon": 0,
                "remark": null,
                "packageFee": 0,
                "distributionFee": 0
            }
        ]

        return (
            <View style= {{backgroundColor:'#DEDEDE',flex:1,flexDirection:'column',alignItems:'center'}}>
            <FlatList
            bounces = {false} //禁止弹性滑动
            data={DATA}
            listKey={item => item.orderNo}
            renderItem={({item,index})=>
                <View style = {{flex:1,height:height*0.3,backgroundColor:'white',marginTop:height*0.015,
                width:width*0.96,borderRadius:10
                }}>

                    {/* 商店信息 */}
                    <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                        <View style = {{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Text
                            onPress={()=>{
                                console.log("当前订单信息:"+JSON.stringify(item))
                            }}

                        >
                            {item.storeName}
                        </Text>
                        <Text>
                            {item.orderStatus}
                        </Text>
                        </View>

                        <View style = {{height:1,backgroundColor:'#DEDEDE',width:width*0.9}}/>



                    </View>

                    {/* 商品列表 */}
                    <View style = {{flex:3}}>        
                    <MyTextComponent goods={item.goodsList}  goodsNumber = {item.goodsNumber} />
                    </View>

                    {/* 订单信息 */}
                    <View style = {{flex:2,}}>
                        <Text>
                            订单信息
                        </Text>
                    </View>   

                       


                </View>
            }



            
          />
          </View>
     
            );
    }
}
export default AllOrder;