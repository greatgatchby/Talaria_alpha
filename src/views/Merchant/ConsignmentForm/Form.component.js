import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
} from '@coreui/react/dist'

class FormComponent extends Component {
  render() {
    return (
      <CCard>
        <CCardHeader>
          <h2>Add a Consignment</h2>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormLabel>
              Item Name
              <CFormInput></CFormInput>
            </CFormLabel>
            <CFormLabel>
              Item Size
              <CFormInput></CFormInput>
            </CFormLabel>
            <CFormLabel>
              Asking price
              <CFormInput></CFormInput>
            </CFormLabel>
            <CFormLabel>
              Right Side
              <CFormInput type={'file'}></CFormInput>
            </CFormLabel>
            <CFormLabel>
              Size Tag
              <CFormInput type={'file'}></CFormInput>
            </CFormLabel>
            <CFormLabel>
              Box
              <CFormInput type={'file'}></CFormInput>
            </CFormLabel>
            <CButton>Submit</CButton>
          </CForm>
        </CCardBody>
      </CCard>
    )
  }
}
export default FormComponent
