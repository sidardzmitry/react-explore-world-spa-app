import Select from "react-select";
import styles from "./SelectCustom.module.css";

const SelectCustom = ({ options, region, setRegion, placeholder, isClearable, isSearchable }) => {

  return (
    <>
      <Select
        options={options}
        placeholder={placeholder}
        isClearable={isClearable}
        isSearchable={isSearchable}
        value={region}
        onChange={setRegion}
        className={styles.select}
        styles=
        {{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: 'var(--color-ui)',
            color: "var(--color-ui)",
            borderRadius: "var(--bradius)",
            padding: "0.25rem",
            border: "none",
            boxShadow: "var(--shadow)",
            height: "50px",
            cursor: "pointer",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            cursor: "pointer",
            boxShadow: 'var(--shadow)',
            color: "var(--color-text)",
            backgroundColor: state.isSelected
              ? "var(--color-bg)"
              : "var(--color-ui)",
          }),
        }}
      >
        
      </Select>
    </>
  );
};

export { SelectCustom };
