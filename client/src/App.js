import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Store from './pages/Store'
import StoreAddFieldsForm from './pages/StoreAddFieldsForm'
import CustomerAddForm from './pages/CustomerAddForm'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/store/:id/addfields">
                    <StoreAddFieldsForm />
                </Route>
                <Route path="/store/:id/customers">
                    <CustomerAddForm />
                </Route>
                <Route path="/store/:id">
                    <Store />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
