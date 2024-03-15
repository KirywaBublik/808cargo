import { logo } from "@/shared/assets";
import "@shared/assets/styles/adaptive.css";
export const Seporator = () => {
  const array = [1, 2, 3, 4, 5];
  window.innerWidth <= 768 &&
    array.splice(array.length - 2, 2);

  window.innerWidth <= 465 &&
    array.splice(array.length - 3, 2);

  return (
    <div className="bg-bgReviews w-full">
      <div className="max-w-[1170px] mx-auto py-[101px] flex justify-between sep">
        {array.map((_, index) => (
          <img
            key={index}
            className="max-w-[200px]"
            src={logo}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
