import AppRouter from "@app/router/appRouter/AppRouter.tsx";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";
import { Loading } from "@shared/ui";
import { Suspense } from "react";
import { BtnTopPage } from "@/feature/btnTopPage";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import "@/shared/config/i18n/i18n";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<Loading />}>
        <Header />
        <div className="shrink grow basis-auto">
          <AppRouter />
          <BtnTopPage />
        </div>
        <Footer />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
