import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { Page, EventInfo } from '../types';
import { client } from '../utils/microcms';

interface HomePageProps {
  navigateTo: (page: Page, params?: { eventId?: string }) => void;
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

const backgroundImages = [
  '/kagakuongaku_photo01.jpg',
  '/kagakuongaku_photo02.jpg'
];

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const [events, setEvents] = useState<EventInfo[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 5秒ごとに画像を切り替え
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await client.get({
          endpoint: 'events',
          queries: { limit: 2, orders: '-date' },
        });
        setEvents(data.contents);
      } catch (error) {
        console.error('Failed to fetch events from microCMS:', error);
      }
    };

    fetchEvents();
  }, []);

  const displayedEvents = events.slice(0, 2);

  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section with Slideshow */}
      <section className="relative text-center h-[60vh] min-h-[400px] flex items-center justify-center rounded-lg overflow-hidden -mx-4 sm:mx-0">
        {backgroundImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="科学と音楽のカフェ 会場の様子"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="handwritten text-3xl md:text-4xl font-bold mb-6 text-white leading-tight drop-shadow-md">
            専門知をもっと身近に
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white max-w-3xl mx-auto drop-shadow-sm">
            「科学と音楽のカフェ」は、カフェのようなリラックスした空間で、科学や音楽に関する話題を気軽に楽しめる場を提供します。
          </p>
          <button
            onClick={() => navigateTo(Page.EVENT)}
            className="handwritten inline-flex items-center px-6 py-3 bg-primary text-white font-medium !rounded-button hover:bg-opacity-90 transition-colors whitespace-nowrap"
            aria-label="イベント情報を見る"
          >
            イベント情報を見る
            <i className="ri-arrow-right-line ml-2"></i>
          </button>
        </div>
      </section>

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
        {events.length > 0 && (
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

      <div className="section-divider"></div>

      {/* About/Concept Section */}
      <section>
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">コンセプト</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="handwritten text-2xl font-bold mb-4 text-secondary">音楽と科学の融合による文化発信</h3>
              <p className="text-gray-700 leading-relaxed">仙台には多様な文化コミュニティが存在するものの、それぞれが個別に活動しているのが現状です。本事業では、市民に親しまれているジャズフェスティバルをはじめとした音楽文化を活かし、音楽と科学の両面から知的好奇心を刺激する、新たな文化体験の場を創出します。</p>
            </div>
            <div>
              <h3 className="handwritten text-2xl font-bold mb-4 text-secondary">まちの魅力向上に向けた定例イベント</h3>
              <p className="text-gray-700 leading-relaxed">仙台おにぎり屋「織はや」を会場に、毎月定期的に開催される「科学と音楽のカフェ」は、まちに新たなリズムをもたらします。継続的な開催を通じて、地域に根ざした文化の流れを生み出し、日常の中で自然と学びや交流が生まれる環境を育てていきます。</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features Section */}
      <section>
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12 text-primary">特徴</h2>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <FeatureCard icon="ri-group-line" title="気軽に専門知と出会う" description="カフェのようなリラックスした空間で、科学者や音楽家と気軽に交流できます。" />
          <FeatureCard icon="ri-mic-line" title="科学と音楽の融合" description="科学者のトークとミュージシャンの生演奏を組み合わせた、知的好奇心を刺激する新しいスタイルのイベントです。" />
          <FeatureCard icon="ri-calendar-event-line" title="毎月開催の定例イベント" description="仙台おにぎり屋「織はや」で毎月開催。日常の中に、学びと交流の時間が生まれます。" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;