import { HrefBlock } from "@/feature/hrefBlock";
import { SubscribeForm } from "@/feature/subscribeForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Map,
  Placemark,
} from "@pbe/react-yandex-maps";
import "@shared/assets/styles/adaptive.css";
import { inst, tg, wa, we } from "@shared/assets";

const ContactPage = () => {
  const { t } = useTranslation("contacts");

  return (
    <div className="max-w-[1170px] mx-auto w-full md:px-0">
      <HrefBlock
        pathes={["Главная", "Контакты"]}
      />
      <p className="mt-10 mb-6 text-center space-bold-font text-xl textCont">
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
                  {window.innerWidth === 1024 && (
                    <div>
                      <br />
                    </div>
                  )}
                </p>
                <div className="maps">
                  <Map
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
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
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <p className="pb-5 roboto-font">
                  {t(
                    "Шеньчжень. ул.Ляохуа Цянбей, Футянь",
                  )}
                </p>
                <div className="maps">
                  <Map
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
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
        <div className="flex justify-around items-center roboto-font imgImgImg">
          <div className="text-center">
            <Link
              className="underline"
              to="https://t.me/ru_808cargo"
              target="_blank"
            >
              {t("Телеграм")}
            </Link>
            <br />
            <br />
            <Link
              to="https://t.me/ru_808cargo"
              target="_blank"
            >
              <img
                className="w-20 h-20 rounded"
                src={tg}
                alt=""
              />
            </Link>
          </div>
          <div className="text-center">
            <Link
              className="underline"
              to="https://api.whatsapp.com/send?phone=79934766772"
              target="_blank"
            >
              {t("Ватсапп")}
            </Link>
            <br />
            <br />
            <Link
              to="https://api.whatsapp.com/send?phone=79934766772"
              target="_blank"
            >
              <img
                className="w-20 h-20 rounded"
                src={wa}
                alt=""
              />
            </Link>
          </div>
          <div className="inst">
            <Link
              className="underline instInst"
              to="https://www.instagram.com/808cargo"
              target="_blank"
            >
              {t("Инстаграм")}
            </Link>
            <br />
            <br />
            <Link
              to="https://www.instagram.com/808cargo"
              target="_blank"
            >
              <img
                className="w-20 h-20 rounded"
                src={inst}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-10 wewe">
          <p className="mb-8">{t("ВиЧат")}</p>
          <img
            className="w-20 h-20 rounded"
            src={we}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
