import React from 'react'
import PropTypes from 'prop-types'
import { Container, CssBaseline } from '@material-ui/core'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <Container
                maxWidth="md"
                style={{ height: '100vh', maxHeight: '100%' }}
            >
                {children}
            </Container>
            <Footer />
        </React.Fragment>
    )
}

Layout.propTypes = {
    children: PropTypes.children,
}

export default Layout
