import './App.css';
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

function App() {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    if (map.current) return // initialize map only once
    // @ts-expect-error Wrong
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/brandwidth/clsvrnpk9005k01qu2cii0zb1',
      latitude: 51.5081,
      longitude: -0.1248,
    })
  })

  return (
    <div className="map-container">
      {/* Fake Nav */}
      <div className="fake-navbar" />
      <div className="map" ref={mapContainer} />
    </div>
  )
}

export default App;
