import { buttonUp } from "@shared/assets";
import { scrollTo } from "@shared/lib";
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
          src={buttonUp}
          alt="btnUp"
        />
      </button>
    </div>
  );
};
