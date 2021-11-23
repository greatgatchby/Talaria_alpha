import React from 'react'
import { CAvatar, CCard, CRow } from '@coreui/react'
import avatar7 from '../../../assets/images/avatars/8.jpg'

const Settings = () => {
  return (
    <>
      <CRow>
        <CCard>
          <CAvatar src={avatar7} size="xl" />
        </CCard>
      </CRow>
    </>
  )
}
export default Settings
