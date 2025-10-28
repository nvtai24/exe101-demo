import React from "react";

const ReviewsList = ({ reviews = [] }) => {
  if (!reviews || reviews.length === 0)
    return <div className="text-gray-600">Chưa có đánh giá nào.</div>;

  return (
    <div className="space-y-4">
      {reviews.map((r) => (
        <div key={r.id} className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-semibold">
              {r.author ? r.author.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">{r.author}</div>
                <div className="text-sm text-yellow-400">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-2">{r.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
