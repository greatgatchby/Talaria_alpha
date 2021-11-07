import React from 'react'
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

const AddIntake = () => {
  return (
    <>
      <CCard className={'mb-2'}>
        <CCardHeader>
          <h5>Create Consignment</h5>
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CRow>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Item Name:
                    <CFormInput />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Item Category:
                    <CFormSelect>
                      <option>Footwear</option>
                      <option>Clothing</option>
                      <option>Accessories</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Item Size:
                    <CFormSelect>
                      <option>3</option>
                      <option>4</option>
                      <option>4.5</option>
                      <option>5</option>
                      <option>5.5</option>
                      <option>6</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Asking Price:
                    <CFormInput />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Vendor:
                    <CFormInput />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Policy:
                    <CFormSelect>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
            </CRow>
          </CForm>
          <CButton type={'submit'} className={'btn btn-primary '}>
            Add
          </CButton>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AddIntake
