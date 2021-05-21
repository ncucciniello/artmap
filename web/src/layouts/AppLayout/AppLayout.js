import { Link, routes } from '@redwoodjs/router'
const MapLocationContext = React.createContext()

const MapLocationProvider = ({ children }) => {
  const [location, setLocation] = React.useState()
  return (
    <MapLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </MapLocationContext.Provider>
  )
}

export const useMapLocation = () => {
  return React.useContext(MapLocationContext)
}

const AppLayout = ({ children }) => {
  return (
    <MapLocationProvider>
      <header>
        <h1>
          <Link to={routes.home()}>Art Map</Link>
        </h1>
        <nav>
          <ul>
            <li>Log In</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </MapLocationProvider>
  )
}

export default AppLayout
