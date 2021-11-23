import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CRow,
} from '@coreui/react'

const AddVenue = () => {
  return (
    <>
      <CCard className={'mb-2'}>
        <CCardHeader>
          <h5>Create Venue</h5>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol>
                <CInputGroup>
                  <CFormLabel>id:</CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>Name:</CFormLabel>
                </CInputGroup>
              </CCol>
            </CRow>
            <CCol>
              <CInputGroup>
                <CFormLabel>Address:</CFormLabel>
              </CInputGroup>
            </CCol>
            <CCol>
              <CInputGroup>
                <CFormLabel>
                  Venue type:
                  <CFormSelect>
                    <option>Physical</option>
                    <option>Online</option>
                  </CFormSelect>
                </CFormLabel>
              </CInputGroup>
            </CCol>
          </CForm>
          <CButton type={'submit'} className={'btn btn-primary '}>
            Add
          </CButton>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AddVenue
