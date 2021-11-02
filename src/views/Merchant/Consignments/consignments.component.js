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
const Filter = () => {
  return (
    <>
      <CForm>
        <h5>Search Consignments</h5>
        <CRow>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Item Name:
                <CFormInput></CFormInput>
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
                <CFormInput></CFormInput>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Vendor:
                <CFormSelect>
                  <option>Mark Otto</option>
                  <option>Jacob Thornton</option>
                  <option>Larry the Bird</option>
                </CFormSelect>
              </CFormLabel>
            </CInputGroup>
          </CCol>
          <CCol>
            <CInputGroup>
              <CFormLabel>
                Status:
                <CFormSelect>
                  <option>Requested</option>
                  <option>Confirmed</option>
                  <option>In Transit</option>
                  <option>Unauthenticated</option>
                  <option>Authenticated</option>
                  <option>On Sale</option>
                </CFormSelect>
              </CFormLabel>
            </CInputGroup>
          </CCol>
        </CRow>
      </CForm>
    </>
  )
}
const Table = () => {
  const [visible, setVisible] = useState(false)
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
            <CTableHeaderCell scope="col">Lastname</CTableHeaderCell>
            <CTableHeaderCell scope="col">Asking price</CTableHeaderCell>
            <CTableHeaderCell scope="col">payout</CTableHeaderCell>
            <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* eslint-disable-next-line no-undef */}
          <CTableRow onClick={() => setVisible(!visible)}>
            <CTableHeaderCell scope="row">
              <CFormCheck />
            </CTableHeaderCell>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Jordan 4 Lightning</CTableDataCell>
            <CTableDataCell>UK 8</CTableDataCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>£230</CTableDataCell>
            <CTableDataCell>£201</CTableDataCell>
            <CTableDataCell className={'text-warning'}>Requested</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CFormCheck />
            </CTableHeaderCell>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Nike x Off White Air presto - the ten</CTableDataCell>
            <CTableDataCell>UK 6</CTableDataCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>Thornton</CTableDataCell>
            <CTableDataCell>£800</CTableDataCell>
            <CTableDataCell>£732</CTableDataCell>
            <CTableDataCell className={'text-info'}>Authenticated</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CFormCheck />
            </CTableHeaderCell>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan="1">Yeezy 350 v3 Dark Glow</CTableDataCell>
            <CTableDataCell colSpan="1">UK 4</CTableDataCell>
            <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
            <CTableDataCell>£310</CTableDataCell>
            <CTableDataCell>£283.65</CTableDataCell>
            <CTableDataCell className={'text-success'}>On Sale</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">
              <CFormCheck />
            </CTableHeaderCell>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan="1">Yeezy 350 v3 Dark Glow</CTableDataCell>
            <CTableDataCell colSpan="1">UK 4</CTableDataCell>
            <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
            <CTableDataCell>£310</CTableDataCell>
            <CTableDataCell>£283.65</CTableDataCell>
            <CTableDataCell className={'text-danger'}>Rejected</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      graphdata: '',
    }
  }
  render() {
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
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  title="Widget title"
                  value="89.9%"
                />
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  title="Widget title"
                  value="89.9%"
                />
                <CWidgetStatsF
                  className="mb-3"
                  color="primary"
                  title="Widget title"
                  value="89.9%"
                />
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
                <Table />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </>
    )
  }
}

export default Dashboard
