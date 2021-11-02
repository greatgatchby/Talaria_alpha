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
} from '@coreui/react'

class Venues extends Component {
  render() {
    return (
      <>
        <CCard className={'mb-3'}>
          <CCardHeader>
            <h5>Search</h5>
          </CCardHeader>
          <CCardBody>
            <CForm className={'d-flex'}>
              <CInputGroup>
                <CFormLabel className={'m-2'}>id</CFormLabel>
                <CFormInput></CFormInput>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel className={'m-2'}>Name:</CFormLabel>
                <CFormInput></CFormInput>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>type</CFormLabel>
                <CFormSelect>
                  <option>Physical</option>
                  <option>Online</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel className={'m-2'}>Filter: </CFormLabel>
                <CFormSelect>
                  <option>Name (asc)</option>
                  <option>Name (desc)</option>
                  <option>id (asc)</option>
                  <option>id (desc)</option>
                </CFormSelect>
              </CInputGroup>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <h5>Venues</h5>
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
