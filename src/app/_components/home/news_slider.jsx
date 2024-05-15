
import React from 'react'
import Style from '@/assets/css/_components/home/marque.module.css';
import { Container } from 'react-bootstrap'

function Marque({ title, list }) {

  const listNews = list.join(' +++++ ')

  return (
    <div className={`${Style.marque} text-white`} style={{background : "#173968"}}>
      <Container >
        <div className="m-auto d-flex justify-content-center align-items-center">
          <h3 className={`my-0 me-5 ps-2 py-3 ${Style.title} `} style={{color : "#ed6d05"}}>{title}:</h3>
          <marquee behavior="" direction="" className={`pe-2 ${Style.marqueetext}`}>
            {listNews}
          </marquee>
        </div>
      </Container>
    </div>
  )
}

export default Marque