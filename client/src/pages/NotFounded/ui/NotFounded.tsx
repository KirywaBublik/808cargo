import { notFound } from "@shared/assets";
const NotFounded = () => {
  return (
    <div className="flex justify-center flex-col items-center pt-24">
      <div>
        <img src={notFound} alt="" />
      </div>
      <p className="pt-16 roboto-font">
        Похоже здесь ничего нет :(
      </p>
    </div>
  );
};

export default NotFounded;
