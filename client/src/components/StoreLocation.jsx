import React, { useState, useCallback, useMemo } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api'
import { storeLocations } from '../assets/assets'

// Libraries to load from Google Maps API
const libraries = ['places']

// Map container style
const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

// Custom map styles (optional - gives a clean look)
const mapStyles = [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }]
  }
]

// Map options with enhanced controls
const options = {
  styles: mapStyles,
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: true,        // Enable Street View
  mapTypeControl: true,           // Enable map type selector (satellite, terrain, etc.)
  mapTypeControlOptions: {
    style: window.google?.maps?.MapTypeControlStyle?.HORIZONTAL_BAR,
    position: window.google?.maps?.ControlPosition?.TOP_CENTER,
    mapTypeIds: [
      window.google?.maps?.MapTypeId?.ROADMAP,
      window.google?.maps?.MapTypeId?.SATELLITE,
      window.google?.maps?.MapTypeId?.HYBRID,
      window.google?.maps?.MapTypeId?.TERRAIN
    ]
  },
  streetViewControlOptions: {
    position: window.google?.maps?.ControlPosition?.LEFT_TOP
  },
  zoomControlOptions: {
    position: window.google?.maps?.ControlPosition?.RIGHT_CENTER
  },
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: window.google?.maps?.ControlPosition?.RIGHT_TOP
  },
  scaleControl: true,             // Show distance scale
  rotateControl: true,            // Enable rotation control
  clickableIcons: true,           // Make POI icons clickable
  gestureHandling: 'cooperative'  // Better mobile experience
}

const StoreLocation = () => {
  const [selectedStore, setSelectedStore] = useState(null)
  const [map, setMap] = useState(null)

  // Use imported store locations
  const stores = storeLocations

  // Center of Sorsogon City - updated to center around main store location
  const center = useMemo(() => ({
    lat: 12.978312,
    lng: 123.985761
  }), [])

  // Load Google Maps API
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE', // You'll need to add this
    libraries
  })

  const onLoad = useCallback((map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const handleStoreSelect = (store) => {
    setSelectedStore(store)
    if (map) {
      map.panTo({
        lat: store.coordinates[0],
        lng: store.coordinates[1]
      })
      map.setZoom(16)
    }
  }

  const handleDirections = (store) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates[0]},${store.coordinates[1]}`
    window.open(url, '_blank')
  }

  const handleMarkerClick = (store) => {
    setSelectedStore(store)
  }

  if (loadError) {
    return (
      <div className="py-4 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-12 xl:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 px-2">
              Find Your Nearest <span className="text-red-500">A&A MiniMart</span>
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-red-600 mb-4">Error loading Google Maps</p>
              <p className="text-gray-600">Please check your internet connection and try again.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="py-4 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-12 xl:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 px-2">
              Find Your Nearest <span className="text-red-500">A&A MiniMart</span>
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="animate-pulse">
                <div className="h-96 bg-gray-200 rounded-lg"></div>
              </div>
              <p className="text-gray-600 mt-4">Loading Google Maps...</p>
            </div>
          </div>
        </div>
      </div>
    )
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
            
            {/* Sidebar - Store List */}
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

            {/* Google Map Container */}
            <div className="lg:col-span-3 relative">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={options}
              >
                {/* Markers for each store */}
                {stores.map((store) => (
                  <Marker
                    key={store.id}
                    position={{
                      lat: store.coordinates[0],
                      lng: store.coordinates[1]
                    }}
                    onClick={() => handleMarkerClick(store)}
                    icon={{
                      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
                      scaledSize: new window.google.maps.Size(32, 32)
                    }}
                  />
                ))}

                {/* Info Window for selected store */}
                {selectedStore && (
                  <InfoWindow
                    position={{
                      lat: selectedStore.coordinates[0],
                      lng: selectedStore.coordinates[1]
                    }}
                    onCloseClick={() => setSelectedStore(null)}
                  >
                    <div className="p-2 min-w-[250px]">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-800 text-sm">
                          {selectedStore.name}
                        </h3>
                        {selectedStore.isMainBranch && (
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
                          {selectedStore.fullAddress}
                        </p>
                        <p className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {selectedStore.hours}
                        </p>
                        <p className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          {selectedStore.phone}
                        </p>
                      </div>

                      <div>
                        <button
                          onClick={() => handleDirections(selectedStore)}
                          className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-medium py-1.5 px-2 rounded transition-colors"
                        >
                          Directions
                        </button>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreLocation