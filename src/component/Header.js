import { Link } from 'react-router-dom';
import '../index.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='menu'>
        <Link to='/' className='link'>
          Header
        </Link>

        <Link to='Menu2' className='link'>
          메뉴2
        </Link>

        <Link to='Menu3' className='link'>
          메뉴3
        </Link>

        <Link to='Footer' className='link'>
          Footer
        </Link>
      </div>
    </div>
  );
}
