export const InfoTextMainPage = () => {
  return (
    <div className="max-w-[1170px] my-0 mx-auto">
      <div className="flex flex-col gap-5 pt-5">
        <p className="space-medium-18">
          Мы - лучшая логистическая компания
        </p>
        <p className="space-bold-font text-5xl -ml-1">
          Оптимизируйте свою доставку с помощью
          наших грузовых услуг
        </p>
        <p className="roboto-font max-w-xl">
          Упростите процесс доставки и сделайте
          его более эффективным с помощью наших
          грузовых услуг. От начала до конца мы
          позаботимся обо всем, чтобы обеспечить
          безопасную доставку вашего груза.
        </p>
        <div className="space-bold-font flex gap-20">
          <p className="flex flex-col items-center border-dashed border-r-2 border-white pr-10 text-4xl">
            26К
            <span className="roboto-font">
              Двольных клиентов
            </span>
          </p>
          <p className="flex flex-col items-center -ml-10 text-4xl">
            12+
            <span className="roboto-font">
              Лет опыта
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
