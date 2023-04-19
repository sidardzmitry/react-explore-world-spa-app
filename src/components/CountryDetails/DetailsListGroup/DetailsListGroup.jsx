import styles from './DetailsListGroup.module.css';


const DetailsListGroup = ({
    nameCountry,
    continent = nameCountry.continents,
    population = nameCountry.population,
    region = nameCountry.region,
    subRegion = nameCountry.subregion,
    capital = nameCountry.capital,
    timeZone = nameCountry.timezones,
    topLevelDomains = nameCountry.tld,
    languages = nameCountry.languages,
    getValueLanguages = Function.prototype,
}) => {
    return(
        <div className={styles.details__group}>
          <ul className={styles.details__list}>
            <li className={styles.details__item}>
              <b>Continents: </b>
              {continent}
            </li>
            <li className={styles.details__item}>
              <b>Population: </b>
              {population}
            </li>
            <li className={styles.details__item}>
              <b>Region: </b>
              {region}
            </li>
            <li className={styles.details__item}>
              <b>Sub Region: </b>
              {subRegion}
            </li>
            <li className={styles.details__item}>
              <b>Capital: </b>
              {capital}
            </li>
          </ul>
          <ul className={styles.details__list}>
            <li className={styles.details__item}>
              <b>Timezone: </b>
              {timeZone}
            </li>
            <li className={styles.details__item}>
              <b>Top Level Domain: </b>
              {topLevelDomains}
            </li>
            <li className={styles.details__item}>
              <b>Languages: </b>
              {getValueLanguages()}
            </li>
          </ul>
        </div>
    )
}

export {DetailsListGroup};