import React, {useEffect, useState} from 'react'
import { List, Space } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import Store from "./Store";
import { Router, Link } from '@reach/router'
import {getMenus,getReviews,getStores} from "../api/Service";

// const listData = [
//     {
//         // ref: 'https://ant.design',
//         id: 1,
//         title: `AA`,
//         description: 'category : 식당 ',
//         content: '위치: 수원시 팔달구 우만2동',
//     },
//     {
//         // ref: 'https://ant.design',
//         id: 2,
//         title: `BB`,
//         description: 'category : 카페',
//         content: '위치: 수원시 팔달구 우만2동',
//     },
//     {
//         // ref: 'https://ant.design',
//         id: 3,
//         title: `CC`,
//         description: 'category : 레스토랑 ',
//         content: '위치: 수원시 팔달구 우만2동',
//     },
// ]

// 댓글 기능에서 사용되는 아이콘과 옆에 숫자
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)

const StoreList = () => {

    const [storeMenues,setStoreMenues] = useState([]);
    const [storeList,setStoreList] = useState([]);
    const [storeReviews,setStoreReviews] = useState([]);

    const getStoreList = () => getStores().then((res)=> {
        console.log(res)
        setStoreList(res.data)
    }).catch((e)=> console.error(e))

    useEffect(()=>{
        getStoreList();
    },[])

    console.log(storeList)

    return (
        <div style={{ width: '700px', margin: 'auto auto' }}>
            <div
                style={{
                    fontWeight: 'bold',
                    fontSize: '40px',
                    padding: '50PX 20px',
                }}
            >
                맛집 리스트
            </div>
            {/*<List*/}
            {/*    itemLayout="vertical"*/}
            {/*    size="large"*/}
            {/*    pagination={false}*/}
            {/*    dataSource={listData}*/}
            {/*    renderItem={(item) => (*/}
            {/*        <List.Item*/}
            {/*            key={item.title}*/}
            {/*            actions={[*/}
            {/*                <IconText*/}
            {/*                    icon={MessageOutlined}*/}
            {/*                    text="2"*/}
            {/*                    key="list-vertical-message"*/}
            {/*                />,*/}
            {/*            ]}*/}
            {/*            extra={*/}
            {/*                <img*/}
            {/*                    width={272}*/}
            {/*                    alt="logo"*/}
            {/*                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"*/}
            {/*                />*/}
            {/*            }*/}
            {/*        >*/}

            {/*            <List.Item.Meta*/}
            {/*                title={<Link to={`/storeList/${item.id}`}>{item.title}</Link> }*/}
            {/*                description={item.description}*/}
            {/*            />*/}
            {/*            {item.content}*/}
            {/*        </List.Item>*/}
            {/*    )}*/}
            {/*/>*/}
            {/*,*/}
        </div>
    )
}

export default StoreList
