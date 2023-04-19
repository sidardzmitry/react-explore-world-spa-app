import styles from "./CountryDetails.module.css";
import { DetailsBorders } from "./DetailsBorders/DetailsBorders";
import { DetailsFlag } from "./DetailsFlag/DetailsFlag";
import { DetailsListGroup } from "./DetailsListGroup/DetailsListGroup";


const CountryDetails = ({
  nameCountry,
  navigate,
}) => {


  const newNameCountry = Object.entries(nameCountry);

  const getValueFlag = () => {
    for (const [key, value] of newNameCountry) {
      if (key === "flags") {
        return value.png;
      }
    }
  };

  const getValueTitle = () => {
    for (const [key, value] of newNameCountry) {
      return value.common;
    }
  };

  const getValueLanguages = () => {
    for (const [key, value] of newNameCountry) {
      if (key === "languages") {
        return Object.values(value);
      }
    }
  };

  return (
    <div className={styles.details}>
      <DetailsFlag nameCountry={nameCountry} getValueFlag={getValueFlag} newNameCountry={newNameCountry} />
      <div className={styles.details__body}>
        <h1 className={styles.details__title}>{getValueTitle()}</h1>
        <DetailsListGroup nameCountry={nameCountry} getValueLanguages={getValueLanguages} />
        <DetailsBorders nameCountry={nameCountry} navigate={navigate} />
      </div>
    </div>
  );
};

export { CountryDetails };
