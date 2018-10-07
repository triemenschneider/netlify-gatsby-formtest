import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import FormComponent from '../components/formComponent'


const FormPage = () => (
  <Layout>
    <h1>Hi from the FORM page</h1>

    <FormComponent />

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FormPage
