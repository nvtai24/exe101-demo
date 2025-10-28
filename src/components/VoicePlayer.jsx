import React, { useState } from "react";

const VoicePlayer = ({ text, audioUrl = null }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlay = async () => {
    if (audioUrl) {
      // play audio URL
      const audio = new Audio(audioUrl);
      setPlaying(true);
      audio.play();
      audio.onended = () => setPlaying(false);
    } else if ("speechSynthesis" in window) {
      const utter = new SpeechSynthesisUtterance(text || "");
      utter.lang = "vi-VN";
      utter.rate = 1;
      utter.onstart = () => setPlaying(true);
      utter.onend = () => setPlaying(false);
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
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
    <div className="flex items-center gap-3">
      <button
        onClick={() => (playing ? handleStop() : handlePlay())}
        className={`px-4 py-2 rounded-lg border transition-colors text-sm font-medium ${
          playing ? "bg-red-600 text-white" : "bg-white text-gray-800"
        }`}
        title="Nghe chuyện AI"
      >
        <i className={`fas ${playing ? "fa-stop" : "fa-volume-up"} mr-2`}></i>
        {playing ? "Dừng" : "Nghe chuyện"}
      </button>
      <div className="text-sm text-gray-600">AI voice story (minh họa)</div>
    </div>
  );
};

export default VoicePlayer;
