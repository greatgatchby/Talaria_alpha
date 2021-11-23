import React from 'react'
import { CAvatar, CCard, CRow } from '@coreui/react'
import avatar8 from '../../../assets/images/avatars/8.jpg'

const Billing = () => {
  return (
    <>
      <CRow>
        <CCard>
          <CAvatar src={avatar8} size="xl" />
        </CCard>
      </CRow>
    </>
  )
}
export default Billing
