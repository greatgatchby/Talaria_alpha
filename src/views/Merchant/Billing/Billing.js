import React, { useState } from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import avatar8 from '../../../assets/images/avatars/8.jpg'

const Billing = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CModal visible={visible}>
        <CModalHeader>
          <CModalTitle>Add Payment Method</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow className={'mb-2'}>
            <CCol sm={3}>
              <CButton>Card</CButton>
            </CCol>
            <CCol>Add your debit or credit card details</CCol>
          </CRow>
          <CRow className={'mb-2'}>
            <CCol sm={3}>
              <CButton>Bank</CButton>
            </CCol>
            <CCol>Connect your bank account</CCol>
          </CRow>
          <CRow className={'mb-2'}>
            <CCol sm={3}>
              <CButton>Paypal</CButton>
            </CCol>
            <CCol>Connect your paypal</CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 2 }}>
        <CCol sm={5}>
          <CCard className={'h-100'}>
            <CCardHeader>Total fees this month</CCardHeader>
            <CCardBody className={'text-center'}>
              <h1>£ 1234</h1>
            </CCardBody>
            <CCardFooter>
              <CRow>
                <CCol>Fee Rate: 2.5%</CCol>
                <CCol className={'d-flex justify-content-end'}>Merchant Level: starter</CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol sm={7}>
          <CCard className={'h-100'}>
            <CCardHeader>Prefered Payment Method</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol>
                  <CAvatar src={avatar8} />
                </CCol>
                <CCol>Visa Debit</CCol>
                <CCol>Ending in: 4266</CCol>
              </CRow>
            </CCardBody>
            <CCardFooter className={'d-flex justify-content-end'}>
              <a href={'#'}>change</a>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow className={'pt-4 pb-2'}>
        <CCol>
          <h2>Saved Payment Methods</h2>
        </CCol>
        <CCol className={'d-flex justify-content-end'}>
          <CButton onClick={() => setVisible(!visible)}>
            <h2>+ Payment Method </h2>
          </CButton>
        </CCol>
      </CRow>
      <CRow className={'px-2'}>
        <CCard className={'p-5'}>
          <CRow>
            <CCol>
              <CAvatar src={avatar8} />
            </CCol>
            <CCol>Paypal</CCol>
            <CCol>Connected</CCol>
            <CCol className={'d-flex justify-content-end'}>
              <a href={'#'} color={'warning'}>
                Remove
              </a>
            </CCol>
          </CRow>
        </CCard>
      </CRow>
    </>
  )
}
export default Billing
