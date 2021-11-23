import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormText,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCreditCard, cilLockLocked, cilPhone, cilUser } from '@coreui/icons'
import { register } from '../../../actions/auth'
import validator from 'validator'
import { number } from 'prop-types'
import { Link } from 'react-router-dom'
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    )
  }
}

const validEmail = (value) => {
  if (!validator.isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    )
  }
}

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    )
  }
}
const Register = () => {
  const form = useRef()
  const checkBtn = useRef()

  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiry, setExpiry] = useState('')
  const [successful, setSuccessful] = useState('')

  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }
  const onChangeFirstNAme = (e) => {
    const firstname = e.target.value
    setFirstname(firstname)
  }
  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const onChangeLastName = (e) => {
    const lastname = e.target.value
    setLastName(lastname)
  }
  const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }
  const onChangeCardNumber = (e) => {
    const cardNumber = e.target.value
    setCardNumber(cardNumber)
  }
  const onChangeCvv = (e) => {
    const cvv = e.target.value
    setCvv(cvv)
  }
  const onChangeExpiry = (e) => {
    const expiry = e.target.value
    setExpiry(expiry)
  }
  const onChangePhoneNumber = (e) => {
    const phoneNumber = e.target.value
    setPhoneNumber(phoneNumber)
  }
  const handleRegistry = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      setSuccessful(false)
      e.stopPropagation()
    } else {
      setValidated(true)
      dispatch(register(email, password, firstname, lastname, 'merchant', phoneNumber))
    }
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm noValidate validated={validated} onSubmit={handleRegistry}>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your merchant account</p>
                  <CRow>
                    <CCol md={6}>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          required
                          type="name"
                          placeholder="Firstname"
                          autoComplete="firstname"
                          value={firstname}
                          onChange={onChangeFirstNAme}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol md={6}>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          required
                          type="lastName"
                          placeholder="Last Name"
                          autoComplete="lastname"
                          value={lastname}
                          onChange={onChangeLastName}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      value={username}
                      onChange={onChangeUsername}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilPhone} />
                    </CInputGroupText>
                    <CFormInput
                      type="tel"
                      placeholder="00-000-000-000"
                      autoComplete="phoneNumber"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCreditCard} />
                    </CInputGroupText>
                    <CFormInput
                      type={'number'}
                      value={cardNumber}
                      placeholder={'0000000000000000'}
                      onChange={onChangeCardNumber}
                    />
                  </CInputGroup>
                  <CRow className={'mb-4'}>
                    <CCol>
                      <CInputGroup>
                        <CInputGroupText>cvv</CInputGroupText>
                        <CFormInput
                          type={'number'}
                          value={cvv}
                          onChange={onChangeCvv}
                          placeholder={'000'}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol>
                      <CInputGroup>
                        <CInputGroupText>exp</CInputGroupText>
                        <CFormInput
                          placeholder={'expiry'}
                          type={'month'}
                          value={expiry}
                          onChange={onChangeExpiry}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <div className="d-grid">
                    <CButton color="primary" type={'submit'}>
                      Create Account
                    </CButton>
                    <Link to={'/login'}>
                      <small>Already Have an Account Login</small>
                    </Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
