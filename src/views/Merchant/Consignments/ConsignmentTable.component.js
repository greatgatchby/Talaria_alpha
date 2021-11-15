import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCarousel,
  CCarouselItem,
  CCol,
  CFormCheck,
  CImage,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import slide1 from '../../../assets/images/Sneaker_Photos/IMG_2792.png'
import slide2 from '../../../assets/images/Sneaker_Photos/IMG_2797.png'
import slide3 from '../../../assets/images/Sneaker_Photos/IMG_2804.png'
import ConsignmentService from '../../../services/consignment.service'

const ConsignmentTable = () => {
  const [visible, setVisible] = useState(false)
  const [consignments, setConsignments] = useState([])
  useEffect(() => {
    ConsignmentService.getAllConsignments().then(
      (response) => {
        setConsignments(response.data)
      },
      (error) => {
        const _consignments =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.parse()

        setConsignments(_consignments)
      },
    )
  }, [])
  console.log(consignments)
  return (
    <>
      <CModal visible={visible} onDismiss={() => setVisible(false)}>
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle>#ConsignmentID</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="d-block w-100" src={slide1} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={slide2} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src={slide3} alt="slide 3" />
            </CCarouselItem>
          </CCarousel>
          <CRow>
            <CCol md={6} className={'p-3'}>
              <ul>
                <li>Name</li>
                <li>Size</li>
                <li>Vendor</li>
                <li>Asking price</li>
                <li>Payout</li>
                <li>date consigned</li>
              </ul>
            </CCol>
            <CCol md={6} className={'d-flex align-items-center justify-content-center'}>
              <div className={'d-block'}>
                <CButton className={'btn-danger mx-2'}>Reject</CButton>
                <CButton className={'btn-primary'}>Accept</CButton>
              </div>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
      <CTable className={'table-hover'}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">
              <CFormCheck />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Item Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Item Size</CTableHeaderCell>
            <CTableHeaderCell scope="col">Firstname</CTableHeaderCell>
            <CTableHeaderCell scope="col">Asking price</CTableHeaderCell>
            <CTableHeaderCell scope="col">payout</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* eslint-disable-next-line */}
          {consignments.map(consignment => (
            <CTableRow onClick={() => setVisible(!visible)} key={consignment.consignmentid}>
              <CTableDataCell scope="row">
                <CFormCheck />
              </CTableDataCell>
              <CTableDataCell>{consignment.consignmentid}</CTableDataCell>
              <CTableDataCell>{consignment.item_name}</CTableDataCell>
              <CTableDataCell>{consignment.item_size}</CTableDataCell>
              <CTableDataCell>{consignment.userid}</CTableDataCell>
              <CTableDataCell>{consignment.asking_price}</CTableDataCell>
              <CTableDataCell>
                {Math.round(consignment.asking_price * 0.2).toFixed(2)}
              </CTableDataCell>
              <CTableDataCell className={'text-info'}>{consignment.status_code}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </>
  )
}
export default ConsignmentTable
