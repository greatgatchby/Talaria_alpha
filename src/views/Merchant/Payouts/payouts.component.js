import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
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
          <CCardHeader>
            <CForm className={'d-flex'}>
              <CInputGroup>
                <CFormLabel>
                  id
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Item Name
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Item Size
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Asking Price
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  SKU
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Payout Amount
                  <div className={'d-flex'}>
                    <input type={'range'}></input>
                    <CFormInput></CFormInput>
                  </div>
                </CFormLabel>
              </CInputGroup>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>#id</CTableHeaderCell>
                  <CTableHeaderCell>item Name</CTableHeaderCell>
                  <CTableHeaderCell>item size</CTableHeaderCell>
                  <CTableHeaderCell>Asking Price</CTableHeaderCell>
                  <CTableHeaderCell>SKU</CTableHeaderCell>
                  <CTableHeaderCell colspan={2}>Payout Amount</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>123</CTableDataCell>
                  <CTableDataCell>Jordan 1 chicago</CTableDataCell>
                  <CTableDataCell>UK 9</CTableDataCell>
                  <CTableDataCell>£123</CTableDataCell>
                  <CTableDataCell>Jor-Nik-Chi-202</CTableDataCell>
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
