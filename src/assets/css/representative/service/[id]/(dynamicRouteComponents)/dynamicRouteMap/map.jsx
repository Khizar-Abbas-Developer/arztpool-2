import React from 'react';

function MapComponent() {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="Google Map"
          width="1200"
          height="256"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
        <a href="https://textcaseconvert.com/"></a>
        <br />
        <a href="https://online-timer.me/"></a>
        <br />
        <style>{`.mapouter{position: relative;text-align: right;height: 256px;width: 1200px;}`}</style>
        <a href="https://www.embedmaps.co">google maps on website</a>
        <style>{`.gmap_canvas{overflow: hidden;background: none !important;height: 256px;width: 1200px;}`}</style>
      </div>
    </div>
  );
}

export default MapComponent;
