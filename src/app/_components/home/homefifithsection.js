import React from "react";
import HomeFifthSectioncss from "@/assets/css/_components/home/homfifthsection.css";

function homefifithsection() {
  return (
    <div>
      <div className="fifth-home-section pe-2 mt-5">
        {/* <!-- fifth section head --> */}

        {/* <!-- fifth section body --> */}
        <div className="fifth-home-section-body d-flex flex-wrap justify-content-center align-items-baseline">
          <div className="fifth-section-card border-0 d-flex justify-content-center align-items-center flex-column text-center my-4">
            <div className="icon-container position-relative ">
              <svg
                className="svg-inline--fa fa-tasks fa-w-16 mdi v-icon notranslate v-theme--light v-icon--size-default"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="tasks"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M145.35 207a8 8 0 0 0-11.35 0l-71 71-39-39a8 8 0 0 0-11.31 0L1.35 250.34a8 8 0 0 0 0 11.32l56 56a8 8 0 0 0 11.31 0l88-88a8 8 0 0 0 0-11.32zM62.93 384c-17.67 0-32.4 14.33-32.4 32s14.73 32 32.4 32a32 32 0 0 0 0-64zm82.42-337A8 8 0 0 0 134 47l-71 71-39-39a8 8 0 0 0-11.31 0L1.35 90.34a8 8 0 0 0 0 11.32l56 56a8 8 0 0 0 11.31 0l88-88a8 8 0 0 0 0-11.32zM503 400H199a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h304a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm0-320H199a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h304a8 8 0 0 0 8-8V88a8 8 0 0 0-8-8zm0 160H199a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h304a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"
                ></path>
              </svg>
              <div className="badge">1</div>
            </div>
            <div className="fifth-section-card-text mt-5 ">
              <p className="title d-flex justify-content-center d-flex justify-content-center">Dienst eintragen</p>
              <p className="text px-5">
                Mühelos können Sie Ihre KV-Dienste auf arztpool24.de eintragen -
                kostenfrei und ohne Verpflichtungen
              </p>
            </div>
          </div>
          <div className="fifth-section-card border-0 d-flex justify-content-center align-items-center flex-column text-center my-4">
            <div className="icon-container position-relative ">
              <svg
                data-v-be2af993=""
                className="svg-inline--fa fa-user-md-chat fa-w-20 mdi v-icon notranslate v-theme--light v-icon--size-default"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="user-md-chat"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M512 0c-70.69 0-128 50.17-128 112 0 28.76 12.75 54.72 33.11 74.55a312.08 312.08 0 0 1-31.29 55.37 9.86 9.86 0 0 0-1.25 9.07c1.09 3.13 3.43 5 6.1 5 39.85 0 72.35-17.13 95.23-34.36A146 146 0 0 0 512 224c70.7 0 128-50.14 128-112S582.7 0 512 0zm0 192a114.76 114.76 0 0 1-20.38-1.84l-13.78-2.5-11.18 8.42a155.47 155.47 0 0 1-26.13 16.07c2-4.08 4-8.35 5.91-12.79l8.87-20.28-15.87-15.45C428.75 153.24 416 135.83 416 112c0-44.11 43.06-80 96-80s96 35.89 96 80-43.06 80-96 80zm-194.31 96.1c-33.8-1-44.3 15.9-93.7 15.9s-59.79-16.9-93.59-15.9A134.33 134.33 0 0 0 0 422.4V504a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-81.6c0-54.3 42.6-98.4 96-101.8v81.7a56 56 0 1 0 32 0v-76.9a200.3 200.3 0 0 0 128 0v68.8c-28.2 7.5-48 34.5-48 64.6V488a16.06 16.06 0 0 0 4.7 11.3l10.3 10.3a8 8 0 0 0 11.3 0l11.3-11.3a8 8 0 0 0 0-11.3l-5.7-5.7V456a32.14 32.14 0 0 1 37.4-31.6c15.7 2.6 26.6 17.4 26.6 33.3v23.6l-5.7 5.7a8 8 0 0 0 0 11.3l11.3 11.3a8 8 0 0 0 11.3 0l10.3-10.3a16.06 16.06 0 0 0 4.7-11.3v-32a63.8 63.8 0 0 0-48-61.6v-73.7c53.4 3.4 96 47.5 96 101.8V504a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8v-81.6a134 134 0 0 0-130.11-134.3zM168 456a24 24 0 1 1-24-24 24.06 24.06 0 0 1 24 24zm56-200A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm0-224a96 96 0 1 1-96 96 96.15 96.15 0 0 1 96-96z"
                ></path>
              </svg>
              <div className="badge">2</div>
            </div>
            <div className="fifth-section-card-text mt-5 ">
              <p className="title d-flex justify-content-center">Angebot erhalten</p>
              <p className="text px-5">
                Innerhalb von 48 Stunden bekommen Sie Bewerbungen von passenden
                Vertretungsärzten, aus denen Sie Ihre Favoriten auswählen können
              </p>
            </div>
          </div>
          <div className="fifth-section-card border-0 d-flex justify-content-center align-items-center flex-column text-center my-4">
            <div className="icon-container position-relative ">
              <svg
                data-v-be2af993=""
                className="svg-inline--fa fa-handshake fa-w-20 mdi v-icon notranslate v-theme--light v-icon--size-default"
                aria-hidden="true"
                focusable="false"
                data-prefix="fal"
                data-icon="handshake"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M16 319.8c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16c0 8.9 7.2 16 16 16zM632 128l-113.5.2-51.2-49.9c-9.1-9.1-21.1-14.1-33.9-14.1h-101c-10.4 0-20.1 3.9-28.3 10-8.4-6.5-18.7-10.3-29.3-10.3h-69.5c-12.7 0-24.9 5.1-33.9 14.1l-50 50H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h56v191.9H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h56c17.6 0 31.8-14.2 31.9-31.7h33.2l81.5 78c29.8 24.1 71.8 23.4 101-.2l7.2 6.2c9.6 7.8 21.3 11.9 33.5 11.9 16 0 31.1-7 41.4-19.6l21.9-26.9c16.4 8.9 42.9 9 60-12l9.5-11.7c6.2-7.6 9.6-16.6 10.5-25.7h48.6c.1 17.5 14.4 31.7 31.9 31.7h56c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-56V160.2l56-.2c4.4 0 8-3.6 8-8v-16c-.1-4.5-3.7-8-8.1-8zM460.2 357.6l-9.5 11.7c-5.4 6.6-15.4 8.1-22.5 2.3l-17.8-14.4-41.5 51c-7.5 9.3-21 10.2-29.4 3.4l-30.6-26.1-10.4 12.8c-16.7 20.5-47 23.7-66.6 7.9L142 320.1H96V159.9h38.6l59.3-59.3c3-3 7.1-4.7 11.3-4.7h69.5c.9 2.2.3.7 1.1 2.9l-59 54.2c-28.2 25.9-29.6 69.2-4.2 96.9 14.3 15.6 58.6 39.3 96.9 4.2l22.8-20.9 125.6 101.9c6.8 5.6 7.8 15.7 2.3 22.5zm83.8-37.5h-57.2c-2.5-3.5-5.3-6.9-8.8-9.8l-121.9-99 28.4-26.1c6.5-6 7-16.1 1-22.6s-16.1-6.9-22.6-1l-75.1 68.8c-14.4 13.1-38.6 12-51.7-2.2-13.6-14.8-12.7-38 2.2-51.7l83.1-76.2c3-2.7 6.8-4.2 10.8-4.2h101c4.3 0 8.3 1.7 11.4 4.8l60.7 59.1H544v160.1zm80-32.2c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16c0-8.9-7.2-16-16-16z"
                ></path>
              </svg>
              <div className="badge">3</div>
            </div>
            <div className="fifth-section-card-text mt-5 ">
              <p className="title d-flex justify-content-center">Zuverlässige Vertretung</p>
              <p className="text px-5">
                Sobald beide Parteien den Dienstvertretungsvertrag bestätigt
                haben, erhalten Sie sämtliche relevanten Daten Ihres Vertreters,
                um ihn bei der KV zu melden.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- fifth sectoin button --> */}
        <div className="fifth-home-section-body-end d-flex justify-content-center align-items-center my-5">
          <button className="fifth-home-section-btn">
            Ich möchte KV-Dienste abgeben
          </button>
        </div>
      </div>
    </div>
  );
}

export default homefifithsection;
