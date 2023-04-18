import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <img  className='logo' src="https://assets.stickpng.com/thumbs/580b585b2edbce24c47b2d44.png" alt='logotipe'></img>
                </div>
                <div className="title">
                    <h1>World wide</h1>
                </div>
                <ul className='header-nav'>
                    <li className='nav-item'>
                        <a href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="/">Base</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;