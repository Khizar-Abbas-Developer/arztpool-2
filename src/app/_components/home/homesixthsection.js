import React from 'react'
import '@/assets/css/_components/home/location/location'

function Location() {
  return (
    <div>
      <div className="sixth-home-section my-5">
        {/* <!-- fifth section head --> */}

        {/* <!-- sixth section body --> */}
        <div className="sixth-home-section-body d-flex justify-content-between">
          <div className="card">
            <div>
              {/* <!--Google map--> */}
              <div className="map-container">
                <iframe
                  className="card-img-top"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.8869354068509!2d15.21545545625287!3d59.26803797168206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14e4a4c8e193%3A0xf18609c2d9ee261f!2sLa%20Santa%20Maria%20Tattoos%20%26%20Art!5e0!3m2!1ssv!2sse!4v1568297791174!5m2!1ssv!2sse"
                  frameBorder="0"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
            <div className="card-body mt-4">
              <p className="date">16.03.2024</p>
              <p className="time">
                <span>11-20 Uhr</span>
                <span> | 9 Std.</span>
                <span> | Fahrdienst</span>
              </p>
              <p className="location">
                Bayern | Ingolstadt - Eichstätt - Neuburg
              </p>
              <p className="price-range">
                <span>33-44€</span> Honorar pro Std.
              </p>
              <p className="mb-6 text-sm">
                <span>0 Beobachter</span>
                <span> | 1 Bewerber</span>
              </p>
              <a href="#" className="d-flex align-items-center">
                <svg
                  className="svg-inline--fa fa-arrow-right fa-w-14 mr-4"
                  style={{width : "20px"}}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fal"
                  data-icon="arrow-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"
                  ></path>
                </svg>{" "}
                <span className='ps-4'> Details ansehen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location

