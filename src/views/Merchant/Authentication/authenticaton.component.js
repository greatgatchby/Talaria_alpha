import React, { Component } from 'react'
import { CCard, CCarousel, CCarouselItem, CCol, CImage, CRow } from '@coreui/react'
import slide1 from './../../../assets/images/Sneaker_Photos/IMG_2792.png'
import slide2 from './../../../assets/images/Sneaker_Photos/IMG_2797.png'
import slide3 from './../../../assets/images/Sneaker_Photos/IMG_2804.png'
class AuthenticatonComponent extends Component {
  render() {
    return (
      <>
        <CRow>
          <CCol md={'8'}>
            <CCarousel>
              <CCarouselItem>
                <CImage className="d-block w-100" src={slide1} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={slide2} alt="slide 1" />
              </CCarouselItem>
              <CCarouselItem>
                <CImage className="d-block w-100" src={slide3} alt="slide 1" />
              </CCarouselItem>
            </CCarousel>
          </CCol>
          <CCol></CCol>
        </CRow>
      </>
    )
  }
}
export default AuthenticatonComponent
