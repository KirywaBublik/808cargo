import { HrefBlock } from "@/feature/hrefBlock";
import { SubscribeForm } from "@/feature/subscribeForm";
import { images } from "./images";

const ContactPage = () => {
  return (
    <div className="h-dvh max-w-[1170px] mx-auto w-full">
      <HrefBlock />
      <div className="flex justify-center items-center flex-col text-5xl">
        <h1 className="mb-4">Контакты</h1>
        <div className="text-lg text-center">
          <p>
            Если у вас возникли вопросы, свяжитесь
          </p>
          <p>
            с нами любым удобным для вас способом:
          </p>
        </div>
        <div className="flex gap-24 mt-4 mb-4">
          {images.map((elem, index) => (
            <img
              width={40}
              key={index}
              src={elem.src}
            />
          ))}
        </div>
      </div>
      <div className="w-[400px] mx-auto">
        <SubscribeForm />
      </div>
    </div>
  );
};

export default ContactPage;
