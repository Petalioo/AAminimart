import React, { useState, useRef, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { storeLocations, assets } from '../assets/assets'

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom marker icon using your downloaded PNG
const customIcon = new L.Icon({
  iconUrl: assets.locationicon, // Your downloaded location icon
  iconSize: [32, 32], // Adjust size as needed
  iconAnchor: [16, 32], // Center bottom of icon
  popupAnchor: [0, -32], // Popup appears above icon
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
})

// Fallback: Standard red marker (if your PNG doesn't load)
const fallbackIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
})

// Simple CSS-based marker (always works as last resort)
const simpleIcon = new L.DivIcon({
  className: 'simple-red-marker',
  html: `<div style="
    background-color: #FF5757; 
    width: 20px; 
    height: 20px; 
    border-radius: 50%; 
    border: 3px solid white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: white;
    font-weight: bold;
  ">📍</div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
})

const StoreLocation = () => {
  const [selectedStore, setSelectedStore] = useState(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [iconToUse, setIconToUse] = useState(customIcon) // Start with custom icon
  const mapRef = useRef()

  // Use imported store locations
  const stores = storeLocations

  // Center of Sorsogon City - updated to center around main store location
  const centerCoordinates = [12.978312, 123.985761]
  
  // Smart icon loading - test if custom icon loads, fallback if not
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      // Custom icon loaded successfully
      setIconToUse(customIcon)
      console.log('✅ Custom location icon loaded successfully!')
    }
    img.onerror = () => {
      // Custom icon failed, use fallback
      console.warn('⚠️ Custom icon failed to load, using fallback icon')
      setIconToUse(fallbackIcon)
    }
    img.src = assets.locationicon
  }, [])

  const handleStoreSelect = (store) => {
    setSelectedStore(store)
    if (mapRef.current && mapLoaded) {
      const map = mapRef.current
      map.setView(store.coordinates, 16, {
        animate: true,
        pan: {
          duration: 1
        }
      })
    }
  }

  const handleMapReady = () => {
    setMapLoaded(true)
  }

  const handleDirections = (store) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates[0]},${store.coordinates[1]}`
    window.open(url, '_blank')
  }



  return (
    <div className="py-4 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-12 xl:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        
        <div className="text-center mb-4 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 px-2">
            Find Your Nearest <span className="text-red-500">A&A MiniMart</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-xl mx-auto px-4">
            Visit our convenient locations in Sorsogon City for fast service and fresh products
          </p>
        </div>
        

        {/* Map and Sidebar Container */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-4 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
            
            {/* Minimized Sidebar - Store List */}
            <div className="lg:col-span-1 bg-white border-r border-gray-200 overflow-y-auto">
              <div className="p-2 sm:p-4">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">Store Locations</h3>
                  <span className="bg-red-100 text-red-600 text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-medium">
                    {stores.length} stores
                  </span>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  {stores.map((store) => (
                                          <div
                        key={store.id}
                        onClick={() => handleStoreSelect(store)}
                        className={`p-2 sm:p-3 rounded-md sm:rounded-lg border cursor-pointer transition-all duration-300 hover:shadow-sm ${
                          selectedStore?.id === store.id
                            ? 'border-red-500 bg-red-50 shadow-sm'
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                      >
                        {/* Store Header */}
                        <div className="flex items-start justify-between mb-1 sm:mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 mb-0.5 sm:mb-1">
                              <h4 className="font-medium text-gray-800 text-xs sm:text-sm truncate">
                                {store.name.replace('A&A MiniMart - ', '')}
                              </h4>
                              {store.isMainBranch && (
                                <span className="bg-red-500 text-white text-xs px-1 sm:px-1.5 py-0.5 rounded-full font-medium flex-shrink-0">
                                  Main
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-xs truncate">{store.address}</p>
                          </div>
                        
                        <div className="flex items-center text-red-500 ml-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>

                      {/* Compact Store Info */}
                      <div className="space-y-1 text-xs">
                        <div className="flex items-center text-gray-600">
                          <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="truncate">{store.hours}</span>
                        </div>
                        
                        <div className="flex items-center text-gray-600">
                          <svg className="w-3 h-3 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <span className="truncate">{store.phone}</span>
                        </div>

                        {/* Store Description */}
                        <div className="mt-2">
                          <p className="text-gray-600 text-xs leading-relaxed">
                            {store.description}
                          </p>
                        </div>
                      </div>

                      {/* Compact Action Buttons */}
                      <div className="mt-2 sm:mt-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDirections(store)
                          }}
                          className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-1.5 px-2 rounded transition-colors"
                        >
                          Directions
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Compact Contact Info */}
                <div className="mt-4 sm:mt-6 p-2 sm:p-3 bg-gray-50 rounded-md sm:rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-1 sm:mb-2 text-xs sm:text-sm">Need Help?</h4>
                  <div className="space-y-0.5 sm:space-y-1 text-xs">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span className="truncate">info@aaminimart.com</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>+63 919 123 4569</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container - Now taking more space */}
            <div className="lg:col-span-3 relative">
              <MapContainer
                center={centerCoordinates}
                zoom={14}
                style={{ height: '400px', width: '100%' }}
                ref={mapRef}
                whenReady={handleMapReady}
                className="z-0"
              >
                <TileLayer
                  attribution=''
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {stores.map((store) => (
                  <Marker
                    key={store.id}
                    position={store.coordinates}
                    icon={iconToUse}
                    eventHandlers={{
                      click: () => setSelectedStore(store)
                    }}
                  >
                    <Popup className="custom-popup">
                      <div className="p-2 min-w-[250px]">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-gray-800 text-sm">
                            {store.name}
                          </h3>
                          {store.isMainBranch && (
                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              Main
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-1 text-xs text-gray-600 mb-3">
                          <p className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {store.fullAddress}
                          </p>
                          <p className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {store.hours}
                          </p>
                          <p className="flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            {store.phone}
                          </p>
                        </div>

                        <div>
                          <button
                            onClick={() => handleDirections(store)}
                            className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-1.5 px-2 rounded transition-colors"
                          >
                            Directions
                          </button>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreLocation