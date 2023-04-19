import styles from './DetailsFlag.module.css';

const DetailsFlag = ({getValueFlag = Function.prototype}) => {
    return(
        <div className={styles.details__image}>
            <img src={getValueFlag()} alt="images" className={styles.details__flag} />
        </div>
    )
}

export {DetailsFlag}