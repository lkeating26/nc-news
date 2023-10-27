import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { useContext } from 'react';

export default function NavBar() {
    
  const { user } = useContext(UserContext)

  return (
    <nav className="nav-bar">
        <Link to="/" ><p className='nav-btn'>Home</p></Link>
        <Link to="/articles" ><p className='nav-btn'>Articles</p></Link>
        <p className='nav-btn'>Topics</p>
        {user && <p className='nav-btn'>Create Article</p>}
    </nav>
  )
}
