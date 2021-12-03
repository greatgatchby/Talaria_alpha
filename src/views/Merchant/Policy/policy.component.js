import React, { useEffect, useState } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useDispatch } from 'react-redux'
import PolicyService from '../../../services/policy.service'
const Policy = () => {
  const [visible, setVisible] = useState(false)
  const [policyList, setPolicyList] = useState([])
  const [policyTerms, setPolicyTerms] = useState([])
  const [policyRate, setPolicyRate] = useState([])
  const [policyName, setPolicyName] = useState([])
  const [policyId, setPolicyId] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    PolicyService.getAllPolicies().then(
      (response) => {
        console.log(response.data)
        setPolicyList(response.data)
        setPolicyTerms(response.data[0].policyTerms)
        setPolicyRate(response.data[0].policyRate)
        setPolicyName(response.data[0].policyName)
        setPolicyId(response.data[0].policyId)
      },
      (error) => {
        const _consignments =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.parse()

        setPolicyList(_consignments)
      },
    )
  }, [])
  const onChangePolicyName = (e) => {
    const policyId = e.target.value
    setPolicyName(policyId)
  }
  const onChangePolicyId = (id) => {
    setPolicyId(id)
    findOne()
  }
  const onChangePolicyRate = (e) => {
    const policyRate = e.target.value
    setPolicyRate(policyRate)
  }
  const onChangePolicyTerms = (e) => {
    const policyTerms = e.target.value
    setPolicyTerms(policyTerms)
  }
  const findOne = () => {
    PolicyService.findPolicy(policyId)
      .then((response) => {
        console.log(response.data)
        setPolicyRate(response.data.policyRate)
        setPolicyTerms(response.data.policyTerms)
      })
      .catch((err) => console.log(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    PolicyService.updatePolicy(policyId, policyTerms, policyRate, policyName).then(
      console.log('submitted'),
    )
  }
  //TODO add a conditional table based on click event
  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>Policy: {policyId}</CModalHeader>
        <CModalBody>
          <CForm onSubmit={handleSubmit}>
            <CFormInput hidden value={policyId} />
            <CRow>
              <CCol xs={7}>
                <h4>Name</h4>
                <CFormInput value={policyName} onChange={onChangePolicyName} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={3}>
                <h4>Rate</h4>
                <CFormInput value={policyRate} onChange={onChangePolicyRate} />
              </CCol>
            </CRow>
            <CRow>
              <CCol xs={12}>
                <h4>Terms</h4>
                <CFormTextarea
                  cols="60"
                  rows="20"
                  value={policyTerms}
                  onChange={onChangePolicyTerms}
                />
              </CCol>
            </CRow>
            <CRow>
              <CButtonGroup>
                <CButton type={'submit'} className={'my-2'}>
                  Save Changes
                </CButton>
                <CButton className={'my-2'} color="secondary" onClick={() => setVisible(false)}>
                  Close
                </CButton>
              </CButtonGroup>
            </CRow>
          </CForm>
        </CModalBody>
      </CModal>
      <CRow>
        <CCol md={5}>
          <CCard>
            <CCardHeader>
              <h4>
                Policy: <p>{policyId}</p>
              </h4>
            </CCardHeader>
            <CCardBody>
              <h4>Name: {policyName}</h4>
              <h4>Rate: {policyRate}</h4>
              <h4>Terms</h4>
              {policyTerms}
            </CCardBody>
          </CCard>
        </CCol>
        <CCol md={7}>
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol xs={11} className={'text-align-center'}>
                  <h4 className={'me-auto'}>Policies</h4>
                </CCol>
                <CCol>
                  <CButton onClick={() => setVisible(!visible)}>+</CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CTable className={'table-hover'}>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>id</CTableHeaderCell>
                    <CTableHeaderCell>name</CTableHeaderCell>
                    <CTableHeaderCell colspan={2}>updated At</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {/* eslint-disable-next-line */}
                  {policyList.map(policy => (
                    <CTableRow
                      key={policy.policyId}
                      onClick={() => onChangePolicyId(policy.policyId)}
                    >
                      <CTableDataCell>{policy.policyId}</CTableDataCell>
                      <CTableDataCell>consignment: tier 1</CTableDataCell>
                      <CTableDataCell>{policy.updatedAt}</CTableDataCell>
                      <CTableDataCell>
                        <CForm>
                          <CButton onClick={() => setVisible(!visible)}>Edit</CButton>
                        </CForm>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
export default Policy
