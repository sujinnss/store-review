import React, { useEffect, useState } from 'react'
import StoreStyle from '../styles/StoreStyle.css'
import { Layout, Anchor, Card } from 'antd'
import { getMenus, getReviews } from '../api/Service'


// Row는 바닥 => -  , Col은 기둥 |

const Store = () => {
    const [storeReviews, setStoreReviews] = useState([])
    const [storeMenues, setStoreMenues] = useState([])

    const { Header, Footer, Content } = Layout
    const { Link } = Anchor

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
        getStoreMenue()
        getStoreReview()
    }, [])

    console.log('메뉴:', storeMenues)
    console.log('리뷰:', storeReviews)

    return (
        <Layout>
            <Header>header</Header>
            <Layout style={{height:"100%"}}>
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
                    <Card>

                    </Card>
                    <Card
                        id="detail"
                        title="상세 내용"
                        bordered={true}
                        style={{ width: '50%', margin: 'auto' }}
                    >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Store
