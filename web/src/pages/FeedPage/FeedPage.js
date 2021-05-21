// import { Link, routes } from '@redwoodjs/router'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useState } from 'react'
import { useMapLocation } from 'src/layouts/AppLayout'
import Map from 'src/components/Map'

const FeedPage = () => {
  const { location, setLocation } = useMapLocation()
  const [lat, setLat] = useState(40.86069)
  const [long, setLong] = useState(-74.07279)

  console.log(location)
  const onSubmit = (data) => {
    setLocation(data.location)
  }

  let mapData = {
    center: { lat: lat, lng: long },
    zoom: 11,
  }

  return (
    <>
      <div className="SearchBar">
        <Form onSubmit={onSubmit}>
          <TextField name="location" />
          <Submit>Search</Submit>
        </Form>
        <button onClick={() => console.log(location)}>
          Log location state
        </button>
      </div>
      <Map mapData={mapData} />
      <div className="FeedContainer"></div>
    </>
  )
}

export default FeedPage
