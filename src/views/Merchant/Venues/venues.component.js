import React, { Component } from 'react'
import {
  CCard,
  CCardBody,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CTableDataCell,
  CTableBody,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CFormSelect,
  CRow,
  CCol,
} from '@coreui/react'

import AddVenue from './AddVenue'
import getVenue from './getVenue'
class Venues extends Component {
  render() {
    return (
      <>
        <AddVenue />
        <CCard>
          <CCardHeader>
            <h5>Search Venues:</h5>
            <CForm>
              <CRow>
                <CCol>
                  <CInputGroup>
                    <CFormLabel>
                      id:
                      <CFormInput></CFormInput>
                    </CFormLabel>
                  </CInputGroup>
                </CCol>
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
                      Type:
                      <CFormSelect>
                        <option>Physical</option>
                        <option>Online</option>
                      </CFormSelect>
                    </CFormLabel>
                  </CInputGroup>
                </CCol>
              </CRow>
            </CForm>
          </CCardHeader>
          <CTable>
            <CTableHead color={'light'}>
              <CTableRow>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>venue name</CTableHeaderCell>
                <CTableHeaderCell>venue type</CTableHeaderCell>
                <CTableHeaderCell>info</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>Manchester Store</CTableDataCell>
                <CTableDataCell>Physical</CTableDataCell>
                <CTableDataCell>52 colemore row, b1 1ld</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCard>
      </>
    )
  }
}
export default Venues
