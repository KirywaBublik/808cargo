import { cards } from "../model/constants";
import { CardItem } from "./Card/Card";
export const OurServices = () => {
  return (
    <div className="bg-bgReviews text-bg">
      <div className="max-w-[1170px] mx-auto py-[110px] flex flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="text-blue-800 mb-3">
            НАШИ СЕРВИСЫ
          </h2>
          <p className="text-5xl font-bold text-center uppercase">
            ЭФФЕКТИВНАЯ И НАДЕЖНАЯ <br />
            ДОСТАВКА С БЫСТРЫМ ХОДОМ
          </p>
        </div>
        <div className="flex flex-wrap justify-between">
          {cards.map((elem, index) => (
            <CardItem {...elem} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
