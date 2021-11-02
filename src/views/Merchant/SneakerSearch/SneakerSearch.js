import React from 'react'
import {
  CFormInput,
  CFormLabel,
  CInputGroup,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CContainer,
  CCard,
  CTableRow,
} from '@coreui/react/dist'

const SneakerSearch = () => {
  return (
    <>
      <CRow>
        <CInputGroup className={'d-flex justify-content-center'}>
          <CFormLabel>
            Search:
            <CRow p-2>
              <small>Enter item name or stylecode.</small>
            </CRow>
            <CFormInput />
          </CFormLabel>
        </CInputGroup>
      </CRow>
      <CRow className={'d-flex justify-content-center'}>
        <CContainer>
          <CCard>
            <CTable hover responsive align="middle" className="mb-0 border text-center">
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell></CTableHeaderCell>
                  <CTableHeaderCell>Name</CTableHeaderCell>
                  <CTableHeaderCell>Stylecode</CTableHeaderCell>
                  <CTableHeaderCell>Brand</CTableHeaderCell>
                  <CTableHeaderCell>Average price</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableDataCell>
                  <img
                    width={'100px'}
                    src={
                      'https://cms-cdn.thesolesupplier.co.uk/2020/12/jordan-1-high-og-pollen-1_w900.jpg.webp'
                    }
                  />
                </CTableDataCell>
                <CTableDataCell>Jordan 1 Pollen</CTableDataCell>
                <CTableDataCell>555088-701</CTableDataCell>
                <CTableDataCell>Jordan Brand</CTableDataCell>
                <CTableDataCell>£170</CTableDataCell>
              </CTableBody>
              <CTableFoot></CTableFoot>
            </CTable>
          </CCard>
        </CContainer>
      </CRow>
    </>
  )
}

export default SneakerSearch
