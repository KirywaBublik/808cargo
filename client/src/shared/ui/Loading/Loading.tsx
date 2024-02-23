import { TailSpin } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <TailSpin
        visible={true}
        height="120"
        width="120"
        color="#FFF"
        ariaLabel="tail-spin-loading"
        radius="2"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
