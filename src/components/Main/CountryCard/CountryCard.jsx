import styles from './CountryCard.module.css';
import { useNavigate } from "react-router";

const CountryCard = ({img, name, info}) => {
    const navigate = useNavigate();

    return(
        <div className={styles.item} onClick={() => navigate(`/country/${name.toLowerCase()}`)}>
            <img className={styles.item__img} src={img} alt={name} />
            <div className={styles.item__info}>
                <h2 className={styles.item__title}>{name}</h2>
                <ul className={styles.item__list}>
                {info.map((el) => (
                    <li className={styles.list__item} key={el.title}>
                        <b>{el.title}: </b>{el.description}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export {CountryCard}