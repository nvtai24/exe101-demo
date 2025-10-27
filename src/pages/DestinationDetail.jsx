import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { locations } from "../data/location";
import MediaGallery from "../components/MediaGallery";
import VoicePlayer from "../components/VoicePlayer";
import ReviewsList from "../components/ReviewsList";
import FAQList from "../components/FAQList";

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loc = locations.find((l) => l.id === id);

  if (!loc) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Không tìm thấy điểm đến</h3>
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  const mapSrc = `https://www.google.com/maps?q=${loc.coordinates.lat},${loc.coordinates.lng}&hl=vi&z=14&output=embed`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">{loc.name}</h1>
            <div className="text-sm text-gray-600 mt-1">
              {loc.region} • {loc.category}
            </div>
          </div>
          <div className="space-x-2">
            <Link to="/destinations" className="btn btn-ghost">
              Quay về danh sách
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Intro & Info */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-48 h-36 overflow-hidden rounded-lg">
                  <img
                    src={loc.images?.[0]}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Giới thiệu</h2>
                  <p className="text-gray-700 mb-2">{loc.description}</p>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Lịch sử:</strong> {loc.history}
                  </p>
                  {/* Opening hours and price intentionally removed from detail view per request */}
                </div>
              </div>
            </div>

            {/* Map & Directions */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Bản đồ & chỉ đường</h3>
              <div className="w-full h-64 rounded-md overflow-hidden">
                <iframe
                  title={`map-${loc.id}`}
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                Mở trong Google Maps:{" "}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${loc.coordinates.lat},${loc.coordinates.lng}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-600 underline"
                >
                  Chỉ đường
                </a>
              </div>
            </div>

            {/* Media Gallery */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Media</h3>
              </div>
              <MediaGallery images={loc.images} videos={loc.videos} />
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Reviews & Cộng đồng</h3>
                <div className="text-sm text-gray-600">
                  {loc.reviews?.length || 0} đánh giá
                </div>
              </div>
              <ReviewsList reviews={loc.reviews} />
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">FAQ</h3>
              <FAQList faqs={loc.faqs} />
            </div>
          </div>

          <aside className="space-y-6">
            {/* Quick Info card + Voice */}
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold mb-3">Thông tin nhanh</h4>
              {/* Opening hours and price removed from quick info card per request */}
              <div className="text-sm text-gray-700 mb-3">
                <strong>Vị trí:</strong> {loc.region}
              </div>
              <VoicePlayer
                text={`${loc.name}. ${loc.history}. ${loc.description}`}
                audioUrl={loc.audioStory}
              />
            </div>

            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h4 className="font-semibold mb-3">Chia sẻ</h4>
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-md border text-sm">
                  <i className="fab fa-facebook mr-2"></i> Facebook
                </button>
                <button className="px-3 py-2 rounded-md border text-sm">
                  Zalo
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
