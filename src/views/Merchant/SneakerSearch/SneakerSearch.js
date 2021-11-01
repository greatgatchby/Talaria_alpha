import React from 'react'
import { CFormInput, CFormLabel, CInputGroup, CRow } from '@coreui/react/dist'

const SneakerSearch = () => {
  return (
    <>
      <CRow>
        <CInputGroup className={'d-flex justify-content-center'}>
          <CFormLabel>
            Search:
            <CRow p-2>
              <small>Enter item name or stylecode.</small>
            </CRow>
            <CFormInput />
          </CFormLabel>
        </CInputGroup>
      </CRow>
    </>
  )
}

export default SneakerSearch
