import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

class Payout extends Component {
  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>#id</CTableHeaderCell>
                  <CTableHeaderCell>item Name</CTableHeaderCell>
                  <CTableHeaderCell>Asking Price</CTableHeaderCell>
                  <CTableHeaderCell>Payout Amount</CTableHeaderCell>
                  <CTableHeaderCell></CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>123</CTableDataCell>
                  <CTableDataCell>Jordan 1 chicago</CTableDataCell>
                  <CTableDataCell>£123</CTableDataCell>
                  <CTableDataCell>£{123 / 0.92}</CTableDataCell>
                  <CTableDataCell className={'d-flex justify-content-end'}>
                    <CButton>Pay Now</CButton>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default Payout
