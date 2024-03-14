import { HrefBlock } from "@/feature/hrefBlock";
import { SubscribeForm } from "@/feature/subscribeForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Map,
  YMaps,
  Placemark,
} from "@pbe/react-yandex-maps";
import "@shared/assets/styles/adaptive.css";
import {
  avito,
  inst,
  tg,
  wa,
  we,
} from "@shared/assets";

const ContactPage = () => {
  const { t } = useTranslation("contacts");

  return (
    <YMaps>
      <div className="max-w-[1170px] mx-auto w-full md:px-0">
        <HrefBlock
          pathes={["Главная", "Контакты"]}
        />
        <p className="mt-10 mb-6 text-center space-bold-font text-xl">
          {t(
            "Свяжитесь с нами любыми удобными для Вас средствами",
          )}
        </p>
        <div className="flex justify-between contact">
          <div>
            <div className="flex flex-col gap-6">
              <p className="space-bold-font text-center text-lg">
                {t("НАШИ ОФИСЫ:")}
              </p>
              <div className="flex gap-6 contactImg">
                <div className="flex flex-col gap-2 justify-center">
                  <p className="pb-5 roboto-font">
                    {t(
                      "Москва. ул.Тихорецкий бульвар, д.1",
                    )}
                    {window.innerWidth ===
                      1024 && (
                        <div>
                          <br />
                        </div>
                      )}
                  </p>
                  <Map
                    defaultState={{
                      center: [
                        55.67650620378042,
                        37.77740279381502,
                      ],
                      zoom: 15,
                    }}
                  >
                    <Placemark
                      defaultGeometry={[
                        55.67650620378042,
                        37.77740279381502,
                      ]}
                    />
                  </Map>
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <p className="pb-5 roboto-font">
                    {t(
                      "Шеньчжень. ул.Ляохуа Цянбей, Футянь",
                    )}
                  </p>
                  <Map
                    defaultState={{
                      center: [
                        22.54682734823268,
                        114.08189944202685,
                      ],
                      zoom: 15,
                    }}
                  >
                    <Placemark
                      defaultGeometry={[
                        22.54682734823268,
                        114.08189944202685,
                      ]}
                    />
                  </Map>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div>
            <p className="space-bold-font text-lg text-center">
              {t("ЗАКАЖИТЕ ЗВОНОК")} <br />
              {t("ПРЯМО СЕЙЧАС")}
            </p>
            <div className="my-10 min-w-[300px] mx-auto forms">
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div>
          <p className="text-center space-bold-font text-lg pb-10">
            {t("Контакты")}
          </p>
          <p className="text-center roboto-font mb-10">
            <Link
              className="text-center underline "
              to="tel:+74951234567"
            >
              +7-993-476-67-72
            </Link>
          </p>
          <div className="flex justify-between items-center roboto-font imgImgImg">
            <div className="contactImgImg">
              <div className="text-center mb-10">
                <Link
                  className="underline"
                  to="https://t.me/ru_808cargo"
                  target="_blank"
                >
                  {t("Телеграм")}
                </Link>
                <br />
                <br />
                <img
                  className="w-40 h-50 rounded"
                  src={tg}
                  alt=""
                />
              </div>
              <div className="text-center">
                <Link
                  className="underline"
                  to="https://wa.me/qr/VM7EE64BXXIDH1"
                  target="_blank"
                >
                  {t("Ватсапп")}
                </Link>
                <br />
                <br />
                <img
                  className="w-40 h-50 rounded"
                  src={wa}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="text-center mb-10">
                <Link
                  className="underline"
                  to="https://www.instagram.com/808cargo"
                  target="_blank"
                >
                  {t("Инстаграм")}
                </Link>
                <br />
                <br />
                <img
                  className="w-40 h-50 rounded"
                  src={inst}
                  alt=""
                />
              </div>
              <div className="text-center">
                <Link
                  className="underline"
                  to="https://www.avito.ru/user/22bc2d6e7e241d589e89235a68c05dbe/profile?src=sharing"
                  target="_blank"
                >
                  {t("Авито")}
                </Link>
                <br />
                <br />
                <img
                  className="w-40 h-50 rounded"
                  src={avito}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-10">
            <p className="mb-10 underline">
              {t("ВиЧат")}
            </p>
            <img
              className="w-40 h-50 rounded"
              src={we}
              alt=""
            />
          </div>
        </div>
      </div>
    </YMaps>
  );
};

export default ContactPage;
