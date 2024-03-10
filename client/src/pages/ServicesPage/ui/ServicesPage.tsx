import { HrefBlock } from "@/feature/hrefBlock";
import { img, logic } from "@shared/assets";

const ServicesPage = () => {
  return (
    <div className="max-w-[1170px] my-0 mx-auto">
      <HrefBlock pathes={["Главная", "Услуги"]} />
      <p className="space-bold-font text-2xl text-center pt-10">
        На данный момент мы предлагаем 3 основных
        вида услуг
      </p>
      <div className="mt-10 mb-20 flex flex-col gap-6 space-medium-18">
        <div className="flex justify-between items-center">
          <div className="max-w-[400px] leading-snug">
            <p className="text-left space-bold-font pb-4">
              Доставка грузов
            </p>
            Основная деятельность нашей компании.
            Доставим грузы в срок до 14 дней из
            Шэньчженя в любой город РФ. Все
            возникающие по пути вопросы решаем
            самостоятельно. По первому требованию
            предоставляем данные о местоположении
            и статусе вашего товара. Загрузка в
            КНР и выгрузка на месте осуществляется
            нашими специалистами. На этапе приёмки
            груза осуществляем контроль качества
            продукции, при возникновении претензий
            сами решаем вопрос с китайскими
            коллегами.
          </div>
          <img
            className="w-[45%] h-[45%]"
            src={img}
            alt=""
          />
        </div>
        <div className="flex justify-between items-center">
          <img
            className="w-[50%] h-[50%]"
            src={logic}
            alt=""
          />
          <div className="max-w-[400px] text-right leading-snug">
            <p className="space-bold-font pb-4 ">
              Логистическая консультация
            </p>
            Помогаем начать товарный бизнес с
            Китаем. Подскажем, какие товары лучше
            всего выбрать для начала вашего дела,
            как наладить контакт с поставщиком и
            какие проблемы могут возникнуть на
            таможне. Планируете везти из Китая
            опасные или специфические грузы?
            Объясним, какие проблемы ожидать и как
            их избежать. При заказе логистической
            консультации предоставляем скидку на
            транспортные услуги.
          </div>
        </div>
        <div className="text-center mt-10 leading-snug">
          <p className="text-center space-bold-font pb-4">
            Таможенное сопровождение
          </p>
          Обеспечиваем готовность всей таможенной
          документации. При возникновении проблем
          наш юридический отдел легко решит
          возникшие трудности. При необходимости
          проставляем необходимую маркировку на
          ваш товар.
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
