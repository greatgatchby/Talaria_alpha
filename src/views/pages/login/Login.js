import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { login } from '../../../actions/auth'

const Login = (props) => {
  const form = useRef()
  const checkBtn = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [validated, setValidated] = useState(false)

  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)

  const dispatch = useDispatch()

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }
  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    dispatch(login(email, password))
      .then(() => {
        // eslint-disable-next-line react/prop-types
        props.history.push('/')
        window.location.reload()
      })
      .catch(() => {
        setLoading(false)
      })
    setValidated(true)
  }
  if (isLoggedIn) {
    return <Redirect to="/" />
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm noValidate validated={validated} onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText htmlFor="validationCustom01">
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="email"
                        autoComplete="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        defaultValue={'example@email.com'}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        onChange={onChangePassword}
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        defaultValue={'12345'}
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={8}>
                        <CButton color="primary" className="px-4 me-2" type={'submit'}>
                          Login
                        </CButton>
                        <CButton style={{ display: 'none' }} ref={checkBtn} />
                        <Link to="/register">
                          <CButton color="primary" active tabIndex={-1}>
                            Register Now!
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                    <CButton color="link" className="px-0">
                      <small>Forgot password?</small>
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
