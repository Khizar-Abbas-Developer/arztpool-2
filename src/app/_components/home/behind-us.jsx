import {
  Container,
  Row,
  Col,
} from "react-bootstrap"
import Image from "next/image"
import behindUsImage from "@/../public/images/behindUsImage.jpg"

import Link from 'next/link'
import Style from '@/assets/css/_components/home/behind-us.module.css'

const BehindUs = () => {
  return (
    <div className={`${Style.behindUsSection}`}>
      <div className={Style.behindUsContentRow}>
        <Container>
          <Row className={`py-5 `}>
            <Col xs md='auto'>
              <div className={Style.imageContainer}>
                <div>
                  <Image src={behindUsImage} alt="" />
                </div>
              </div>
            </Col>
            <Col xs md={5}>
              <div className={Style.behindUsContent}>
                <div className={Style.title}>Wer steckt hinter arztpool?</div>
                <p className={Style.description}>Wir sind Ärzte, Kaufleute, Juristen, Logistiker, Programmierer und Buchhalter. Seit vielen Jahren beschäftigen wir uns mit dem Thema Vertretung im kassenärztlichen Bereitschaftsdienst und stehen Ärzten mit unserem interdisziplinären Team mit Rat und Tat zur Seite.</p>
                <Link className={Style.cta} href="" >
                  <Image src="/assets/ico-ArrowRight.svg" width={20} height={20} alt="" />
                  Zum Team
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default BehindUs