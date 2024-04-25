import React from 'react'
import { SectionServicesWrapper, ServImgCountainer, ServicesCountainer } from './styles'

import S1 from '../../assets/Images/Services/Services.png'
import S2 from '../../assets/Images/Services/Services-1.png'
import S3 from '../../assets/Images/Services/Services-2.png'
import Image from '../UI/Image/image'

const SectServices = () => {
  return (
    <SectionServicesWrapper>
     <ServicesCountainer>
          <ServImgCountainer>
               <Image src={S1} alt={'Serv1'}/>
          </ServImgCountainer>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
     </ServicesCountainer>
     <ServicesCountainer>
          <ServImgCountainer>
               <Image src={S2} alt={'Serv2'}/>
          </ServImgCountainer>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
     </ServicesCountainer>
     <ServicesCountainer>
          <ServImgCountainer>
               <Image src={S3} alt={'Serv3'}/>
          </ServImgCountainer>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We reurn money within 30 days</p>
     </ServicesCountainer>
    </SectionServicesWrapper>
  )
}

export default SectServices