import {
  CREATE_VENUE,
  GET_ALL_VENUES,
  GET_ONE_VENUE,
  UPDATE_VENUE,
  DELETE_VENUE,
  DELETE_ALL_VENUES,
  REQUEST_FAIL,
  SET_MESSAGE,
} from '../actions/type'
import venueService from '../services/venue.service'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CRow,
} from '@coreui/react'
import React from 'react'
//search form
const getVenue = () => {
  return (
    <>
      <CForm>
        <h5>Search Venues</h5>
        <CRow>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Name:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Address:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Postcode:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Division:
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Venue Type:
                <CFormSelect>
                  <option>Physical</option>
                  <option>Online</option>
                </CFormSelect>
              </CFormLabel>
            </CInputGroup>
          </CCol>
        </CRow>
        <CButton type={'submit'} className={'btn btn-primary '}>
          Search
        </CButton>
      </CForm>
    </>
  )
}
export const retrieveVenue = (dispatch) => {
  return venueService.getAllVenues().then(
    (response) => {
      dispatch({
        type: GET_ALL_VENUES,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: response.data,
      })
      return Promise.resolve
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()

      dispatch({
        type: REQUEST_FAIL,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      })

      return Promise.reject()
    },
  )
}
export const createVenue =
  (name, address, type, division, postcode, city, merchantid) => (dispatch) => {
    return venueService.createVenue(name, address, type, division, postcode, city, merchantid).then(
      (response) => {
        dispatch({
          type: CREATE_VENUE,
        })
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        })
        return Promise.resolve()
      },
      (error) => {
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()
        dispatch({ type: REQUEST_FAIL })
        dispatch({ type: SET_MESSAGE, payload: message })
        return Promise.reject()
      },
    )
  }
export const findOneVenue = (id) => (dispatch) => {
  return venueService.findOneVenue(id).then(
    (response) => {
      dispatch({
        type: GET_ONE_VENUE,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      })
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({ type: REQUEST_FAIL })
      dispatch({ type: SET_MESSAGE, payload: message })
      return Promise.reject()
    },
  )
}
export const updateVenue =
  (venueid, venueName, address, postcode, country, city, division) => (dispatch) => {
    return venueService
      .updateVenue(venueid, venueName, address, postcode, country, city, division)
      .then(
        (response) => {
          dispatch({
            type: UPDATE_VENUE,
          })
          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          })
          return Promise.resolve()
        },
        (error) => {
          const message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
          dispatch({ type: REQUEST_FAIL })
          dispatch({ type: SET_MESSAGE, payload: message })
          return Promise.reject()
        },
      )
  }
export const deleteVenue = (id) => (dispatch) => {
  return venueService.createVenue(id).then(
    (response) => {
      dispatch({
        type: DELETE_VENUE,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      })
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({ type: REQUEST_FAIL })
      dispatch({ type: SET_MESSAGE, payload: message })
      return Promise.reject()
    },
  )
}
export const deleteAllVenues = (id) => (dispatch) => {
  return venueService.deleteAllVenues(id).then(
    (response) => {
      dispatch({
        type: DELETE_ALL_VENUES,
      })
      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      })
      return Promise.resolve()
    },
    (error) => {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
      dispatch({ type: REQUEST_FAIL })
      dispatch({ type: SET_MESSAGE, payload: message })
      return Promise.reject()
    },
  )
}
