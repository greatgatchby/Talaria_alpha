import React, { Component, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CImage,
  CInputGroup,
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
  CWidgetStatsF,
} from '@coreui/react'
import { CChartDoughnut } from '@coreui/react-chartjs'
import slide1 from './../../../assets/images/Sneaker_Photos/IMG_2792.png'
import slide2 from './../../../assets/images/Sneaker_Photos/IMG_2797.png'
import slide3 from './../../../assets/images/Sneaker_Photos/IMG_2804.png'
import AddIntake from './AddIntake'
import Filter from './Filter'
import ConsignmentTable from './ConsignmentTable.component'
const Dashboard = () => {
  return (
    <>
      <CRow>
        <CCol md={12}>
          <AddIntake />
          <CCard>
            <CCardHeader>
              <Filter />
            </CCardHeader>
            <CCardBody className={'overflow-auto'}>
              <ConsignmentTable />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
