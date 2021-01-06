import React from 'react'
import Layout from '../components/Layout'

import { Container, Typography, makeStyles } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '120px',
    },
}))

const HomePage = () => {
    const classes = useStyles()

    return (
        <Layout style={{ backgroundColor: '#FFFFEE' }}>
            <Container maxWidth="md" style={{ textAlign: 'center' }}>
                <div className={classes.root}>
                    <Typography variant="h2" gutterBottom>
                        Store Demo
                    </Typography>

                    <Typography variant="p" gutterBottom>
                        Mux-Email Assignment
                    </Typography>
                </div>
            </Container>
        </Layout>
    )
}

export default HomePage
