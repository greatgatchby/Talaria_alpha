import React, { Component } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CFormInput,
  CFormLabel,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CInputGroup,
  CForm,
  CFormSelect,
} from '@coreui/react'

class Vendors extends Component {
  render() {
    return (
      <>
        <CCard>
          <CCardHeader>
            <CForm className={'d-flex'}>
              <CInputGroup>
                <CFormLabel>
                  id
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Firstname
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Lastname
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Phone
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Country
                  <CFormSelect>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Netherlands</option>
                  </CFormSelect>
                </CFormLabel>
              </CInputGroup>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Firstname</CTableHeaderCell>
                  <CTableHeaderCell>Lastname</CTableHeaderCell>
                  <CTableHeaderCell>Phone</CTableHeaderCell>
                  <CTableHeaderCell>Address</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
            </CTable>
          </CCardBody>
        </CCard>
      </>
    )
  }
}
export default Vendors
