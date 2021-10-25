import React, { Component } from 'react'
import {
  CForm,
  CCard,
  CCardHeader,
  CCardFooter,
  CButton,
  CCardBody,
  CInputGroup,
  CFormLabel,
  CFormInput,
  CFormSelect,
} from '@coreui/react/dist'

class EditConsignmentForm extends Component {
  render() {
    return (
      <CCard>
        <CCardHeader>
          <h2>Edit</h2>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CInputGroup>
              <CFormLabel>Header Text</CFormLabel>
              <CFormInput></CFormInput>
            </CInputGroup>
            <CInputGroup>
              <CFormLabel>Button Color</CFormLabel>
              <CFormInput type={'color'}></CFormInput>
            </CInputGroup>
            <CInputGroup>
              <CFormLabel>Primary Text Color</CFormLabel>
              <CFormInput type={'color'}></CFormInput>
            </CInputGroup>
            <CInputGroup>
              <CFormLabel>Secondary Text Color</CFormLabel>
              <CFormInput type={'color'}></CFormInput>
            </CInputGroup>
            <CInputGroup>
              <CFormLabel>Font</CFormLabel>
              <CFormSelect>
                <option>Arial</option>
                <option>Times New Roman</option>
              </CFormSelect>
              upload font
              <CFormInput type={'file'}></CFormInput>
            </CInputGroup>
          </CForm>
        </CCardBody>
        <CCardFooter className={'text-center'}>
          <b>Select Form Type</b>
          <div className={'d-flex justify-content-center mt-2'}>
            <CButton>1</CButton>
            <CButton className={'mx-2'}>2</CButton>
            <CButton>3</CButton>
          </div>
        </CCardFooter>
      </CCard>
    )
  }
}

export default EditConsignmentForm
