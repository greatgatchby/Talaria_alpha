import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CRow,
} from '@coreui/react'
import React from 'react'
const getVenue = () => {
  return (
    <>
      <CForm>
        <h5>Search Venues</h5>
        <CRow>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Name:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Address:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Postcode:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Division:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Type:
                <CFormSelect>
                  <option>Physical</option>
                  <option>Online</option>
                </CFormSelect>
              </CFormLabel>
            </CInputGroup>
          </CCol>
        </CRow>
        <CButton type={'submit'} className={'btn btn-primary '}>
          Search
        </CButton>
      </CForm>
    </>
  )
}

export default getVenue
