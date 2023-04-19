import { CountryCard } from "../CountryCard/CountryCard";

import styles from "./CountryList.module.css";

const CountryList = ({ country, filteredCountry }) => {
  return (
    <section className={styles.country__list}>
      {filteredCountry.map((item) => {
        const countryInfo = {
          img: item.flags.png,
          name: item.name.official,
          info: [
            {
              title: "Population",
              description: item.population.toLocaleString(),
            },
            {
              title: "Region",
              description: item.region,
            },
            {
              title: "Capital",
              description: item.capital,
            },
          ],
        };
        return <CountryCard key={item.name.official} {...countryInfo} />
    })}
    </section>
  );
};

export { CountryList };
