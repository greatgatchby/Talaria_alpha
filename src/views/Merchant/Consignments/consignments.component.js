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
        <CCol md={3}>
          <CCard>
            <CCardHeader>Consignment Inventory Value</CCardHeader>
            <CChartDoughnut
              data={{
                labels: ['Adidas', 'Nike', 'Jordan', 'NewBalance'],
                datasets: [
                  {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [400, 200, 800, 100],
                  },
                ],
              }}
            />
            <CCardFooter>
              <CWidgetStatsF className="mb-3" color="primary" title="Widget title" value="89.9%" />
              <CWidgetStatsF className="mb-3" color="primary" title="Widget title" value="89.9%" />
              <CWidgetStatsF className="mb-3" color="primary" title="Widget title" value="89.9%" />
            </CCardFooter>
          </CCard>
        </CCol>
        <CCol md={9}>
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
