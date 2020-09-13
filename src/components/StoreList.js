import React, { useEffect, useState } from 'react'
import { List, Space } from 'antd'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { Link } from '@reach/router'

import { getStores } from '../api/Service'

// 댓글 기능에서 사용되는 아이콘과 옆에 숫자
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)

const StoreList = () => {
    const [storeList, setStoreList] = useState([])

    const getStoreList = () =>
        getStores()
            .then((res) => {
                setStoreList(res.data)
            })
            .catch((e) => console.error(e))

    const storeData = storeList.map((datas) => {
        return {
            id: datas.id,
            name: datas.name,
            category: datas.category,
            location: datas.location,
            img: datas.img,
        }
    })

    useEffect(() => {
        getStoreList()
    }, [])

    console.log('스토어 리스트:', storeList)
    console.log(storeData)
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
            <List
                itemLayout="vertical"
                size="large"
                pagination={false}
                dataSource={storeData}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <IconText
                                icon={MessageOutlined}
                                text="2"
                                key="list-vertical-message"
                            />,
                            <IconText
                                icon={LikeOutlined}
                                text="156"
                                key="list-vertical-like-o"
                            />,
                            <IconText
                                icon={StarOutlined}
                                text="156"
                                key="list-vertical-star-o"
                            />,
                        ]}
                        extra={
                            <img
                                width={272}
                                height={200}
                                alt="logo"
                                src={item.img}
                            />
                        }
                    >
                        <List.Item.Meta
                            title={
                                <Link to={`/storeList/${item.id}`}>
                                    {item.name}
                                </Link>
                            }
                            description={item.category}
                        />
                        {item.location}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default StoreList
