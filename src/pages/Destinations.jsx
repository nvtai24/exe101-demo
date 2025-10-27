import React, { useState } from "react";
import { Link } from "react-router-dom";
import { locations, regions as regionsData } from "../data/location";

const getCategoryColor = (category) => {
  switch ((category || "").toLowerCase()) {
    case "nature":
    case "countryside":
      return "bg-green-100 text-green-800";
    case "culture":
      return "bg-yellow-100 text-yellow-800";
    case "beach":
    case "coastal":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Destinations = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = locations.filter((dest) => {
    const matchesRegion =
      selectedRegion === "all" || dest.region === selectedRegion;
    const matchesCategory =
      selectedCategory === "all" || dest.category === selectedCategory;
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      dest.name.toLowerCase().includes(q) ||
      (dest.description || "").toLowerCase().includes(q);
    return matchesRegion && matchesCategory && matchesSearch;
  });

  const uniqueCategories = Array.from(
    new Set(locations.map((l) => l.category || "Khác"))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Hero */}
      <div
        className="relative h-80 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('${
            (locations[0] && locations[0].images && locations[0].images[0]) ||
            "https://via.placeholder.com/1600x900?text=Travel"
          }')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <h1 className="text-white text-4xl font-bold">Khám Phá điểm đến</h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Duyệt điểm đến, xem ảnh, nghe câu chuyện và đọc đánh giá.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters Row */}
        <div className="flex flex-col md:flex-row gap-3 mb-6 items-start md:items-center">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 rounded-md border"
          >
            <option value="all">Tất cả vùng</option>
            {regionsData.map((r) => (
              <option key={r.id} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-md border"
          >
            <option value="all">Tất cả danh mục</option>
            {uniqueCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm điểm đến..."
            className="px-4 py-2 rounded-md border flex-1"
          />
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination) => (
            <article
              key={destination.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={
                    destination.images?.[0] ||
                    "https://via.placeholder.com/800x450?text=No+Image"
                  }
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/800x450?text=No+Image")
                  }
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${getCategoryColor(
                      destination.category
                    )}`}
                  >
                    {destination.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {destination.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(destination.highlights || []).slice(0, 3).map((h, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 px-2 py-1 rounded"
                      >
                        {h}
                      </span>
                    ))}
                    {(destination.highlights || []).length > 3 && (
                      <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                        +{(destination.highlights || []).length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    to={`/destinations/${destination.id}`}
                    className="inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
