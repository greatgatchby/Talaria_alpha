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
import venueService from '../../../services/venue.service'

const VenuesTable = () => {
  const [visible, setVisible] = useState(false)
  const [venues, setVenues] = useState([])
  const [venueId, setVenueId] = useState([])
  const [venueName, setVenueName] = useState([])
  const [venueAddress, setVenueAddress] = useState([])
  const [venuePostcode, setVenuePostcode] = useState([])
  const [venueCity, setVenueCity] = useState([])
  const [venueCountry, setVenueCountry] = useState([])
  const [venueDivision, setVenueDivision] = useState([])
  const [venueType, setVenueType] = useState([])
  useEffect(() => {
    venueService.getAllVenues().then(
      (response) => {
        console.log(response.data)
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
  // const onChangeVenueid = (id) => {
  //   const venueId = id
  //   setVenueId(venueId)
  //   findOne(id)
  //   setVisible(!visible)
  // }
  // const findOne = (id) => {
  //   venueService.findOneVenue(id).then((data) => {
  //     console.log(data)
  //     setVenueAddress(data.venueAddress)
  //     setVenuePostcode()
  //   })
  // }
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
                <p>
                  <h4>#id:</h4> {venueId}
                </p>
                <p>
                  <h4>Name:</h4> {venueName}
                </p>
                <p>
                  <h4>Address:</h4> {venueAddress}
                </p>
                <p>
                  <h4>Postcode:</h4> {venuePostcode}
                </p>
                <p>
                  <h4>City:</h4> {venueCity}
                </p>
                <p>
                  <h4>Country:</h4> {venueCountry}
                </p>
                <p>
                  <h4>Division:</h4> {venueDivision}
                </p>
                <p>
                  <h4>Type:</h4> {venueType}
                </p>
              </ul>
            </CCol>
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
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Address</CTableHeaderCell>
            <CTableHeaderCell scope="col">City</CTableHeaderCell>
            <CTableHeaderCell scope="col">Division</CTableHeaderCell>
            <CTableHeaderCell scope="col">Country</CTableHeaderCell>
            <CTableHeaderCell scope="col">Postcode</CTableHeaderCell>
            <CTableHeaderCell scope="col">Type</CTableHeaderCell>
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
              <CTableDataCell>{venue.address}</CTableDataCell>
              <CTableDataCell>{venue.city}</CTableDataCell>
              <CTableDataCell>{venue.division}</CTableDataCell>
              <CTableDataCell>{venue.country}</CTableDataCell>
              <CTableDataCell>{venue.postcode}</CTableDataCell>
              <CTableDataCell>{venue.venueType}</CTableDataCell>
              <CTableDataCell className={'text-info'}>{venue.status_code}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}
export default VenuesTable
