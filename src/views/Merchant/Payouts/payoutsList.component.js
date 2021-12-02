import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCardBody,
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
  useEffect(() => {
    PayoutService.getAllPayoutsForMerchant().then(
      (response) => {
        setPayouts(response.data)
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
          <CTableRow>
            <CTableDataCell>123</CTableDataCell>
            <CTableDataCell>Jordan 1 chicago</CTableDataCell>
            <CTableDataCell>UK 9</CTableDataCell>
            <CTableDataCell>£123</CTableDataCell>
            <CTableDataCell>Jor-Nik-Chi-202</CTableDataCell>
            <CTableDataCell>£{123 / 0.92}</CTableDataCell>
            <CTableDataCell className={'d-flex justify-content-end'}>
              <CButton>Pay Now</CButton>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default PayoutsList
