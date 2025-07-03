import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import SEOHead from "./components/SEO/SEOHead";
import ViewportManager from "./components/ViewportManager/ViewportManager";
import { usePerformanceOptimization } from "./hooks/useOptimization";

// Lazy loading des composants non critiques
const Main = React.lazy(() => import("./components/Main/Main"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop/ScrollToTop"));

function App(){
  // Hook pour optimiser les performances globales
  usePerformanceOptimization();

  return (
    <>
    <SEOHead />
    <ViewportManager />
    <Header/>
    <Suspense fallback={<div style={{minHeight: '100vh'}} />}>
      <Main/>
      <ScrollToTop/>
    </Suspense>
    </>
  );
}

export default App;