import React from 'react'

import { Button, Container } from 'react-bootstrap'
import LocationCard from '@/app/_components/home/homesixthsection';
import "@/assets/css/_components/home/location/location";

function location() {
  return (
    <div className="pt-5 bg-white">
      <Container>
        <div className="locations-wrapper">
          <div className="locations-head d-flex flex-column px-5 bg-red font-weight-bolder">
            <p className="home-section-teaser small-heading">Verfügbare KV-Dienste</p>
            <p className="home-section-heading large-heading">
              Interessiert an der Übernahme von KV-Diensten?
            </p>
          </div>
          <div className="flex-wrap location-container-div d-flex justify-content-center">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
          </div>
          <div className='d-flex justify-content-center'>
            <Button className="fifth-home-section-btn mx-5 mb-3">
              Alle Dienste anzeigen
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default location
