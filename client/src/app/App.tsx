import AppRouter from "@app/router/appRouter/AppRouter.tsx";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";
import { Loading } from "@shared/ui";
import { Suspense } from "react";
import { BtnTopPage } from "@/feature/btnTopPage";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <div className="shrink grow basis-auto">
        <AppRouter />
        <BtnTopPage />
      </div>
      <Footer />
    </Suspense>
  );
};

export default App;