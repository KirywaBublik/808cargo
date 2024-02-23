import { buttonUp } from "@shared/assets";
export const BtnTopPage = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="cursor-pointer fixed bottom-10 right-10">
      <button
        onClick={() => {
          scrollTo();
        }}
      >
        <img
          className="w-10 h-10"
          src={buttonUp}
          alt="btnUp"
        />
      </button>
    </div>
  );
};
