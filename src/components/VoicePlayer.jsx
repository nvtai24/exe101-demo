import React, { useState, useEffect } from "react";

const VoicePlayer = ({ text, audioUrl = null }) => {
  const [playing, setPlaying] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1); // Tốc độ: 0.5 - 2
  const [pitch, setPitch] = useState(1); // Cao độ: 0 - 2
  const [naturalSpeech, setNaturalSpeech] = useState(true); // Chế độ nói tự nhiên

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);

      // Ưu tiên chọn giọng nữ người Việt Nam
      // Thứ tự ưu tiên:
      // 1. Giọng nữ Việt Nam (có chứa "female", "woman", "nữ", "cô" trong tên)
      // 2. Bất kỳ giọng Việt Nam nào (vi-VN, vi)
      // 3. Giọng đầu tiên trong danh sách

      let selectedVoice = null;

      // Tìm giọng nữ Việt Nam
      const femaleViVoices = availableVoices.filter((v) => {
        const isVietnamese = v.lang.includes("vi") || v.lang === "vi-VN";
        const isFemale =
          v.name.toLowerCase().includes("female") ||
          v.name.toLowerCase().includes("woman") ||
          v.name.toLowerCase().includes("nữ") ||
          v.name.toLowerCase().includes("cô") ||
          v.name.toLowerCase().includes("linh") ||
          v.name.toLowerCase().includes("hà") ||
          v.name.toLowerCase().includes("mai");
        return isVietnamese && isFemale;
      });

      if (femaleViVoices.length > 0) {
        selectedVoice = femaleViVoices[0];
      } else {
        // Nếu không có giọng nữ, tìm bất kỳ giọng Việt nào
        const viVoices = availableVoices.filter(
          (v) => v.lang.includes("vi") || v.lang === "vi-VN"
        );
        if (viVoices.length > 0) {
          selectedVoice = viVoices[0];
        } else {
          selectedVoice = availableVoices[0];
        }
      }

      setSelectedVoice(selectedVoice);

      // Log để debug
      console.log(
        "Available Vietnamese voices:",
        availableVoices
          .filter((v) => v.lang.includes("vi"))
          .map((v) => ({
            name: v.name,
            lang: v.lang,
            gender:
              v.name.toLowerCase().includes("female") ||
              v.name.toLowerCase().includes("woman")
                ? "Female"
                : "Unknown",
          }))
      );
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Hàm xử lý văn bản để nói tự nhiên hơn
  const processTextForNaturalSpeech = (inputText) => {
    if (!naturalSpeech) return inputText;

    let processedText = inputText;

    // Thêm ngắt nghỉ tại dấu câu
    processedText = processedText.replace(/([.!?])\s+/g, "$1... ");
    processedText = processedText.replace(/([,;:])\s+/g, "$1. ");

    // Nhấn mạnh từ khóa quan trọng (viết hoa hoặc từ đặc biệt)
    const emphasisWords = [
      "tuyệt vời",
      "đẹp",
      "nổi tiếng",
      "đặc biệt",
      "quan trọng",
      "nhất định",
      "tuyệt đối",
    ];
    emphasisWords.forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      processedText = processedText.replace(regex, "... $1 ...");
    });

    // Thêm ngắt nghỉ giữa các câu dài
    processedText = processedText.replace(/(\w+,\s+\w+,\s+\w+)/g, "$1...");

    return processedText;
  };

  // Hàm chia nhỏ văn bản và đọc với âm điệu thay đổi
  const speakWithVariation = (inputText) => {
    const sentences = inputText.split(/([.!?]+\s+)/);
    let currentIndex = 0;

    const speakNextSentence = () => {
      if (currentIndex >= sentences.length) {
        setPlaying(false);
        return;
      }

      const sentence = sentences[currentIndex].trim();
      if (!sentence) {
        currentIndex++;
        speakNextSentence();
        return;
      }

      const utter = new SpeechSynthesisUtterance(sentence);
      utter.lang = "vi-VN";

      // Biến đổi tốc độ và cao độ tự nhiên
      // Câu hỏi: tăng cao độ
      if (sentence.includes("?")) {
        utter.pitch = Math.min(pitch + 0.3, 2);
        utter.rate = Math.max(rate - 0.1, 0.5);
      }
      // Câu cảm thán: thay đổi cường độ
      else if (sentence.includes("!")) {
        utter.pitch = Math.min(pitch + 0.2, 2);
        utter.rate = rate;
      }
      // Câu bình thường: biến đổi nhẹ để tự nhiên
      else {
        const variation = (Math.random() - 0.5) * 0.15;
        utter.pitch = Math.max(0.5, Math.min(pitch + variation, 2));
        utter.rate = Math.max(0.5, Math.min(rate + variation * 0.5, 2));
      }

      if (selectedVoice) {
        utter.voice = selectedVoice;
      }

      utter.onend = () => {
        currentIndex++;
        // Ngắt nghỉ ngắn giữa các câu
        setTimeout(speakNextSentence, 200);
      };

      utter.onerror = () => {
        currentIndex++;
        speakNextSentence();
      };

      window.speechSynthesis.speak(utter);
    };

    speakNextSentence();
  };

  const handlePlay = async () => {
    if (audioUrl) {
      // play audio URL
      const audio = new Audio(audioUrl);
      setPlaying(true);
      audio.play();
      audio.onended = () => setPlaying(false);
    } else if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setPlaying(true);

      if (naturalSpeech) {
        // Chế độ nói tự nhiên với biến đổi âm điệu
        const processedText = processTextForNaturalSpeech(text || "");
        speakWithVariation(processedText);
      } else {
        // Chế độ nói đơn giản
        const utter = new SpeechSynthesisUtterance(text || "");
        utter.lang = "vi-VN";
        utter.rate = rate;
        utter.pitch = pitch;
        if (selectedVoice) {
          utter.voice = selectedVoice;
        }
        utter.onend = () => setPlaying(false);
        window.speechSynthesis.speak(utter);
      }
    } else {
      alert("Trình duyệt của bạn không hỗ trợ SpeechSynthesis.");
    }
  };

  const handleStop = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setPlaying(false);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <button
          onClick={() => (playing ? handleStop() : handlePlay())}
          className={`px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
            playing
              ? "bg-red-600 text-white border-red-600"
              : "bg-white text-gray-800 border-gray-300 hover:border-primary-500"
          }`}
          title="Nghe chuyện AI"
        >
          <i className={`fas ${playing ? "fa-stop" : "fa-volume-up"} mr-2`}></i>
          {playing ? "Dừng" : "Nghe chuyện"}
        </button>

        {/* Settings Button */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-primary-500 transition-colors text-sm"
          title="Cài đặt giọng đọc"
        >
          <i className="fas fa-cog"></i>
        </button>

        {/* <div className="text-sm text-gray-600">AI voice story (minh họa)</div> */}
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-80 z-50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-gray-900 flex items-center gap-2">
              <i className="fas fa-sliders-h text-primary-600"></i>
              Cài đặt giọng đọc
            </h4>
            <button
              onClick={() => setShowSettings(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Info Banner */}
          <div className="mb-4 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-200">
            <div className="flex items-start gap-2">
              <i className="fas fa-sparkles text-pink-500 mt-0.5"></i>
              <div className="text-xs text-gray-700">
                <div className="font-semibold text-pink-700 mb-1">
                  👩 Giọng nữ Việt Nam được đề xuất
                </div>
                <div>
                  Trải nghiệm nghe tốt nhất với giọng nữ người Việt. Nếu không
                  có sẵn, vui lòng cài đặt giọng Việt trong hệ thống.
                </div>
              </div>
            </div>
          </div>

          {/* Voice Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-user mr-2 text-primary-600"></i>
              Giọng đọc
            </label>
            <select
              value={selectedVoice?.name || ""}
              onChange={(e) => {
                const voice = voices.find((v) => v.name === e.target.value);
                setSelectedVoice(voice);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
            >
              {voices.filter((v) => v.lang.includes("vi")).length === 0 && (
                <option disabled>Không tìm thấy giọng Việt Nam</option>
              )}

              {/* Ưu tiên hiển thị giọng Việt Nam trước */}
              {voices
                .filter((v) => v.lang.includes("vi"))
                .map((voice) => {
                  const isFemale =
                    voice.name.toLowerCase().includes("female") ||
                    voice.name.toLowerCase().includes("woman") ||
                    voice.name.toLowerCase().includes("nữ");
                  return (
                    <option key={voice.name} value={voice.name}>
                      {isFemale ? "👩 " : ""}
                      {voice.name} ({voice.lang}){isFemale ? " - Giọng nữ" : ""}
                    </option>
                  );
                })}

              {/* Các giọng khác */}
              {voices.filter((v) => !v.lang.includes("vi")).length > 0 && (
                <optgroup label="Giọng ngôn ngữ khác">
                  {voices
                    .filter((v) => !v.lang.includes("vi"))
                    .map((voice) => (
                      <option key={voice.name} value={voice.name}>
                        {voice.name} ({voice.lang})
                      </option>
                    ))}
                </optgroup>
              )}
            </select>
            {selectedVoice && (
              <div className="mt-2 text-xs text-gray-600 flex items-center gap-2">
                <i className="fas fa-info-circle text-blue-500"></i>
                <span>
                  Đang dùng: <strong>{selectedVoice.name}</strong>
                  {selectedVoice.name.toLowerCase().includes("female") ||
                  selectedVoice.name.toLowerCase().includes("woman")
                    ? " (Giọng nữ)"
                    : ""}
                </span>
              </div>
            )}

            {/* Hướng dẫn cài đặt nếu không có giọng Việt */}
            {voices.filter((v) => v.lang.includes("vi")).length === 0 && (
              <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <i className="fas fa-exclamation-triangle text-yellow-600 mt-0.5"></i>
                  <div className="text-xs text-gray-700">
                    <div className="font-semibold text-yellow-800 mb-1">
                      Chưa có giọng tiếng Việt
                    </div>
                    <div className="mb-2">
                      Để có trải nghiệm tốt nhất, vui lòng cài đặt giọng đọc
                      tiếng Việt:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>
                        Windows: Settings → Time & Language → Speech → Add
                        voices
                      </li>
                      <li>
                        MacOS: System Preferences → Accessibility → Spoken
                        Content
                      </li>
                      <li>Chrome: Cài extension "Google Text-to-Speech"</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Rate Control */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-tachometer-alt mr-2 text-primary-600"></i>
              Tốc độ: {rate.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0.5x (Chậm)</span>
              <span>1.0x (Bình thường)</span>
              <span>2.0x (Nhanh)</span>
            </div>
          </div>

          {/* Pitch Control */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-music mr-2 text-primary-600"></i>
              Cao độ: {pitch.toFixed(1)}
            </label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0 (Thấp)</span>
              <span>1 (Bình thường)</span>
              <span>2 (Cao)</span>
            </div>
          </div>

          {/* Natural Speech Toggle */}
          <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
            <label className="flex items-center justify-between cursor-pointer">
              <div className="flex items-center gap-2">
                <i className="fas fa-waveform-lines text-blue-600"></i>
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    Giọng nói tự nhiên
                  </div>
                  <div className="text-xs text-gray-600">
                    Biến đổi âm điệu, ngắt nghỉ như người thật
                  </div>
                </div>
              </div>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={naturalSpeech}
                  onChange={(e) => setNaturalSpeech(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </div>
            </label>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              setRate(1);
              setPitch(1);
              setNaturalSpeech(true);

              // Tìm giọng nữ Việt Nam
              const femaleViVoices = voices.filter((v) => {
                const isVietnamese =
                  v.lang.includes("vi") || v.lang === "vi-VN";
                const isFemale =
                  v.name.toLowerCase().includes("female") ||
                  v.name.toLowerCase().includes("woman") ||
                  v.name.toLowerCase().includes("nữ");
                return isVietnamese && isFemale;
              });

              if (femaleViVoices.length > 0) {
                setSelectedVoice(femaleViVoices[0]);
              } else {
                const viVoice = voices.find((v) => v.lang.includes("vi"));
                setSelectedVoice(viVoice || voices[0]);
              }
            }}
            className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
          >
            <i className="fas fa-undo mr-2"></i>
            Đặt lại mặc định (Giọng nữ Việt)
          </button>
        </div>
      )}
    </div>
  );
};

export default VoicePlayer;
