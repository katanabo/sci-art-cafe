import React, { useState, useCallback, useEffect } from 'react';
import { Page } from './types';
import { NAVIGATION_ITEMS, CAFE_NAME } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import ContactPage from './pages/ContactPage';
import EventDetailPage from './pages/EventDetailPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [currentEventId, setCurrentEventId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const parseHash = useCallback(() => {
    const hash = window.location.hash.substring(1); // Remove '#'
    if (hash.startsWith('event-detail/')) {
      const eventId = hash.split('/')[1];
      setCurrentPage(Page.EVENT_DETAIL);
      setCurrentEventId(eventId);
    } else {
      switch (hash) {
        case 'home':
          setCurrentPage(Page.HOME);
          break;
        case 'about':
          setCurrentPage(Page.ABOUT);
          break;
        case 'event':
          setCurrentPage(Page.EVENT);
          break;
        case 'contact':
          setCurrentPage(Page.CONTACT);
          break;
        default:
          setCurrentPage(Page.HOME);
          break;
      }
      setCurrentEventId(null);
    }
  }, []);

  useEffect(() => {
    parseHash(); // Parse hash on initial load

    const handlePopState = () => {
      parseHash(); // Re-parse hash on popstate (back/forward button)
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseHash]);

  const navigateTo = useCallback((page: Page, params?: { eventId?: string }) => {
    let newHash = '';
    let newEventId: string | null = null;

    switch (page) {
      case Page.HOME:
        newHash = 'home';
        break;
      case Page.ABOUT:
        newHash = 'about';
        break;
      case Page.EVENT:
        newHash = 'event';
        break;
      case Page.CONTACT:
        newHash = 'contact';
        break;
      case Page.EVENT_DETAIL:
        if (params?.eventId) {
          newHash = `event-detail/${params.eventId}`;
          newEventId = params.eventId;
        } else {
          // Fallback to event list if no eventId for detail page
          newHash = 'event';
          page = Page.EVENT; // Adjust page to EVENT if no eventId
        }
        break;
      default:
        newHash = 'home';
        page = Page.HOME; // Adjust page to HOME if unknown
        break;
    }

    setCurrentPage(page);
    setCurrentEventId(newEventId);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
    window.scrollTo(0, 0);

    // Update browser history
    window.history.pushState({ page, eventId: newEventId }, '', `#${newHash}`);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu on window resize if screen is larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage navigateTo={navigateTo} />;
      case Page.ABOUT:
        return <AboutPage />;
      case Page.EVENT:
        return <EventPage navigateTo={navigateTo} />;
      case Page.CONTACT:
        return <ContactPage />;
      case Page.EVENT_DETAIL:
        return currentEventId ? <EventDetailPage eventId={currentEventId} navigateTo={navigateTo} /> : <EventPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-body-bg text-body-text">
      <Header
        cafeName={CAFE_NAME}
        navItems={NAVIGATION_ITEMS}
        currentPage={currentPage}
        navigateTo={navigateTo}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      {/* Add padding-top to main to account for fixed header height. 
          Approx. header height: py-3 (1.5rem) + text-2xl (1.5rem line height). Let's use 4rem (64px) or pt-16.
          The example uses pt-16. */}
      <main className={`flex-grow container mx-auto px-4 py-8 pt-20 sm:pt-24 md:pt-16`}>
        {renderPage()}
      </main>
      <Footer cafeName={CAFE_NAME} />
    </div>
  );
};

export default App;