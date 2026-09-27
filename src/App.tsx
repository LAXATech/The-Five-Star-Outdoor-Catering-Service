import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { MenuModal } from './components/MenuModal';
import { MenuDeckModal } from './components/MenuDeckModal';
import { TasteSessionModal } from './components/TasteSessionModal';

import { Home } from './pages/Home';
import { Menus } from './pages/Menus';
import { Services } from './pages/Services';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import type { MenuItem, PackageTier } from './types';


// ScrollToTop component ensures navigation starts at top of page
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppContent() {
  // Global Modals State
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState<any>({});
  
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [menuDeckModalOpen, setMenuDeckModalOpen] = useState(false);
  const [tasteSessionModalOpen, setTasteSessionModalOpen] = useState(false);

  const handleRequestQuote = (initialData: any = {}) => {
    setQuoteInitialData(initialData);
    setQuoteModalOpen(true);
  };

  const handleOpenMenu = (menu: MenuItem) => {
    setSelectedMenuItem(menu);
  };

  const handleSelectPackage = (pkg: PackageTier) => {
    handleRequestQuote({
      packageName: pkg.name,
      menuType: `${pkg.name} (${pkg.includedItems})`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#292524] selection:bg-[#C5A059] selection:text-white">
      <ScrollToTop />
      
      {/* Global Luxury Sticky Navbar */}
      <Navbar onRequestQuote={() => handleRequestQuote()} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onRequestQuote={handleRequestQuote}
                onOpenMenu={handleOpenMenu}
              />
            }
          />
          <Route
            path="/menus"
            element={
              <Menus
                onOpenMenu={handleOpenMenu}
                onOpenMenuDeck={() => setMenuDeckModalOpen(true)}
                onSelectPackage={handleSelectPackage}
                onRequestQuote={handleRequestQuote}
              />
            }
          />
          <Route
            path="/services"
            element={<Services onRequestQuote={handleRequestQuote} />}
          />
          <Route
            path="/gallery"
            element={<Gallery />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={
              <Home
                onRequestQuote={handleRequestQuote}
                onOpenMenu={handleOpenMenu}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Luxury Dark Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp & Call Widget */}
      <FloatingWhatsApp />

      {/* Interactive Global Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialData={quoteInitialData}
      />

      <MenuModal
        item={selectedMenuItem}
        onClose={() => setSelectedMenuItem(null)}
        onSelectMenu={(item) => {
          setSelectedMenuItem(null);
          handleRequestQuote({
            menuType: item.name,
            eventType: item.category === 'grand-wedding' ? 'Weddings & Receptions' : undefined
          });
        }}
      />

      <MenuDeckModal
        isOpen={menuDeckModalOpen}
        onClose={() => setMenuDeckModalOpen(false)}
      />

      <TasteSessionModal
        isOpen={tasteSessionModalOpen}
        onClose={() => setTasteSessionModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
