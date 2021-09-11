import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCarousel,
  CCarouselItem,
  CCol,
  CImage,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import slide1 from './../../../assets/images/Sneaker_Photos/IMG_2792.png'
import slide2 from './../../../assets/images/Sneaker_Photos/IMG_2797.png'
import slide3 from './../../../assets/images/Sneaker_Photos/IMG_2804.png'
class AuthenticatonComponent extends Component {
  render() {
    return (
      <>
        <CRow>
          <CCol md={'4'}>
            <CCarousel controls indicators>
              <CCarouselItem>
                <CImage className="d-block w-100" src={slide1} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={slide2} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={slide3} alt="slide 1" />
              </CCarouselItem>
            </CCarousel>
          </CCol>
          <CCol>
            <CCard className={'h-100'}>
              <CCardHeader>
                <h2>#id</h2>
              </CCardHeader>
              <CCardBody>
                <p>some text</p>
              </CCardBody>
              <CCardFooter className={'d-flex justify-content-end'}>
                <CButton className={'mx-2'}>Reject</CButton>
                <CButton>Authenticate</CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
        <CRow className={'p-3'}>
          <CCard>
            <CCardBody>
              <CTable hover>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>id</CTableHeaderCell>
                    <CTableHeaderCell>item name</CTableHeaderCell>
                    <CTableHeaderCell>Vendor</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>Some text</CTableDataCell>
                    <CTableDataCell>Some text</CTableDataCell>
                    <CTableDataCell>Some text</CTableDataCell>
                    <CTableDataCell>Some text</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CRow>
      </>
    )
  }
}
export default AuthenticatonComponent
