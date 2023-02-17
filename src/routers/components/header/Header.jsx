
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  
  return (
    <div id="header">
      <nav className='menu'>
        <ul>           
            <li>
                <Link to={"/galaxies"}>Galaxies</Link>
            </li>
            <li>
                <Link to={"/starts"}>Starts</Link>
            </li>
            <li>
                <Link to={"/"} id="return">Return</Link>
            </li>
            <li>
                <Link to={"/planets"}>Planets</Link>
            </li>
            <li>
                <Link to={"/moons"}>Moons</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
