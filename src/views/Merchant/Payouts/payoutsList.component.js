import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCardBody,
  CForm,
  CFormInput,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import PayoutService from '../../../services/payout.service'

const PayoutsList = () => {
  const [payouts, setPayouts] = useState([])
  const [payoutSelected, setpayoutSelected] = useState([])
  useEffect(() => {
    PayoutService.getAllPayoutsForMerchant().then(
      (response) => {
        setPayouts(response.data)
        console.log(response.data)
      },
      (error) => {
        const _payouts =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.parse()

        setPayouts(_payouts)
      },
    )
  }, [])
  const handlePayout = (e) => {
    e.preventDefault()
    PayoutService.sendPayout(payoutSelected).then((response) => {
      console.log(response)
    })
  }
  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell>#id</CTableHeaderCell>
            <CTableHeaderCell>item Name</CTableHeaderCell>
            <CTableHeaderCell>item size</CTableHeaderCell>
            <CTableHeaderCell>Asking Price</CTableHeaderCell>
            <CTableHeaderCell>SKU</CTableHeaderCell>
            <CTableHeaderCell colspan={2}>Payout Amount</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {payouts.map((payout) => (
            <>
              <CTableRow
                onClick={() => {
                  setpayoutSelected(payout.id)
                }}
              >
                <CTableDataCell>{payout.id}</CTableDataCell>
                <CTableDataCell>{payout.itemName}</CTableDataCell>
                <CTableDataCell>{payout.itemSize}</CTableDataCell>
                <CTableDataCell>{payout.askingPrice}</CTableDataCell>
                <CTableDataCell>Jor-Nik-Chi-202</CTableDataCell>
                <CTableDataCell>{payout.amount}</CTableDataCell>
                <CTableDataCell className={'d-flex justify-content-end'} key={payout.id}>
                  <CForm onSubmit={handlePayout}>
                    <CFormInput type={'hidden'} value={payout.id} />
                    <CButton type={'submit'}>Pay Now</CButton>
                  </CForm>
                </CTableDataCell>
              </CTableRow>
            </>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}

export default PayoutsList
