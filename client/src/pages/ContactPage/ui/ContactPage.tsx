import { HrefBlock } from "@/feature/hrefBlock";
import { SubscribeForm } from "@/feature/subscribeForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { we } from "@shared/assets";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[1170px] mx-auto w-full px-3 md:px-0">
      <HrefBlock pathes={["Main", "Contacts"]} />
      <p className="my-10 text-center space-bold-font text-xl">
        {t(
          "Свяжитесь с нами любыми удобными для Вас средствами",
        )}
      </p>
      <div className="flex justify-between">
        <div>
          <div className="flex flex-col gap-6">
            <p className="space-bold-font text-center text-lg">
              {t("Главный офис:")}
            </p>
            <p>
              ул. Ляохуа Цянбей, Футянь,
              Шеньчжень, Гуанчжоу, Китай, E03 – 04
            </p>
            <p>
              <a href="tel:+74951234567">
                +7-993-476-67-72
              </a>
            </p>
          </div>
          <br />
          <div>
            <p className="text-center space-bold-font text-lg pb-10">
              Контакты
            </p>
            <div className="flex justify-between items-center roboto-font">
              <div>
                <Link
                  className="inline"
                  target="_blank"
                  to="https://t.me/ru_808cargo"
                >
                  Телеграм
                </Link>
                <br />
                <br />
                <Link
                  target="_blank"
                  to="https://wa.me/qr/VM7EE64BXXIDH1"
                >
                  Ватсапп
                </Link>
                <br />
                <br />
                <Link
                  target="_blank"
                  to="https://www.avito.ru/user/22bc2d6e7e241d589e89235a68c05dbe/profile?src=sharing"
                >
                  Авито
                </Link>
                <br />
                <br />
                <Link
                  target="_blank"
                  to="https://www.instagram.com/808cargo"
                >
                  Инстаграм
                </Link>
              </div>
              <div>
                <img
                  className="w-40 h-50 rounded"
                  src={we}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="space-bold-font text-lg text-center">
            {t("ЗАКАЖИТЕ ЗВОНОК")} <br />
            {t("ПРЯМО СЕЙЧАС")}
          </p>
          <div className="my-10 min-w-[400px] w-full mx-auto">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
