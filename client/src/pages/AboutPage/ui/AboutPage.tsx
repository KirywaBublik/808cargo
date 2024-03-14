import { HrefBlock } from "@/feature/hrefBlock";
import { useTranslation } from "react-i18next";
import "@shared/assets/styles/adaptive.css";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <div className="max-w-[1170px] my-0 mx-auto">
      <HrefBlock pathes={["Главная", "О нас"]} />
      <div className="space-medium-18 mt-10 flex flex-col gap-6 leading-snug aboutPage">
        <p>
          <span className="space-bold-font text-xl">
            808cargo
          </span>
          {t(
            "—транспортная компания с головным офисом в Шэньчжене. Основная сфера деятельности — перевозки любых видов грузов из южного Китая в Россию.",
          )}
        </p>
        <p>
          {t(
            "Работая на рынке более 12 лет, мы накопили бесценный опыт. В нашем штате трудится более 50 человек, все сотрудники владеют китайским языком и имеют опыт переговоров с бизнесменами из Поднебесной.",
          )}
        </p>
        <p>
          {t(
            "Автопарк компании состоит из 50 грузовых машин с грузоподъёмностью не менее 10 т каждый. Также компания располагает 25 контейнерами для ж/д перевозок и собственным отделом технического контроля, позволяющим отбраковывать некачественный товар на этапе приёмки в КНР. За месяц мы перевозим 1500 т различных грузов, от мелких сувениров и одежды до станков и металлопроката.",
          )}
        </p>
        <div>
          <p className="space-bold-font text-xl">
            {t("Наши перимущества :")}
          </p>
          <ul className="pl-10 roboto-font pt-6 pb-20">
            <li>
              {t(
                "Опыт и профессионализм: На протяжении более 12 лет мы накопили бесценный опыт в области логистики. Все наши сотрудники владеют китайским языком и имеют опыт переговоров с бизнесменами из Китая.",
              )}
            </li>
            <br />
            <li>
              {t(
                "Собственный автопарк: Наш автопарк состоит из 50 грузовых машин с грузоподъёмностью не менее 10 т каждый, что позволяет нам обеспечивать быструю и эффективную доставку грузов.",
              )}
            </li>
            <br />
            <li>
              {t(
                "Широкий спектр услуг: Мы предлагаем полный спектр логистических услуг, включая доставку грузов, таможенное сопровождение и логистическую консультацию.",
              )}
            </li>
            <br />
            <li>
              {t(
                "Качественный контроль: Мы осуществляем контроль качества продукции на этапе приёмки в КНР, что позволяет нам отбраковывать некачественный товар.",
              )}
            </li>
            <br />
            <li>
              {t(
                "Юридическая поддержка: Наш юридический отдел готов помочь в решении любых проблем, связанных с таможенной документацией и маркировкой товаров.",
              )}
            </li>
            <br />
            <li>
              {t(
                "Помощь в начале бизнеса: Мы помогаем нашим клиентам начать товарный бизнес с Китаем, предоставляя консультации по выбору товаров, установлению контактов с поставщиками и решению проблем на таможне.",
              )}
            </li>
            <br />
            <li>
              {t(
                "Скидки: При заказе логистической консультации мы предоставляем скидку на транспортные услуги.",
              )}
            </li>
            <br />
            <li>
              {t(
                "Мы гордимся тем, что можем предложить нашим клиентам высококачественные услуги и индивидуальный подход. С нами ваш бизнес в надежных руках!",
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
