import React, { Component } from 'react'
import { CCard, CCardBody, CTable, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react'

class Vendors extends Component {
  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>Id</CTableHeaderCell>
                  <CTableHeaderCell>Firstname</CTableHeaderCell>
                  <CTableHeaderCell>Lastname</CTableHeaderCell>
                  <CTableHeaderCell>Phone</CTableHeaderCell>
                  <CTableHeaderCell>Address</CTableHeaderCell>
                  <CTableHeaderCell>Postcode</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
            </CTable>
          </CCardBody>
        </CCard>
      </>
    )
  }
}
export default Vendors
