import React from 'react';
import { EventInfo, Page } from '../types';

interface EventCardProps {
  event: EventInfo;
  navigateTo?: (page: Page, params?: any) => void; // Optional for "詳細を見る"
}

const CategoryBadge: React.FC<{ category: EventInfo['category'] }> = ({ category }) => {
  let bgColor = 'bg-gray-500';
  let textColor = 'text-white';

  if (category === '科学') {
    bgColor = 'bg-primary'; // As per example styling
  } else if (category === '音楽') {
    bgColor = 'bg-secondary'; // As per example styling
  } else if (category === '融合') {
    bgColor = 'bg-green-600'; // A distinct color for fusion events
  }

  return (
    <span className={`handwritten ${bgColor} ${textColor} px-3 py-1 text-xs sm:text-sm rounded-full whitespace-nowrap`}>
      {category}
    </span>
  );
};

const EventCard: React.FC<EventCardProps> = ({ event, navigateTo }) => {
  const placeholderImage = `https://picsum.photos/seed/${event.id}/400/250`;
  const displayImageUrl = event.imageUrl?.url || placeholderImage;

  const handleClick = () => {
    if (navigateTo) {
      navigateTo(Page.EVENT_DETAIL, { eventId: event.id });
    }
  };

  return (
    <div
      className="bg-white p-5 sm:p-6 rounded shadow-md border border-gray-100 flex flex-col h-full hover:scale-[0.99] hover:translate-y-0.5 hover:shadow-sm transition-all duration-200 ease-out cursor-pointer"
      onClick={handleClick}
    >
      {displayImageUrl && (
        <div className="w-full h-48 mb-4 rounded overflow-hidden">
          <img src={displayImageUrl} alt={event.title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <h3 className="handwritten text-lg sm:text-xl font-bold text-secondary flex-grow mr-2">{event.title}</h3>
        <CategoryBadge category={event.category} />
      </div>
      <p className="text-sm text-gray-700 mb-3 sm:mb-4 flex-grow">{event.description}</p>
      <div className="text-xs sm:text-sm text-gray-600 space-y-1 mb-3 sm:mb-4">
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
      </div>
      {/* Example "詳細を見る" button, you might want to link to a specific event page */}
      {/* <a 
        href="#event-details" // Placeholder
        onClick={(e) => {
          e.preventDefault();
          if (navigateTo) navigateTo(Page.EVENT, { eventId: event.id }); // Example navigation
        }}
        className="handwritten inline-flex items-center mt-auto px-4 py-2 border border-primary text-primary font-medium !rounded-button hover:bg-primary hover:text-white transition-colors whitespace-nowrap text-sm"
      >
        詳細を見る
        <i className="ri-arrow-right-line ml-2"></i>
      </a> */}
    </div>
  );
};

export default EventCard;