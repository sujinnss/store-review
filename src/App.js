import React from 'react'
import {Router} from '@reach/router'
import StoreList from './components/StoreList'
import Store from "./components/Store";

const App = () => {
    return (
        <div>
            <Router>
                <StoreList path={"/"} />
                <StoreList path={"/storeList"} />
                <Store path={"/storeList/:id"} invoice={Invoice}/>
            </Router>
        </div>
    )
}
const Invoice = props => (
    <div>
        <h1>Invoice {props.invoiceId}</h1>
    </div>
)

export default App
