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
import UpdateVenue from './UpdateVenue'

import VenuesTable from './VenuesTable'
const Venues = () => {
  return (
    <>
      <CRow>
        <CCol md={12}>
          <AddVenue />
          <CCard>
            <CCardHeader>
              <UpdateVenue />
            </CCardHeader>
            <CCardBody className={'overflow-auto'}>
              <VenuesTable />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Venues
