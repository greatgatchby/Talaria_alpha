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
import VenuesTable from './VenuesTable'
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
          <VenuesTable />
        </CCard>
      </>
    )
  }
}
export default Venues
