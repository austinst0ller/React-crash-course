import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users/ronaldo">Ronaldo</Link>
      <Link to="/users/br4gg">David Bragg</Link>
      <Link to="/users/donlleo99">DonLLEO99</Link>
    </nav>
  );
}

export default Nav