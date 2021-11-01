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
} from '@coreui/react'

class Venues extends Component {
  render() {
    return (
      <>
        <CCard>
          <CCardHeader>Venues</CCardHeader>
          <CCardBody>
            <CTable color={'light'}>
              <CTableHead>
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>venue name</CTableHeaderCell>
                <CTableHeaderCell>venue type</CTableHeaderCell>
                <CTableHeaderCell>info</CTableHeaderCell>
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
          </CCardBody>
        </CCard>
      </>
    )
  }
}
export default Venues
