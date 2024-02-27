import { HrefBlock } from "@/feature/hrefBlock";
import { SubscribeForm } from "@/feature/subscribeForm";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="h-dvh max-w-[1170px] mx-auto w-full">
      <HrefBlock pathes={["Main", "Contacts"]} />
      <div className="flex justify-center items-center flex-col text-5xl">
        <h1 className="mb-4">{t("Contacts")}</h1>
        <p className="text-base text-center">
          {t("ЗАКАЖИТЕ ЗВОНОК")} <br />{" "}
          {t("ПРЯМО СЕЙЧАС")}
        </p>
      </div>
      <div className="w-[400px] mx-auto">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default ContactPage;
