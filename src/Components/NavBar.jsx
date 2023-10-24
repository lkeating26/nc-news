import { Link } from 'react-router-dom';

export default function NavBar() {
    
  return (
    <nav className="nav-bar">
        <Link to="/" ><p className='nav-btn'>Home</p></Link>
        <p className='nav-btn'>Topics</p>
        <p className='nav-btn'>Create Article</p>
    </nav>
  )
}
