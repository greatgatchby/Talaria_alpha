import React from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from '@coreui/react'
import avatar8 from '../../../assets/images/avatars/8.jpg'
//nested columns in line 21-21 not sure if thats allowed..
const Profile = () => {
  return (
    <>
      <CRow>
        <CCol md={6}>
          <CCard>
            <CCardBody>
              <CCol md={2}>
                <CCardImage src="/images/avatars/8.jpg" orientation={'left'} />
              </CCol>
              <CCardTitle>Account Name</CCardTitle>
              <CCardText>Cassidy Jones Horwood W</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={6}>
          <CCard>
            <CCardBody>
              <CCardTitle>Shipping Service</CCardTitle>
              <CCardText>
                Clicking the button below will show the shipping information for your account.
              </CCardText>
              <CButton>Shipping Service</CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol md={10}>
          <CCard>
            <CCardBody>
              <CCardTitle>E-commerce & POS </CCardTitle>
              <CCardText>Connect Talaria to Square </CCardText>
              <CButton>Connect Square</CButton>
              <CCardText>Connect Talaria to Woo </CCardText>
              <CButton>Connect Woo</CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Profile
