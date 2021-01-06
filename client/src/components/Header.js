import React, { useState, useEffect } from 'react'
import {
    AppBar,
    Toolbar,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import api from '../api/api'

const Header = () => {
    const [store, setStore] = useState([])

    const [val, setVal] = useState('')

    const handleChange = (event) => {
        setVal(event.target.value)
    }

    useEffect(async () => {
        const result = await api.get('/store')
        setStore(result.data)
    }, [])

    if (val !== '') {
        return <Redirect to={{ pathname: `/store/${val}` }} />
    }
    return (
        <header>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <h3 style={{ flexGrow: '1' }}>Store </h3>
                    <FormControl style={{ width: '150px' }}>
                        <InputLabel id="demo-simple-select-outlined-label">
                            Store
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={val}
                            onChange={handleChange}
                            label="Store"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {store.map((element) => (
                                <MenuItem value={element._id} key={element._id}>
                                    {element.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </header>
    )
}

export default Header
