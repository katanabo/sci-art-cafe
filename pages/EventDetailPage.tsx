import React, { useState, useEffect } from 'react';
import { EventInfo, Page } from '../types';
import { client } from '../utils/microcms';

interface EventDetailPageProps {
  eventId: string; // イベントIDを受け取る
  navigateTo: (page: Page) => void; // 戻るボタン用
}

const EventDetailPage: React.FC<EventDetailPageProps> = ({ eventId, navigateTo }) => {
  const [event, setEvent] = useState<EventInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const data = await client.get<EventInfo>({
          endpoint: 'events',
          contentId: eventId,
        });
        setEvent(data);
      } catch (err) {
        console.error('Failed to fetch event details:', err);
        setError('イベント情報の取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEvent();
    }
  }, [eventId]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <i className="ri-loader-4-line ri-spin ri-3x text-primary"></i>
        <p className="mt-4 text-gray-600">読み込み中...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 text-lg">{error}</p>
        <button
          onClick={() => navigateTo(Page.EVENT)}
          className="handwritten inline-flex items-center mt-8 px-6 py-3 border border-primary text-primary font-medium !rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
        >
          イベント一覧に戻る
        </button>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg">イベントが見つかりませんでした。</p>
        <button
          onClick={() => navigateTo(Page.EVENT)}
          className="handwritten inline-flex items-center mt-8 px-6 py-3 border border-primary text-primary font-medium !rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
        >
          イベント一覧に戻る
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigateTo(Page.EVENT)}
        className="handwritten inline-flex items-center mb-8 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-100 transition-colors"
      >
        <i className="ri-arrow-left-line mr-2"></i>
        イベント一覧に戻る
      </button>

      <div className="bg-white p-6 sm:p-8 rounded shadow-md border border-gray-100">
        {event.imageUrl?.url && (
          <div className="w-full h-64 sm:h-80 mb-6 rounded overflow-hidden">
            <img src={event.imageUrl.url} alt={event.title} className="w-full h-full object-cover" />
          </div>
        )}
        <h1 className="handwritten text-3xl sm:text-4xl font-bold text-primary mb-4">{event.title}</h1>
        <div className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
          <p className="whitespace-pre-wrap">{event.longDescription || event.description}</p>
        </div>
        <div className="text-sm sm:text-base text-gray-600 space-y-2">
          <div className="flex items-center">
            <i className="ri-calendar-line mr-2 text-primary"></i>
            <span>{event.date}</span>
          </div>
          {event.time && (
            <div className="flex items-center">
              <i className="ri-time-line mr-2 text-primary"></i>
              <span>{event.time}</span>
            </div>
          )}
          {event.location && (
            <div className="flex items-center">
              <i className="ri-map-pin-line mr-2 text-primary"></i>
              <span>{event.location}</span>
            </div>
          )}
          <div className="flex items-center">
            <span className={`handwritten ${event.category === '科学' ? 'bg-primary' : event.category === '音楽' ? 'bg-secondary' : 'bg-green-600'} text-white px-3 py-1 text-xs sm:text-sm rounded-full whitespace-nowrap`}>
              {event.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;