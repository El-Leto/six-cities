import React, { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import PropTypes from 'prop-types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import hotelProp from '../app/hotel.prop';

const defaultIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 30],
});

const activeIcon = L.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [30, 40],
  iconAnchor: [15, 30],
});

function MapPage({ city, hotels, activeCard }) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    const markers = L.layerGroup();

    if (map) {
      markers.addTo(map);
      hotels.forEach(({ location: { latitude, longitude }, id }) => {
        L
          .marker(
            {
              lat: latitude,
              lng: longitude,
            },
            {
              icon:
                (id === activeCard.id)
                  ? activeIcon
                  : defaultIcon,
            })
          .addTo(markers);
      });

      map.flyTo(
        [hotels[0].city.location.latitude, hotels[0].city.location.longitude],
        hotels[0].city.location.zoom,
      );
    }

    return () => {
      markers.clearLayers();
    };

  }, [map, hotels, activeCard]);


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
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  hotels: PropTypes.arrayOf(hotelProp).isRequired,
  activeCard: PropTypes.object.isRequired,
};

export default MapPage;
