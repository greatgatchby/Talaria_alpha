import React, { useState } from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CRow,
} from '@coreui/react'
//change for each page/view
import venueService from '../../../services/venue.service'
import { useDispatch } from 'react-redux'

const AddVenue = () => {
  const [venueName, setVenueName] = useState('')
  const [venueAddress, setVenueAddress] = useState('')
  const [venueType, setVenueType] = useState('')
  const [venuePostcode, setVenuePostcode] = useState('')
  const [venueCountry, setVenueCountry] = useState('')
  const [venueCity, setVenueCity] = useState('')
  const [venueDivision, setVenueDivision] = useState('')

  const onChangeVenueName = (e) => {
    const venueName = e.target.value
    setVenueName(venueName)
  }
  const onChangeVenueAddress = (e) => {
    const venueAddress = e.target.value
    setVenueAddress(venueAddress)
  }
  const onChangeVenueCity = (e) => {
    const VenueCity = e.target.value
    setVenueCity(VenueCity)
  }
  const onChangeVenueCountry = (e) => {
    const venueCountry = e.target.value
    setVenueCountry(venueCountry)
  }
  const onChangeVenueType = (e) => {
    const venueType = e.target.value
    setVenueType(venueType)
  }
  const onChangeVenueDivision = (e) => {
    const venueDivision = e.target.value
    setVenueDivision(venueDivision)
  }
  const onChangeVenuePostcode = (e) => {
    const venuePostcode = e.target.value
    setVenuePostcode(venuePostcode)
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    venueService
      .createVenue(
        venueName,
        venueType,
        venueAddress,
        venuePostcode,
        venueCountry,
        venueCity,
        venueDivision,
      )
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <CCard className={'mb-2'}>
        <CCardHeader>
          <h5>Create Venue</h5>
        </CCardHeader>
        <CCardBody>
          <CForm noValidate validated onSubmit={handleSubmit}>
            <CRow>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Name:
                    <CFormInput
                      name={'venueName'}
                      value={venueName}
                      onChange={onChangeVenueName}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Address:
                    <CFormInput
                      name={'venueAddress'}
                      value={venueAddress}
                      onChange={onChangeVenueAddress}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    City:
                    <CFormInput
                      name={'venueCity'}
                      value={venueCity}
                      onChange={onChangeVenueCity}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Country:
                    <CFormInput
                      name={'venueCountry'}
                      value={venueCountry}
                      onChange={onChangeVenueCountry}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Postcode:
                    <CFormInput
                      name={'venuePostcode'}
                      value={venuePostcode}
                      onChange={onChangeVenuePostcode}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Division:
                    <CFormInput
                      name={'venueDivision'}
                      value={venueDivision}
                      onChange={onChangeVenueDivision}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Venue type:
                    <CFormSelect
                      name={'venueType'}
                      value={venueType}
                      onChange={onChangeVenueType}
                      required
                    >
                      <option>Physical</option>
                      <option>Online</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
            </CRow>
            <CButton type={'submit'} className={'btn btn-primary '}>
              Add
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AddVenue
