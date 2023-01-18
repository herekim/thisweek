import { getWeek } from 'lib/date';
import React from 'react';

const SaveReviewButton = ({ onClick }: { onClick(): void }) => {
  return (
    <button
      onClick={onClick}
      className="font-semiboltext-white w-full rounded-lg bg-main-blue px-5 py-3 text-lg font-semibold text-white"
    >
      {getWeek}주차 회고 저장하기 💿
    </button>
  );
};

export default SaveReviewButton;
