import AppRouter from "@app/router/appRouter/AppRouter.tsx";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";
import { Loading } from "@shared/ui";
import { Suspense } from "react";
import { BtnTopPage } from "@/feature/btnTopPage";
import { YMaps } from "@pbe/react-yandex-maps";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <YMaps>
        <Header />
        <div className="shrink grow basis-auto">
          <AppRouter />
          <BtnTopPage />
        </div>
        <Footer />
      </YMaps>
    </Suspense>
  );
};

export default App;
