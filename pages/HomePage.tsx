import React, { useState, useEffect } from 'react';
import { CAFE_CATCHPHRASE, CAFE_SUB_CATCHPHRASE, ABOUT_TEXT_TITLE, ABOUT_TEXT_P1, ABOUT_TEXT_P2 } from '../constants';
import EventCard from '../components/EventCard';
import { Page, EventInfo } from '../types';
import { client } from '../utils/microcms';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const FeatureCard: React.FC<{icon: string, title: string, description: string}> = ({icon, title, description}) => (
  <div className="p-6 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow text-center bg-white">
    <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto bg-primary bg-opacity-10 rounded-full">
      <i className={`${icon} ri-2x text-primary`}></i>
    </div>
    <h3 className="handwritten text-xl font-bold text-body-text mb-3">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const [events, setEvents] = useState<EventInfo[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await client.get({
          endpoint: 'events',
          queries: { limit: 2 }, // Limit to 2 events for homepage
        });
        setEvents(data.contents);
      } catch (error) {
        console.error('Failed to fetch events from microCMS:', error);
      }
    };

    fetchEvents();
  }, []);

  const displayedEvents = events.slice(0, 2); // Show 2 events on homepage

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="hero-doodle py-20 md:py-32 -mx-4 sm:mx-0 sm:rounded-lg overflow-hidden">
        <div className="hero-overlay"></div>
        <div className="relative container mx-auto px-4 text-left"> {/* text-left for larger screens */}
          <div className="max-w-2xl">
            <h1 className="handwritten text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight">
              {CAFE_CATCHPHRASE}
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">{CAFE_SUB_CATCHPHRASE}</p>
            <button
              onClick={() => navigateTo(Page.EVENT)}
              className="handwritten inline-flex items-center px-6 py-3 bg-primary text-white font-medium !rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
              aria-label="イベント情報を見る"
            >
              イベント情報を見る
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* About/Concept Section */}
      <section>
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">コンセプト</h2>
        <div className="notebook-bg max-w-4xl mx-auto p-6 sm:p-8 rounded shadow-md">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/seed/cafeconcept/600/400" 
                // src from example: "https://readdy.ai/api/search-image?query=cozy%20cafe%20interior%20with%20bookshelves%2C%20scientific%20equipment%2C%20musical%20instruments%2C%20warm%20lighting%2C%20academic%20atmosphere%2C%20hand-drawn%20style%20illustration%2C%20minimalist%20design%2C%20clean%20and%20bright&width=600&height=400&seq=2&orientation=landscape" 
                alt="カフェの内装イメージ" 
                className="rounded shadow-md w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="handwritten text-2xl font-bold mb-4 text-secondary">{ABOUT_TEXT_TITLE}</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">{ABOUT_TEXT_P1}</p>
              <p className="text-gray-700 leading-relaxed">{ABOUT_TEXT_P2.split('美味しいコーヒーと共に')[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features Section */}
      <section>
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">特徴</h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard icon="ri-book-open-line" title="学術的な雰囲気" description="科学書や音楽理論の書籍が並ぶ本棚、黒板に書かれた数式など、知的好奇心を刺激する空間です。" />
          <FeatureCard icon="ri-music-2-line" title="生演奏とセミナー" description="週末には研究者による科学セミナーや、音楽家による生演奏を開催。知識と感性を同時に満たす体験を提供します。" />
          <FeatureCard icon="ri-cup-line" title="特製メニュー" description="科学者や音楽家にちなんだオリジナルドリンクや、創造性を高める食材を使用したメニューをご用意しています。" />
        </div>
      </section>
      
      <div className="section-divider"></div>

      {/* Events Section */}
      <section>
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">注目のイベント</h2>
        {displayedEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {displayedEvents.map(event => (
              <EventCard key={event.id} event={event} navigateTo={navigateTo} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">現在予定されているイベントはありません。</p>
        )}
        {events.length > 0 && ( // Show button if there are any events
          <div className="text-center mt-10">
            <button
              onClick={() => navigateTo(Page.EVENT)}
              className="handwritten inline-flex items-center px-6 py-3 border border-primary text-primary font-medium !rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
              aria-label="すべてのイベントを見る"
            >
              すべてのイベントを見る
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;