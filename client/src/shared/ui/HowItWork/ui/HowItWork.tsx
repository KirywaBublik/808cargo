import { cards } from "../model/constants";
import { CardItem } from "./Card/Card";
import { Slider } from "./Slider/Slider";

export const HowItWork = () => {
  return (
    <div className="bg-white text-bg">
      <div className="max-w-[1170px] mx-auto py-[110px]">
        <div className="flex justify-between gap-8 items-center pb-[79px] border-b-2 border-dashed">
          <Slider />
          <div>
            <h2 className="text-blue-700 uppercase text-sm font-medium mb-4">
              Как это работает
            </h2>
            <p className="uppercase text-5xl font-bold mb-5">
              Упростите опыт доставки с помощью
              нашего пошагового процесса
            </p>
            <p className="text-borderInput  font-normal text-lg ">
              В Cargo мы верим в предоставление
              нашим клиентам персонализированных и
              эффективных логистических решений,
              которые отвечают их уникальным
              потребностям. Обладая многолетним
              опытом и командой экспертов, мы
              стремимся расширить возможности
              вашего бизнеса с помощью
              бесперебойных перевозок.
            </p>
          </div>
        </div>
        <div className=" flex justify-between mt-[71px]">
          {cards.map((elem, index) => (
            <CardItem key={index} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};
