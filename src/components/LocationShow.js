import React, { useState, useEffect } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const LocationShow = () => {
  const [map, setMap] = useState(null);
  const [place, setPlace] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [userMarker, setUserMarker] = useState(null);

  useEffect(() => {
    const indiaCenter = [20.5937, 78.9629];
    const mapInstance = L.map('map').setView(indiaCenter, 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapInstance);

    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (map && coordinates) {
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      L.marker(coordinates).addTo(map); // Add the coordinates marker.
    }
  }, [map, coordinates]);

  useEffect(() => {
    if (map && userMarker) {
      map.removeLayer(userMarker);
    }

    if (coordinates) {
      const userMarkerInstance = L.marker(coordinates, {
        icon: L.divIcon({
          className: 'custom-icon',
          html: '<div style="background-color: red; width: 20px; height: 20px; border-radius: 50%;"></div>',
        }),
      }).addTo(map);

      setUserMarker(userMarkerInstance);
    }
  }, [map, coordinates, userMarker]);

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleLocate = () => {
    const accessToken = 'pk.eyJ1Ijoia291c2lja2tyaXNobmEiLCJhIjoiY2xuMHcyZmh4MDU0aTJpcXFocDlwOWg5ZyJ9.hHHZeFVf7n7i0BGQnQewDw';
    const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      place
    )}.json?access_token=${accessToken}&country=IN`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.features && data.features.length > 0) {
          const result = data.features[0];
          const [lng, lat] = result.center;
          setCoordinates([lat, lng]);
        } else {
          alert('Location not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching location data', error);
      });
  };

  useEffect(() => {
    // Example coordinates for Tambaram, Kanchipuram, Chrompet, and Poonamallee
    const preMarkedPlaces = [
      [12.9279, 80.1265], // Tambaram
      [12.8342, 79.7036], // Kanchipuram
      [12.9528, 80.1403], // Chrompet
      [13.0428, 80.1625], // Poonamallee
    ];

    if (map) {
      preMarkedPlaces.forEach((coords) => {
        L.marker(coords, {
          icon: L.divIcon({
            className: 'custom-icon',
            html: '<div style="background-color: red; width: 20px; height: 20px; border-radius: 50%;"></div>',
          }),
        }).addTo(map);
      });
    }
  }, [map]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center items-center p-4 bg-gray-100">
        <input
          type="text"
          placeholder="Enter a city or place in India"
          value={place}
          onChange={handlePlaceChange}
          className="p-2 rounded border border-gray-300"
        />
        <button onClick={handleLocate} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Locate
        </button>
      </div>
      <div id="map" className="flex-grow"></div>
    </div>
  );
};

export default LocationShow;
