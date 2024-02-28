import { star } from "@shared/assets";
import "./style.css";
import { reviews } from "@shared/ui/Reviews/model/constants.ts";
export const Reviews = () => {
  return (
    <div className="bg-bgReviews">
      <div className="max-w-[1170px] py-28 mx-auto">
        <p className="space-medium-14 text-about">
          Отзывы
        </p>
        <div className="flex justify-between items-center flex-wrap gap-20 text-bg">
          <p className="space-bold-font text-5xl max-w-xl">
            Что наши клиенты говорят про нас
          </p>
          {reviews.map(({ id, name, text }) => (
            <div
              key={id}
              className="w-[506px] h-[282px] bg-white rounded-xl flex flex-col gap-6 p-10"
            >
              <div>
                <img
                  className="style"
                  src={star}
                  alt=""
                />
              </div>
              <p className="w-[444px] h-[88px] roboto-font">
                {text}
              </p>
              <p className="space-medium-18 py-7">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
