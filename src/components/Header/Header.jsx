import {useState, useEffect} from 'react';
import {BsMoonFill, BsMoon} from 'react-icons/bs';
import { Link } from 'react-router-dom';


import styles from './Header.module.css';

const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])
    return(
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.header__row}>
                    <div className={styles.header__col}>
                        <Link to='/' className={styles.header__title}>Explore the world</Link>
                    </div>
                    <div className={styles.header__col} onClick={toggleTheme}>
                    {theme === 'light' ? (<BsMoonFill />) : (<BsMoon />)}
                        <h5 className={styles.header__subtitle}>Light Theme</h5>
                    </div>
                </div>
            </div>
        </header>
    )
}

export {Header};