import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import './Layout.css'

function Layout() {
    return (
<div>
<nav>
<ul className='nav'>
<li>
<Link to="/" className='nav-item'>Home</Link>
</li>
<li>
<Link to="/About" className='nav-item'>About</Link>
</li>
<li>
<Link to="/search" className='nav-item'>Search</Link>
</li>

</ul>
</nav>
<hr/>
<Outlet / >
</div>
);
}

export default Layout;