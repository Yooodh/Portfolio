import { Link } from 'react-router-dom';
import '../index.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='menu'>
        <Link to='/' className='link'>
          Header
        </Link>

        <Link to='Menu2.js' className='link'>
          메뉴2
        </Link>

        <Link to='Menu3.js' className='link'>
          메뉴3
        </Link>

        <Link to='Footer.js' className='link'>
          Footer
        </Link>
      </div>
    </div>
  );
}
