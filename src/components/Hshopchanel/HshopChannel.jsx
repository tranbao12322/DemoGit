import React from 'react';
import './HshopChannel.css'; // import CSS riêng

const videos = [
  {
    id: 'v1',
    title: 'Máy tạo tín hiệu FNIRSI® SG-003A Signal Generator',
    youtubeId: 'qJFi00orBGo', // Thay bằng ID thực tế
  },
  {
    id: 'v2',
    title: 'SiPEED MAIXCAM PRO 1GHz RISC-V C906 AI Vision Auditory | AIOT Development Board',
    youtubeId: 'yourYoutubeID2',
  },
  // ... các video còn lại
];

const HshopChannel = () => {
  return (
    <div className="hshop-channel-container">
      <h2>HSHOP CHANNEL</h2>
      <p>
        Danh mục các Video của Kênh Youtube Hshop Channel, hãy đăng ký theo dõi kênh (Subscribe) để luôn cập nhật các Sản Phẩm, Hướng Dẫn và Tin tức mới nhất về chuyên ngành: Điện Tử, Tự Động Hoá, Robotics, AI, IoT,...
      </p>

      <div>
        {videos.map(video => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            {video.youtubeId && !video.youtubeId.startsWith('yourYoutubeID') ? (
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <p className="video-placeholder">Video chưa có sẵn.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HshopChannel;
