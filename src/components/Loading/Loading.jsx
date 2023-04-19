import { ProgressBar } from "react-loader-spinner";

const Loading = () => {
  return (
    <>
      <ProgressBar
        height="80"
        width="100%"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="var(--color-text)"
        barColor="#9400D3"
      />
    </>
  );
};

export { Loading };
