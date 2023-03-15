import React from 'react';

export const LoadMoreBtn = ({ onLoadMore, isSubmitting }) => {
  return (
    <button
      type="button"
      className="Button"
      // disabled={isSubmitting}
      onClick={onLoadMore}
    >
      Load More
    </button>
  );
};
