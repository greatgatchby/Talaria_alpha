import React, { Component } from 'react'
import {
  CCard,
  CCardBody,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

class TransfersComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <CCard>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>#</CTableHeaderCell>
                  <CTableHeaderCell>consignment id</CTableHeaderCell>
                  <CTableHeaderCell>Item Name</CTableHeaderCell>
                  <CTableHeaderCell>Type</CTableHeaderCell>
                  <CTableHeaderCell>Tracking No</CTableHeaderCell>
                  <CTableHeaderCell>Status</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
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
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default TransfersComponent
