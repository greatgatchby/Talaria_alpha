import React from 'react'
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
//todo add all api requests / imports

const Portfolio = () => {
  return (
    <>
      <CRow>
        <CCol md={12}>
          //call profile and logout components
          <CCard>
            <CCardHeader>
              //call search consignments
            </CCardHeader>
            <CCardBody className={'overflow-auto'}>
              //call consignments table
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
