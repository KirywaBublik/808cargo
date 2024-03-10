import { scrollTo } from "@shared/lib";
import { plane } from "@shared/assets";

export const BtnTopPage = () => {
  return (
    <div className="cursor-pointer fixed bottom-10 right-10">
      <button
        onClick={() => {
          scrollTo();
        }}
      >
        <img
          className="w-10 h-10"
          src={plane}
          alt="btnUp"
        />
      </button>
    </div>
  );
};
