import styles from './Main.module.css';

const Main = ({children}) => {
    return(
        <main className={styles.wrapper}>
            <div className='container'>
                {children}
            </div>
        </main>
    )
}

export {Main};