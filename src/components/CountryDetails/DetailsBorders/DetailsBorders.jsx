import styles from "./DetailsBorders.module.css";
import { Button } from "../../UI/Button/Button";
import axios from "axios";
import {filterByCode} from '../../../config';
import {useState, useEffect} from 'react';

const DetailsBorders = ({ nameCountry, borders = nameCountry.borders, navigate }) => {
  const [neighbors, setNeighbors] = useState([]);


  useEffect(() => {
      axios
      .get(filterByCode(borders))
      .then(({data}) => setNeighbors(data.map(el => el)))

  }, [borders]);

  return (
    <div className={styles.details__borders}>
      <h3 className={styles.borders__title}>Border countries: </h3>
      {borders?.length ? (
        <ul className={styles.borders__list}>
          {borders.map((el) => (
            <Button key={el} className={styles.borders__item} onClick={() => navigate(`/country/${el}`)}>{el}</Button>
          ))}
        </ul>
      ) : (
        <h4>No neighboring countries found here</h4>
      )}
    </div>
  );
};

export { DetailsBorders };
