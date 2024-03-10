import {
  Button,
  SliderAboutUsSlim,
} from "@shared/ui";
import { useNavigate } from "react-router-dom";

export const AboutUsSlim = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-28">
      <div className="max-w-[1170px] my-0 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-about space-medium-14">
              О нас
            </p>
            <div className="pt-5 max-w-2xl text-bg roboto-font">
              808cargo — логистическая компания,
              занимающаяся перевозками из
              Шеньчженя, мировой столицы
              электроники, в любую точку России.
              Помимо логистики любого типа, мы
              организуем консультации по вопросам
              грузоперевозок и решаем возникающие
              проблемы с контрагентами. На данный
              момент у нас за плечами более 12 лет
              работы. В нашем портфолио —
              сотрудничество как с небольшими
              предприятиями уровня ИП, так и с
              крупными ритейлерами. Экспедируем
              груз на всех этапах, от загрузки в
              Китае до выгрузки на объекте
              заказчика.
            </div>
            <div className="pt-5 max-w-2xl text-borderInput roboto-font">
              Отдельно отметим наш опыт работы с
              электроникой и бытовой техникой.
              Наши специалисты в КНР имеют
              техническую квалификацию, что
              позволяет на этапе приёмки
              распознать брак и защитить вас от
              переплаты за некачественный товар.
            </div>
            <Button
              className="mt-5"
              onClick={() => {
                navigate("/about");
              }}
            >
              Узнать больше
            </Button>
          </div>
          <div>
            <SliderAboutUsSlim />
          </div>
        </div>
      </div>
    </div>
  );
};
