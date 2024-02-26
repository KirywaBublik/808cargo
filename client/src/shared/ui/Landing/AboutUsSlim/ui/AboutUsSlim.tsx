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
            <div className="pt-5 max-w-2xl text-bg space-bold-font text-4xl">
              Расширим возможности вашего бизнеса
              с помощью индивидуальных
              логистических решений
            </div>
            <div className="pt-5 max-w-2xl text-borderInput roboto-font">
              В 808CARGO мы верим в предоставление
              нашим клиентам персонализированных и
              эффективных логистических решений,
              отвечающих их уникальным
              потребностям. Благодаря многолетнему
              опыту и команде экспертов мы
              стремимся предоставить вашему
              бизнесу возможность бесперебойной
              доставки.
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
