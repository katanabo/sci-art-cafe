import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { EventInfo, Page } from '../types';
import { client } from '../utils/microcms';

interface EventPageProps {
  navigateTo?: (page: Page, params?: any) => void;
}

const EventPage: React.FC<EventPageProps> = ({ navigateTo }) => {
  const [events, setEvents] = useState<EventInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await client.get({
          endpoint: 'events',
          queries: { orders: '-date' },
        });
        setEvents(data.contents);
      } catch (err) {
        console.error('Failed to fetch events:', err);
        setError('イベント情報の取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-primary mb-3">
          イベント情報
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">当カフェで開催される、または予定されているイベントの一覧です。科学セミナー、音楽ライブ、ワークショップなど、多彩なプログラムをご用意しています。</p>
      </section>

      <section>
        {loading ? (
          <div className="text-center">
            <i className="ri-loader-4-line ri-spin ri-3x text-primary"></i>
            <p className="mt-4 text-gray-600">読み込み中...</p>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {events.map(event => (
              <EventCard key={event.id} event={event} navigateTo={navigateTo} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">現在予定されているイベントはありません。</p>
        )}
      </section>
    </div>
  );
};

export default EventPage;