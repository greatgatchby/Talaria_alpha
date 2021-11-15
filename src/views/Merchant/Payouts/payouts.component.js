import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { getStyle, hexToRgba } from '@coreui/utils'
import { CChartLine } from '@coreui/react-chartjs/dist'
import PayoutsList from './payoutsList.component'

class Payout extends Component {
  render() {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
    return (
      <>
        <CCard className={'mb-2'}>
          <CCardHeader>
            <h5>Payouts/Month</h5>
          </CCardHeader>
          <CCardBody>
            <CChartLine
              style={{ height: '300px', marginTop: '40px' }}
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                    borderColor: getStyle('--cui-info'),
                    pointHoverBackgroundColor: getStyle('--cui-info'),
                    borderWidth: 2,
                    data: [
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                      random(50, 200),
                    ],
                    fill: true,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      drawOnChartArea: false,
                    },
                  },
                  y: {
                    ticks: {
                      beginAtZero: true,
                      maxTicksLimit: 5,
                      stepSize: Math.ceil(250 / 5),
                      max: 250,
                    },
                  },
                },
                elements: {
                  line: {
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                    hoverBorderWidth: 3,
                  },
                },
              }}
            />
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader>
            <CForm className={'d-flex'}>
              <CInputGroup>
                <CFormLabel>
                  id
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Item Name
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Item Size
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Asking Price
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  SKU
                  <CFormInput></CFormInput>
                </CFormLabel>
              </CInputGroup>
              <CInputGroup>
                <CFormLabel>
                  Payout Amount
                  <div className={'d-flex'}>
                    <input type={'range'}></input>
                    <CFormInput></CFormInput>
                  </div>
                </CFormLabel>
              </CInputGroup>
            </CForm>
          </CCardHeader>
          <CCardBody>
            <PayoutsList />
          </CCardBody>
        </CCard>
      </>
    )
  }
}

export default Payout
