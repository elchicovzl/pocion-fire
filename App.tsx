import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load route components (Vercel rule: bundle-dynamic-imports)
// This reduces initial bundle from 263KB to ~150-180KB
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

// Loading component with luxury styling that matches the brand
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-background-dark flex items-center justify-center">
    <div className="text-center">
      <div className="inline-block w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-primary font-brand text-[10px] tracking-[0.4em] uppercase">
        Cargando...
      </p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;