import { cards } from "../model/constants";
import { CardItem } from "./Card/Card";
import { Slider } from "./Slider/Slider";
import { useTranslation } from "react-i18next";

export const HowItWork = () => {
  const { t } = useTranslation("howItWork");
  return (
    <div className="bg-white text-bg">
      <div className="max-w-[1170px] mx-auto py-[110px]">
        <div className="flex justify-between gap-8 items-center pb-[79px] border-b-2 border-dashed">
          <Slider />
          <div>
            <h2 className="text-blue-700 uppercase text-sm font-medium mb-4">
              {t("Как мы работаем")}
            </h2>
            <p className="text-bg font-normal text-2xl ">
              {t(
                "808cargo работает с клиентами в три простых этапа. В начале, вы связываетесь с нашим представителем по телефону или через форму обратной связи. После обсуждения особенностей груза, вы оформляете заявку через нашего менеджера и оплачиваете услугу. На этом всё — остальную работу мы полностью берём на себя. При необходимости, мы можем запросить у вас дополнительные документы. В любой момент вы можете узнать местоположение груза.",
              )}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-[71px]">
          {cards.map(
            (
              { text, step, image, title, alt },
              index,
            ) => (
              <CardItem
                key={index}
                step={t(`${step}`)}
                image={image}
                title={title}
                text={t(`${text}`)}
                alt={alt}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};
