// import { Link, routes } from '@redwoodjs/router'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useMapLocation } from 'src/layouts/AppLayout'
import { navigate, routes } from '@redwoodjs/router'

const HomePage = () => {
  const { setLocation } = useMapLocation()

  const onSubmit = (data) => {
    console.log(data)
    setLocation(data.location)
    navigate(routes.feed())
  }

  return (
    <>
      <h1>Enter A City</h1>
      <Form onSubmit={onSubmit}>
        <TextField name="location" />
        <Submit>Search</Submit>
      </Form>
    </>
  )
}

export default HomePage
