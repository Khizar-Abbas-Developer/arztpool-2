'use client'

import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

import { feedbacks } from './const'
import Style from '@/assets/css/_components/home/feedback.module.css'

function Feedback() {
  const feedbackSlide = feedbacks.map(feedback => {
    return (
      <Carousel.Item key={feedback.id} className={Style.carouselItem}>
        <Carousel.Caption className={Style.carouselCaption}>
          <h3 className={Style.title}>{ feedback.title }</h3>
          <p className={`${Style.feedback} py-4`}>{ feedback.feedback }</p>
          <div className={`${Style.userName} py-1`}>{ feedback.user.name }</div>
          <div className={Style.userAddress}>{ feedback.user.address }</div>
        </Carousel.Caption>
      </Carousel.Item>
    )
  })

  return (
    <div className={Style.carouselContainer}>
      <Container>
        <Carousel className={Style.carousel} data-bs-theme="dark" indicators={false}>
          {feedbackSlide}
        </Carousel>
      </Container>
    </div>
  )
}

export default Feedback
