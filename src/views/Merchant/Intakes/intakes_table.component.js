import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CRow,
  CCol,
  CForm,
  CInputGroup,
  CFormInput,
  CFormLabel,
  CFormSelect,
} from '@coreui/react/dist'

const IntakesTable = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>some text</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
      <CCard>
        <CCardHeader>
          <h5>Search Intakes</h5>
          <CForm>
            <CRow>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    consignment id:
                    <CFormInput></CFormInput>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
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
                    Type:
                    <CFormSelect>
                      <option>Shipped</option>
                      <option>Dropped</option>
                      <option>InStore</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Tracking No:
                    <CFormInput />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Status:
                    <CFormSelect>
                      <option>Dispatched</option>
                      <option>Delivered</option>
                      <option>In Transit</option>
                      <option>Processing</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
            </CRow>
          </CForm>
        </CCardHeader>
        <CTable hover>
          <CTableHead>
            <CTableRow color={'light'}>
              <CTableHeaderCell>#</CTableHeaderCell>
              <CTableHeaderCell>consignment id</CTableHeaderCell>
              <CTableHeaderCell>Item Name</CTableHeaderCell>
              <CTableHeaderCell>Type</CTableHeaderCell>
              <CTableHeaderCell>Tracking No</CTableHeaderCell>
              <CTableHeaderCell>Status</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow onClick={() => setVisible(!visible)}>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>Jordan 4 Lightning</CTableDataCell>
              <CTableDataCell>Shipped</CTableDataCell>
              <CTableDataCell>
                <a href={'#/transfers'}>MV10823457GB</a>
              </CTableDataCell>
              <CTableDataCell>In Transit</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
      </CCard>
    </>
  )
}

export default IntakesTable
