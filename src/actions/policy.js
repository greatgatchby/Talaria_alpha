import {
  CREATE_POLICY,
  UPDATE_POLICY,
  GET_ALL_POLICIES,
  FIND_ONE_POLICY,
  DELETE_POLICY,
  DELETE_ALL_POLICIES,
  SET_MESSAGE,
  REQUEST_FAIL,
} from './type'
import policyService from '../services/policy.service'
export const createNewPolicy = (uid, policyTerms, policyRate, policyName) => (dispatch) => {
  return policyService.createPolicy(uid, policyTerms, policyRate, policyName).then(
    (response) => {
      dispatch({
        type: CREATE_POLICY,
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
export const getAllPolicies = (id) => (dispatch) => {
  return policyService.getAllPolicies(id).then(
    (response) => {
      dispatch({
        type: GET_ALL_POLICIES,
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
export const findPolicy = (id) => (dispatch) => {
  return policyService.findPolicy(id).then(
    (response) => {
      dispatch({
        type: FIND_ONE_POLICY,
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
export const updatePolicy = (id, policyTerms, policyRate, policyName) => (dispatch) => {
  return policyService.updatePolicy(id, policyTerms, policyRate, policyName).then(
    (response) => {
      dispatch({
        type: UPDATE_POLICY,
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
export const deletePolicy = (id) => (dispatch) => {
  return policyService.deletePolicy(id).then(
    (response) => {
      dispatch({
        type: DELETE_POLICY,
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
export const deleteAllPolicies = () => (dispatch) => {
  return policyService.deleteAllPolicies().then(
    (response) => {
      dispatch({
        type: DELETE_ALL_POLICIES,
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
