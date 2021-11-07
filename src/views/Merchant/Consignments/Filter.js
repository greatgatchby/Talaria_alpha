import { CCol, CForm, CFormInput, CFormLabel, CFormSelect, CInputGroup, CRow } from '@coreui/react'
import React from 'react'

const Filter = () => {
  return (
    <>
      <CForm>
        <h5>Search Consignments</h5>
        <CRow>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Item Name:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Item Size:
                <CFormSelect>
                  <option>3</option>
                  <option>4</option>
                  <option>4.5</option>
                  <option>5</option>
                  <option>5.5</option>
                  <option>6</option>
                </CFormSelect>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Asking Price:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Vendor:
                <CFormSelect>
                  <option>Mark Otto</option>
                  <option>Jacob Thornton</option>
                  <option>Larry the Bird</option>
                </CFormSelect>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Status:
                <CFormSelect>
                  <option>Requested</option>
                  <option>Confirmed</option>
                  <option>In Transit</option>
                  <option>Unauthenticated</option>
                  <option>Authenticated</option>
                  <option>On Sale</option>
                </CFormSelect>
              </CFormLabel>
            </CInputGroup>
          </CCol>
        </CRow>
      </CForm>
    </>
  )
}

export default Filter
