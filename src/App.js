import React from 'react'
import { Router, Link } from '@reach/router'
import StoreList from './components/StoreList'
import Store from "./components/Store";

const App = () => {
    return (
        <div>
            <Router>
                <StoreList path={"/"} />
                <StoreList path={"/storeList"} />
                <Store path={"/storeList/:id"} />
            </Router>
        </div>
    )
}

export default App
