import { Link } from 'react-router-dom';
import '../index.css';

export default function Header() {
  return (
    <div className='header'>
      <h1>
        <Link to='/'>메인 타이틀</Link>
      </h1>

      <div className='menu'>
        <Link to='' className='link'>
          메뉴1
        </Link>

        <Link to='' className='link'>
          메뉴2
        </Link>

        <Link to='' className='link'>
          메뉴3
        </Link>

        <Link to='' className='link'>
          메뉴4
        </Link>
      </div>
    </div>
  );
}
