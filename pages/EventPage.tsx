import React, { useState, useEffect } from 'react';
import { EVENT_PAGE_TITLE, EVENT_PAGE_DESCRIPTION } from '../constants';
import EventCard from '../components/EventCard';
import { Page, EventInfo } from '../types';
import { client } from '../utils/microcms';

interface EventPageProps {
  navigateTo?: (page: Page, params?: any) => void;
}

const EventPage: React.FC<EventPageProps> = ({ navigateTo }) => {
  const [events, setEvents] = useState<EventInfo[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await client.get({
          endpoint: 'events',
        });
        setEvents(data.contents);
      } catch (error) {
        console.error('Failed to fetch events from microCMS:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h2 className="handwritten text-3xl md:text-4xl font-bold text-primary mb-3">{EVENT_PAGE_TITLE}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{EVENT_PAGE_DESCRIPTION}</p>
      </section>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map(event => (
            <EventCard key={event.id} event={event} navigateTo={navigateTo} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 bg-white rounded-lg shadow-md border border-gray-100">
          <i className="ri-calendar-close-line ri-4x text-gray-400 mb-4"></i>
          <p className="handwritten text-xl text-gray-600">現在予定されているイベントはありません。</p>
          <p className="text-gray-500 mt-2">最新情報はSNSやお知らせをご確認ください。</p>
        </div>
      )}
    </div>
  );
};

export default EventPage;