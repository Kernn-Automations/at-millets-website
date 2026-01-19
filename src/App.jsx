import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./components/layout/MainLayout";
import { LanguageProvider } from "./i18n/LanguageContext";
import FallingLeaves from "./components/effects/FallingLeaves";
import WhatsAppFloat from "./components/common/WhatsAppFloat";
import { Route, Routes } from "react-router-dom";
import PageTransition from "./components/common/PageTransition";
import BrochurePage from "./pages/Brochure/BrochurePage";

function App() {
  return (
    <LanguageProvider>
      <FallingLeaves />
      <Routes>
        <Route
          path="/*"
          element={
            <MainLayout>
              <AppRoutes />
            </MainLayout>
          }
        />

        <Route
          path="/brochure"
          element={
            <PageTransition>
              <BrochurePage />
            </PageTransition>
          }
        />
      </Routes>
      <WhatsAppFloat />
    </LanguageProvider>
  );
}

export default App;
