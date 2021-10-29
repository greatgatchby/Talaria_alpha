import React, { Component } from 'react'
import { CCol, CRow } from '@coreui/react/dist'
import FormComponent from './Form.component'
import EditConsignmentForm from './editConsignmentForm.component'
class consignmentForm extends Component {
  render() {
    return (
      <>
        <CRow>
          <CCol>
            <FormComponent />
          </CCol>
          <CCol>
            <EditConsignmentForm />
          </CCol>
        </CRow>
      </>
    )
  }
}
export default consignmentForm
