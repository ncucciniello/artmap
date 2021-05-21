import { Link, routes } from '@redwoodjs/router'

const AppLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Art Map</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.feed()}>Feed</Link>
            </li>
            <li>Log In</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AppLayout
