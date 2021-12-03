import React, { useState } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
//change for each page/view
import venueService from '../../../services/venue.service'
import { useDispatch } from 'react-redux'
import VenueService from '../../../services/venue.service'
import { response } from 'express'
import Venues from './venues.component'
const UpdateVenue = () => {
  const [visible, setVisible] = useState(false)
  const [venueName, setVenueName] = useState('')
  const [venueAddress, setVenueAddress] = useState('')
  const [venueType, setVenueType] = useState('')
  const [venuePostcode, setVenuePostcode] = useState('')
  const [venueCountry, setVenueCountry] = useState('')
  const [venueCity, setVenueCity] = useState('')
  const [venueDivision, setVenueDivision] = useState('')
  const [venueid, setVenueId] = useState('')

  const onChangeVenueName = (e) => {
    const venueName = e.target.value
    setVenueName(venueName)
  }
  const onChangeVenueAddress = (e) => {
    const venueAddress = e.target.value
    setVenueAddress(venueAddress)
  }
  const onChangeVenueType = (e) => {
    const venueType = e.target.value
    setVenueType(venueType)
  }
  const onChangeVenuePostcode = (e) => {
    const venuePostcode = e.target.value
    setVenuePostcode(venuePostcode)
  }
  const onChangeVenueCountry = (e) => {
    const venueCountry = e.target.value
    setVenueCountry(venueCountry)
  }
  const onChangeVenueCity = (e) => {
    const venueCity = e.target.service
    setVenueCity(venueCity)
  }
  const onChangeVenueDivision = (e) => {
    const venueDivision = e.target.value
    setVenueDivision(venueDivision)
  }
  const onChangeVenueId = (id) => {
    setVenueId(id)
    findOne()
  }
  const findOne = () => {
    VenueService.findOneVenue(venueid)
      .then((response) => {
        console.log(response.data)
        setVenueName(response.data.venueName)
        setVenueAddress(response.data.venueAddress)
        setVenueCity(response.data.venueCity)
        setVenueCountry(response.data.venueCountry)
        setVenueDivision(response.data.venueDivision)
        setVenueType(response.data.venueType)
      })
      .catch((err) => console.log(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    VenueService.updateVenue(
      venueid,
      venueName,
      venueAddress,
      venuePostcode,
      venueCountry,
      venueCity,
      venueDivision,
    ).then(console.log('submitted'))
  }

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>Venue: {venueid} </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput hidden value={venueid} />
            <CRow>
              <CCol xs={7}>
                <h4>Name</h4>
                <CFormInput value={venueName} onChange={onChangeVenueName} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <h4>Address</h4>
                <CFormInput value={venueAddress} onChange={onChangeVenueAddress} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <h4>Postcode</h4>
                <CFormInput value={venuePostcode} onChange={onChangeVenuePostcode} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <h4>City</h4>
                <CFormInput value={venueCity} onChange={onChangeVenueCity} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <h4>Country</h4>
                <CFormInput value={venueCountry} onChange={onChangeVenueCountry} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <h4>Division</h4>
                <CFormInput value={venueDivision} onChange={onChangeVenueDivision} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <h4>Type</h4>
                <CFormInput value={venueType} onChange={onChangeVenueType} />
              </CCol>
            </CRow>
            <CRow>
              <CButtonGroup>
                <CButton type={'submit'} className={'my-2'}>
                  Save Changes
                </CButton>
                <CButton className={'my-2'} color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
              </CButtonGroup>
            </CRow>
          </CForm>
        </CModalBody>
      </CModal>
      <CRow>
        <CCol md={5}>
          <CCard>
            <CCardHeader>
              <h4>
                Venue: <p>{venueid}</p>
              </h4>
            </CCardHeader>
            <CCardBody>
              <h4>Name: {venueName}</h4>
              <h4>Address: {venueAddress}</h4>
              <h4>Postcode: {venuePostcode}</h4>
              <h4>City: {venueCity}</h4>
              <h4>Country: {venueCountry}</h4>
              <h4>Division: {venueDivision}</h4>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={7}>
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol xs={11} className={'text-align-center'}>
                  <h4 className={'me-auto'}>Venues</h4>
                </CCol>
                <CCol>
                  <CButton onClick={() => setVisible(!visible)}>+</CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CTable className={'table-hover'}>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>id</CTableHeaderCell>
                    <CTableHeaderCell>name</CTableHeaderCell>
                    <CTableHeaderCell colspan={2}>updated At</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {/* eslint-disable-next-line */}
                  {Venues.map(venue => (
                    <CTableRow key={venue.venueid} onClick={() => onChangeVenueId(venue.venueid)}>
                      <CTableDataCell>{venue.venueid}</CTableDataCell>
                      <CTableDataCell>{venue.updatedAt}</CTableDataCell>
                      <CTableDataCell>
                        <CForm>
                          <CButton onClick={() => setVisible(!visible)}>Edit</CButton>
                        </CForm>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default UpdateVenue
