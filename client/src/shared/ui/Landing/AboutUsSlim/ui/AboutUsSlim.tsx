import {
  Button,
  SliderAboutUsSlim,
} from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "@shared/assets/styles/adaptive.css";

export const AboutUsSlim = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("aboutUsSlim");
  return (
    <div className="bg-white py-28">
      <div className="max-w-[1170px] my-0 mx-auto">
        <div className="aboutUsSlim flex justify-between items-center">
          <div>
            <p className="text-about space-medium-14 abobut">
              {t("О нас")}
            </p>
            <div className="pt-5 max-w-lg text-bg roboto-font">
              {t(
                "808cargo — логистическая компания, занимающаяся перевозками из Шеньчженя, мировой столицы электроники, в любую точку России. Помимо логистики любого типа, мы организуем консультации по вопросам грузоперевозок и решаем возникающие проблемы с контрагентами. На данный момент у нас за плечами более 12 лет работы. В нашем портфолио — сотрудничество как с небольшими предприятиями уровня ИП, так и с крупными ритейлерами. Экспедируем груз на всех этапах, от загрузки в Китае до выгрузки на объекте заказчика.",
              )}
            </div>
            <div className="pt-5 max-w-lg text-borderInput roboto-font">
              {t(
                "Отдельно отметим наш опыт работы с электроникой и бытовой техникой. Наши специалисты в КНР имеют техническую квалификацию, что позволяет на этапе приёмки распознать брак и защитить вас от переплаты за некачественный товар.",
              )}
            </div>
            <Button
              className="mt-5 aboutUsSlimBtn"
              onClick={() => {
                navigate("/about");
              }}
            >
              {t("Узнать больше")}
            </Button>
          </div>
          <SliderAboutUsSlim />
        </div>
      </div>
    </div>
  );
};
