import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import Style from '@/app/(homeLinkedPages)/payment-plan/style.module.css'

const ApplyNow = () => {
  return (
    <Container fluid className={`py-5 ${Style.applyNow}`}>
        <Row>
            <Col className='d-flex justify-content-center flex-column align-items-center'>
                <div className={Style.heading}>Jetzt bewerben & KV-Dienste übernehmen</div>
                <Button className={`mt-4 ${Style.cta}`}>Jetzt KV-Dienste übernehmen</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default ApplyNow