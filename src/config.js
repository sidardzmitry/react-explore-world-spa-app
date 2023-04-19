import { API_URL_BASE } from "./api";

const ALL_COUNTRIES = API_URL_BASE + "all?fields=name,capital,flags,population,region";

const searchByCountry = (name) => API_URL_BASE + "name/" + name;

const filterByCode = (codes) => API_URL_BASE + "alpha?codes=" + codes;

export { ALL_COUNTRIES, searchByCountry, filterByCode };
