import React, { useEffect, useState } from 'react'
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    Button,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import api from '../api/api'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Store = () => {
    const { id } = useParams()
    const [store, setStore] = useState({})
    const [customers, setCustomers] = useState([])
    useEffect(async () => {
        const result = await api.get(`/store/${id}/`)
        setStore(result.data)
        const resultC = await api.get(`/customer/${id}`)
        setCustomers(resultC.data ? resultC.data : [])
    }, [])
    return (
        <>
            <Typography variant="h2" component="h1">
                {store.name}
                {console.log(store)}
            </Typography>
            <Button variant="conatined" color="primary">
                <Link to={`/store/${id}/customers`}>Add Customer</Link>
            </Button>
            <Button variant="conatined" color="primary">
                <Link to={`/store/${id}/addfields`}>Add Fields</Link>
            </Button>
            <List>
                {customers.map((element, index) => (
                    <ListItem button key={element.name}>
                        <ListItemText>{index + 1}</ListItemText>
                        <ListItemText>{element.name}</ListItemText>
                        <ListItemText>{element.store}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default Store
