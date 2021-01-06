import React, { useState, useEffect } from 'react'
import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import api from '../api/api'

const CustomerAddForm = () => {
    const { id } = useParams()
    const [form, setForm] = useState({})
    const [fields, setFields] = useState([])

    const [fieldData, setFieldData] = useState({})

    const handleFieldChange = (event) => {
        const { name, value } = event.target
        setFieldData((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target
        setForm((prevState) => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await api.post('/customer/', { ...form, fields: fieldData, store: id })
    }

    useEffect(async () => {
        const result = await api.get(`/store/${id}`)
        setFields(result.data.fields)
        result.data.fields.forEach((ele) => {
            console.log(ele)
            setFieldData((prevState) => {
                return {
                    ...prevState,
                    [ele.name]: '',
                }
            })
        })
        console.log(fieldData)
    }, [])

    return (
        <Layout>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
                <Typography variant="h2" align="center">
                    Customer Add Form
                </Typography>
                <Grid container justify="center">
                    <Grid item>
                        <TextField
                            id="name"
                            name="name"
                            label="Name"
                            variant="outlined"
                            style={{ margin: '2px' }}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            style={{ margin: '2px' }}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="mobile"
                            name="mobile"
                            label="Mobile Number"
                            variant="outlined"
                            style={{ margin: '2px' }}
                            onChange={handleFormChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="address"
                            name="address"
                            label="Address"
                            variant="outlined"
                            style={{ margin: '2px' }}
                            onChange={handleFormChange}
                        />
                    </Grid>
                </Grid>
                {fields != null ? (
                    <Grid container justify="center">
                        {fields.map((ele) => (
                            <Grid item key="ele.name">
                                <TextField
                                    id={ele.name}
                                    name={ele.name}
                                    label={ele.name}
                                    variant="outlined"
                                    style={{ margin: '2px' }}
                                    onChange={handleFieldChange}
                                />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    ' No custom fields'
                )}
                <Grid container justify="center">
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
            </form>
        </Layout>
    )
}

export default CustomerAddForm
