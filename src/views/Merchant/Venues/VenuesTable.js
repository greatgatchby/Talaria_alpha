import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCarousel,
  CCarouselItem,
  CCol,
  CFormCheck,
  CImage,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import venueService from '../../../services/venues.service'
import ConsignmentService from '../../../services/consignment.service'

const VenuesTable = () => {
  const [visible, setVisible] = useState(false)
  const [venues, setVenues] = useState([])
  useEffect(() => {
    VenueService.getAllVenues().then(
      (response) => {
        setVenues(response.data)
      },
      (error) => {
        const _venues =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.parse()

        setVenues(_venues)
      },
    )
  }, [])
  console.log(venues)
  return (
    <>
      <CModal visible={visible} onDismiss={() => setVisible(false)}>
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle>#VenueID</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol md={6} className={'p-3'}>
              <ul>
                <li>Name</li>
                <li>Address</li>
                <li>Type</li>
                <li>Postcode</li>
                <li>Division</li>
                <li>Merchant ID</li>
              </ul>
            </CCol>
            {/*<CCol md={6} className={'d-flex align-items-center justify-content-center'}>*/}
            {/*  <div className={'d-block'}>*/}
            {/*    <CButton className={'btn-danger mx-2'}>Reject</CButton>*/}
            {/*    <CButton className={'btn-primary'}>Accept</CButton>*/}
            {/*  </div>*/}
            {/*</CCol>*/}
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
      <CTable className={'table-hover'}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">
              <CFormCheck />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Venue Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Venue Address</CTableHeaderCell>
            <CTableHeaderCell scope="col">Venue Postcode</CTableHeaderCell>
            <CTableHeaderCell scope="col">Venue Type</CTableHeaderCell>
            <CTableHeaderCell scope="col">Venue Division</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* eslint-disable-next-line */}
          {venues.map(venue => (
            <CTableRow onClick={() => setVisible(!visible)} key={venue.venueid}>
              <CTableDataCell scope="row">
                <CFormCheck />
              </CTableDataCell>
              <CTableDataCell>{venue.venueid}</CTableDataCell>
              <CTableDataCell>{venue.venueName}</CTableDataCell>
              <CTableDataCell>{venue.venueAddress}</CTableDataCell>
              <CTableDataCell>{venue.venueType}</CTableDataCell>
              <CTableDataCell>{venue.venuePostcode}</CTableDataCell>
              <CTableDataCell>{venue.venueDivision}</CTableDataCell>
              <CTableDataCell className={'text-info'}>{venue.status_code}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}
