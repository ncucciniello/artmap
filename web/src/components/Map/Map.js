import GoogleMapReact from 'google-map-react'

const Map = (props) => {
  console.log(props.mapData.center)
  return (
    <div style={{ height: '500px', width: '500px' }}>
      <GoogleMapReact
        defaultCenter={props.mapData.center}
        defaultZoom={props.mapData.zoom}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
