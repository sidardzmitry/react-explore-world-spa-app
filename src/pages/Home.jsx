import { useState, useEffect } from "react";
import axios from "axios";

import { ALL_COUNTRIES } from "../config";
import { CountryList } from "../components/Main/CountryList/CountryList";
import { Controls } from "../components/Controls/Controls";
import { Loading } from "../components/Loading/Loading";
import { Error } from "../components/Error/Error";

const Home = ({ country, setCountry }) => {
  const [filteredCountry, setFilteredCountry] = useState(country);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = (search, region) => {
    let newCountry = [...country];

    if (region) {
      newCountry = newCountry.filter((el) => el.region.includes(region));
    }

    if (search) {
      newCountry = newCountry.filter((el) =>
        el.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountry(newCountry);
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    if (!country.length)
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => {
          setCountry(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    setLoading(false);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSearch();

    setLoading(false);
    // eslint-disable-next-line
  }, [country]);
  return (
    <>
      <Controls onSearch={handleSearch} />
      {loading ? (
        <Loading />
      ) : (
        <CountryList country={country} filteredCountry={filteredCountry} />
      )}
      {error && <Error />}
    </>
  );
};

export { Home };
