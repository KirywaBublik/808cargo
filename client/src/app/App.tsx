import AppRouter from "@app/router/appRouter/AppRouter.tsx";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="shrink grow basis-auto">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
};

export default App;
