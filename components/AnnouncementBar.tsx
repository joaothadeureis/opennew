
import React from 'react';
import { ANNOUNCEMENT } from '../constants';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-secondary text-white py-2 px-4 text-center text-sm font-medium tracking-wide sticky top-0 z-50 shadow-md">
      <span className="opacity-95">
        {ANNOUNCEMENT.text}
      </span>
    </div>
  );
};
