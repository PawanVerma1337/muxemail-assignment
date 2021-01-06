import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Layout from '../components/Layout'

const CustomerList = () => {
    const { id } = useParams()
    return <Layout></Layout>
}

export default CustomerList
