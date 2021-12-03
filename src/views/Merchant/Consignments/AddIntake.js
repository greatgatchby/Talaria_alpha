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
const user = JSON.parse(localStorage.getItem('user'))

const AddIntake = () => {
  const [itemName, setItemName] = useState('')
  const [itemSize, setItemSize] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [askingPrice, setAskingPrice] = useState('')
  const [policyId, setPolicyId] = useState('')
  const [intakeType, setIntakeType] = useState('')
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
  const onChangeIntakeType = (e) => {
    const intakeType = e.target.value
    setIntakeType(intakeType)
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      createConsignment(vendor, itemName, itemSize, askingPrice, intakeType, policyId, 1, user.id),
    ).then(console.log('submitted'))
  }
  const setShippingTrue = () => {
    setIntakeType('shipped')
  }
  const setShippingFalse = () => {
    setIntakeType('dropped')
  }
  return (
    <>
      <CCard className={'mb-2'}>
        <CCardHeader>
          <h5>Create Consignment</h5>
        </CCardHeader>
        <CCardBody>
          <CForm noValidate validated onSubmit={handleSubmit}>
            <CRow>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Item Name:
                    <CFormInput
                      name={'itemName'}
                      value={itemName}
                      onChange={onChangeItemName}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Item Category:
                    <CFormSelect
                      name={'itemCategory'}
                      value={itemCategory}
                      onChange={onChangeItemCategory}
                      required
                    >
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
                    <CFormSelect required>
                      <option></option>
                      <option onClick={() => setItemSize(5.5)}>5.5</option>
                      <option onClick={() => setItemSize(6)}>6</option>
                      <option onClick={() => setItemSize(6.5)}>6.5</option>
                      <option onClick={() => setItemSize(7)}>7</option>
                      <option onClick={() => setItemSize(7.5)}>7.5</option>
                      <option onClick={() => setItemSize(8)}>8</option>
                      <option onClick={() => setItemSize(8.5)}>8.5</option>
                      <option onClick={() => setItemSize(9)}>9</option>
                      <option onClick={() => setItemSize(9.5)}>9.5</option>
                      <option onClick={() => setItemSize(10)}>10</option>
                      <option onClick={() => setItemSize(10.5)}>10.5</option>
                      <option onClick={() => setItemSize(11)}>11</option>
                      <option onClick={() => setItemSize(11.5)}>11.5</option>
                      <option onClick={() => setItemSize(12)}>12</option>
                      <option onClick={() => setItemSize(13)}>13</option>
                      <option onClick={() => setItemSize(14)}>14</option>
                      <option onClick={() => setItemSize(15)}>15</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Asking Price:
                    <CFormInput
                      name={'askingPrice'}
                      value={askingPrice}
                      onChange={onChangeAskingPrice}
                      required
                    />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Vendor:
                    <CFormInput name={'vendor'} value={vendor} onChange={onChangeVendor} required />
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Policy:
                    <CFormSelect
                      name={'policyid'}
                      value={policyId}
                      onChange={onChangePolicyId}
                      required
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
              <CCol>
                <CInputGroup>
                  <CFormLabel>
                    Intake type:
                    <CFormSelect
                      name={'intakeType'}
                      value={intakeType}
                      onChange={onChangeIntakeType}
                      required
                    >
                      <option onClick={() => setShippingFalse()}>Dropped</option>
                      <option onClick={() => setShippingTrue()}>Shipped</option>
                    </CFormSelect>
                  </CFormLabel>
                </CInputGroup>
              </CCol>
            </CRow>
            <CButton type={'submit'} className={'btn btn-primary '}>
              Add
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AddIntake
