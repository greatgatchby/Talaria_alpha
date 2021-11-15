import React, { useState } from 'react'
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

import { createConsignment } from '../../../actions/consignment'
import { useDispatch } from 'react-redux'

const AddIntake = () => {
  const [itemName, setItemName] = useState('')
  const [itemSize, setItemSize] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [askingPrice, setAskingPrice] = useState('')
  const [policyId, setPolicyId] = useState('')
  const [vendor, setVendor] = useState('')

  const onChangeItemName = (e) => {
    const itemName = e.target.value
    setItemName(itemName)
  }
  const onChangeItemSize = (e) => {
    const itemSize = e.target.value
    setItemSize(itemSize)
  }
  const onChangeItemCategory = (e) => {
    const itemCategory = e.target.value
    setItemCategory(itemCategory)
  }
  const onChangeAskingPrice = (e) => {
    const askingPrice = e.target.value
    setAskingPrice(askingPrice)
  }
  const onChangePolicyId = (e) => {
    const policyId = e.target.value
    setPolicyId(policyId)
  }
  const onChangeVendor = (e) => {
    const vendor = e.target.value
    setVendor(vendor)
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      createConsignment(
        vendor,
        itemName,
        itemSize,
        askingPrice,
        policyId,
        null,
        null,
        'requested',
        null,
        1,
      ),
    ).then(console.log('submitted'))
  }
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
                  <CFormLabel
                    name={'itemName'}
                    value={itemName}
                    onChange={onChangeItemName}
                    required
                  >
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
