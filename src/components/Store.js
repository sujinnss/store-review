import React, { useEffect, useState } from 'react'
import { Layout, Anchor, Card } from 'antd'
import { getMenus, getReviews, getStores } from '../api/Service'

// Row는 바닥 => -  , Col은 기둥 |

const Store = (invoice) => {
    const [storeList, setStoreList] = useState([])
    const [storeReviews, setStoreReviews] = useState([])
    const [storeMenues, setStoreMenues] = useState([])

    const { Header, Content } = Layout
    const { Link } = Anchor

    const getStoreList = () =>
        getStores()
            .then((r) => {
                setStoreList(r.data)
            })
            .catch((e) => console.error(e))

    const getStoreMenue = () => {
        return getMenus()
            .then((r) => {
                setStoreMenues(r.data)
            })
            .catch((e) => console.error(e))
    }

    const getStoreReview = () => {
        return getReviews()
            .then((r) => {
                setStoreReviews(r.data)
            })
            .catch((e) => console.error(e))
    }

    useEffect(() => {
        getStoreList()
        getStoreMenue()
        getStoreReview()
    }, [])

    //console.log("invoice_id:",typeof(parseInt(invoice.id)))
    const storeDatas = storeList.filter((data) => data.id === parseInt(invoice.id))
    const menueDatas = storeMenues.filter((data) => data.storeId === parseInt(invoice.id))
    const reviewDatas = storeReviews.filter((data) => data.storeId === parseInt(invoice.id))

    console.log("storeDatas:",storeDatas)
    console.log("menueDatas:",menueDatas)
    console.log("reviewDatas:",reviewDatas)

    console.log(storeDatas.map((data)=>data.openTime).map((time)=>time.everyDay))
    console.log(invoice)
    return (
        <Layout>
            <Header>header</Header>
            <Layout style={{ height: '100%' }}>
                <Content>
                    <Anchor
                        style={{
                            position: 'fixed',
                            top: '30%',
                            left: '5%',
                            width: '110px',
                            height: '160px',
                        }}
                    >
                        <Link href="#detail" title="상세 내용" />
                        <Link href="#menus" title="메뉴" />
                        <Link
                            href="#image"
                            title="사진"
                            // target="_blank"
                        />
                        <Link href="#reviews" title="리뷰" />
                        <Link href="#map" title="길찾기" />
                    </Anchor>
                    <Card></Card>
                    <Card
                        id="detail"
                        title="상세 정보"
                        bordered={true}
                        style={{ width: '50%', margin: 'auto' }}
                    >
                        <div >
                            <div>
                                <span>위치: </span>
                                <sapn>{storeDatas.map((data)=>data.location)}</sapn>
                            </div>
                            <div>
                                <span>영업시간: </span>
                                <span>{storeDatas.map((data)=>data.openTime).map((time)=>time.everyDay)}</span>
                            </div>

                        </div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Store
