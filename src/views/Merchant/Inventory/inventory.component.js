import React, { Component } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

class Inventory extends Component {
  render() {
    return (
      <>
        <CCard>
          <CCardHeader>
            <CForm className={'d-flex'}>
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
                  SKU
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Venue
                  <CFormSelect>
                    <option>square</option>
                    <option>woo-commerce</option>
                    <option>Shopify</option>
                  </CFormSelect>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Sort
                  <CFormSelect>
                    <option>Price</option>
                    <option>Alphabetical</option>
                    <option>Relevance</option>
                    <option>id</option>
                  </CFormSelect>
                </CFormLabel>
              </CInputGroup>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell>id</CTableHeaderCell>
                  <CTableHeaderCell>Item Name</CTableHeaderCell>
                  <CTableHeaderCell>Item Size</CTableHeaderCell>
                  <CTableHeaderCell>SKU</CTableHeaderCell>
                  <CTableHeaderCell>Venue</CTableHeaderCell>
                  <CTableHeaderCell>Vendor</CTableHeaderCell>
                  <CTableHeaderCell>Price</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
            </CTable>
          </CCardBody>
        </CCard>
      </>
    )
  }
}
export default Inventory
