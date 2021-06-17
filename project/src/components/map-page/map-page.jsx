import React, {useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import hotelProp from '../app/hotel.prop';

const CITY = [52.38333, 4.9];
const ZOOM = 12;

const icon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 40],
});


function MapPage({ hotels }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: CITY,
      zoom: ZOOM,
      zoomControl: false,
      marker: true,
    });

    map.setView(CITY, ZOOM);

    L
      .tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      })
      .addTo(map);

    const hotelsCoords = hotels.map(({ location: { latitude, longitude } }) => [
      latitude,
      longitude,
    ]);

    hotelsCoords.forEach((item) => {
      L
        .marker(item, { icon })
        .addTo(map);
    });

  }, [hotels]);


  return (
    <section
      className="cities__map map"
      style={{height: '100%'}}
      ref={mapRef}
    >
    </section>
  );
}

MapPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
};

export default MapPage;
