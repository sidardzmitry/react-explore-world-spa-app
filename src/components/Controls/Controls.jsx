import { useState, useEffect } from "react";

import { Search } from "./Search/Search";
import { SelectCustom } from "./SelectCustom/SelectCustom";

import styles from "./Controls.module.css";

const options = [
  { value: "Africa", label: "Africa" },
  { value: "America", label: "America" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    const regionValue = region?.value || "";
    onSearch(search, regionValue);

    // eslint-disable-next-line
  }, [search, region]);

  return (
    <div className={styles.controls__wrapper}>
      <Search search={search} setSearch={setSearch} />
      <SelectCustom
        options={options}
        region={region}
        setRegion={setRegion}
        isClearable
        isSearchable={false}
        placeholder="Search region"
      />
    </div>
  );
};

export { Controls };
