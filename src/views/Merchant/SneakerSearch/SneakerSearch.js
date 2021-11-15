/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
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
  CTableRow, CButton,
} from '@coreui/react/dist'
import sneakerService from '../../../services/sneakerSearch.service'

const SneakerSearch = () => {
  const [results, setResults] = useState([])
  sneakerService.searchSneakers('red').then((response) => setResults(response.data),       (error) => {
    const _results =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.parse()

    setResults(_results)
  },)
  console.log(results)
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
            {results}
          </CCard>
        </CContainer>
      </CRow>
    </>
  )
}

export default SneakerSearch
