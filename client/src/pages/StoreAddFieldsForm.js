import React, { useState, useEffect, useReducer } from 'react'
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    Grid,
    makeStyles,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import api from '../api/api'

const useStyles = makeStyles({
    margin: {
        margin: '5px',
    },
})

function fieldReducer(state, action) {
    switch (action.type) {
        case 'add':
            return [...state, action.field]
        case 'remove':
            // eslint-disable-next-line no-case-declarations
            const update = [...state]
            update.splice(action.name, 1)
            return update
        default:
    }
}

const StoreAddFieldsForm = () => {
    const { id } = useParams()
    const classes = useStyles()
    const [store, setStore] = useState([])

    const [fields, setFields] = useReducer(fieldReducer, [])
    const [field, setField] = useState({
        name: '',
        type: '',
    })

    /** const [val, setVal] = useState('')

    const handleChange = (event) => {
        setVal(event.target.value)
    } */

    const addField = () => {
        setFields({ field, type: 'add' })
        setField({
            name: '',
            type: '',
        })
    }

    const saveFields = async () => {
        await api.post(`/store/${id}/fields`, {
            fields: fields,
        })
    }

    useEffect(async () => {
        const result = await api.get(`/store/${id}`)
        setStore(result.data)
        const field = result.data.fields != null ? result.data.fields : []
        field.forEach((ele) => setFields({ field: ele, type: 'add' }))
    }, [])

    return (
        <Layout>
            <Typography variant="h2" component="h1">
                {store.name}
            </Typography>
            <Grid container className={classes.margin}>
                <Grid item xs={4} style={{ padding: '5px' }}>
                    <TextField
                        variant={'filled'}
                        fullWidth
                        InputProps={{
                            disableUnderline: true,
                        }}
                        label={'Field Name'}
                        placeholder={'Field Name'}
                        helperText={'*Required'}
                        value={field.name}
                        onChange={(event) => {
                            setField((prevState) => {
                                return {
                                    ...prevState,
                                    name: event.target.value,
                                }
                            })
                        }}
                    />
                </Grid>
                <Grid item xs={4} style={{ padding: '5px' }}>
                    <FormControl variant="outlined" style={{ width: '100%' }}>
                        <InputLabel id="fieldname-label">Type</InputLabel>
                        <Select
                            labelId="fieldname-label"
                            id="fieldname"
                            helperText={'*Required'}
                            value={field.type}
                            onChange={(event) => {
                                setField((prevState) => {
                                    return {
                                        ...prevState,
                                        type: event.target.value,
                                    }
                                })
                            }}
                            label="Type"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="string">String</MenuItem>
                            <MenuItem value="number">Number</MenuItem>
                            <MenuItem value="date">Date</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4} style={{ padding: '5px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            borderRadius: '100%',
                        }}
                        onClick={addField}
                    >
                        +
                    </Button>
                </Grid>
            </Grid>
            <List>
                {fields.map((element, index) => (
                    <ListItem button key={element.name}>
                        <ListItemText>{index + 1}</ListItemText>
                        <ListItemText>{element.name}</ListItemText>
                        <ListItemText>{element.type}</ListItemText>
                        <ListItemText>{element.store}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={(e) => {
                                    setFields({ index, type: 'remove' })
                                }}
                            >
                                &#10006;
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={saveFields}>
                Save
            </Button>
        </Layout>
    )
}

export default StoreAddFieldsForm
