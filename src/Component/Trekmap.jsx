import {MapContainer, Marker, TileLayer, Popup, Tooltip} from "react-leaflet";
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "./Trekmap.css";

const trekIcon = new L.icon({
    iconUrl : 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    iconRetinaUrl : 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    shadowUrl : 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    popupAnchor: [1. -34],
});

const treks = [
    {
        name: 'Rajgad Fort',
        position: [18.2466, 73.6822],
        description: 'Explore the historic fort near Pune.',
    },  
    {
        name: 'Torna Fort',
        position: [18.2763, 73.6220],
        description: 'Discover the rugged Sahyadri mountain trails.',
    },
    {
         name: 'Harishchandragad',
        position: [19.3889, 73.7744],
        description: 'Experience the famous Konkan Kada cliffs.',
    },
    {
        name: 'Kalsubai Peak',
        position: [19.6012, 73.7108],
        description: 'Explore Maharashtra’s highest peak.',
    }
]


function trekMap() {

    return (
        <>
        <section className="trekmap">
              <div className="map-heading">
                <p className="map-tagline">
                    EXPLORE THE SAHYADRI
                </p>
                <h2>
                    Find Your Next Adventure
                </h2>
                <span>Discover trekking destination across Maharashtra.
                </span>
            </div>

            {/* <div className="map-container">
                <iframe 
                title="Location for trekking"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.9%2C18.0%2C74.5%2C20.0&layer=mapnik" frameborder="0"
                width="100%"
                height="450"
                style={{border: 0}}
                loading="lazy"
                
                ></iframe>
            </div> */}




            <MapContainer
            center={[18.95, 73.70]}
            zoom={8}
            scrollWheelZoom={false}
            className="trek-map">
            
                   <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                      {treks.map((trek) => (
                        <Marker
                            key={trek.name}
                            position={trek.position}
                            icon={trekIcon}
                        >
                                <Tooltip
                                    direction="right"
                                    offset={[12, -5]}
                                    permanent={false}
                                    >
                                    {trek.name}
                                </Tooltip>
                            <Popup>
                            <strong>{trek.name}</strong>
                            <br />
                            {trek.description}
                            </Popup>
                        </Marker>
                        ))}

            </MapContainer>
        </section>
        </>
    )
}

export default trekMap;