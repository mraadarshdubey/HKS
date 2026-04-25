import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        const popup = document.querySelector('.video-hover-popup');
        if (popup && popup.classList.contains('force-open')) {
          popup.classList.remove('force-open');
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
            videoRef.current.muted = true;
            setIsMuted(true);
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const handleProgressClick = (e) => {
    e.stopPropagation();
    if (progressRef.current && videoRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * videoRef.current.duration;
    }
  };

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section fade-in-section">
      {/* Mobile-only: Image as full background */}
      <img className="hero-mobile-img" src="/k1.webp" alt="" aria-hidden="true" />
      <div className="hero-mobile-gradient" />

      <div className="hero-map-bg" />
      <div className="hero-gradient-overlay" />

      <div className="hero-grid">
        {/* LEFT: Video + Copy */}
        <div className="hero-left">
          {/* Mobile-only: Gold accent label */}
          <div className="hero-accent-line">Digital Marketing Expert &amp; Growth Strategist</div>

          {/* Hero Copy Wrapper for Hover */}
          <div>
            <div 
              ref={wrapperRef}
              className="hero-text-hover-wrap" 
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  // On mobile, tapping the text toggles the popup
                  const popup = document.querySelector('.video-hover-popup');
                  if (popup) {
                    const isClosing = popup.classList.contains('force-open');
                    
                    // Don't toggle if clicking inside the actual popup content, let the popup handle it
                    if (e.target.closest('.video-hover-popup') && !isClosing) return;

                    if (isClosing) {
                      popup.classList.remove('force-open');
                      if (videoRef.current) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                        videoRef.current.muted = true;
                        setIsMuted(true);
                      }
                    } else {
                      popup.classList.add('force-open');
                      if (videoRef.current) {
                        videoRef.current.play().catch(err => console.log('Autoplay blocked:', err));
                        setIsPlaying(true);
                      }
                    }
                  }
                }
              }}
            >
              {/* Hover Video Popup */}
              <div className="video-hover-popup">
                {/* Video Player */}
                <div className="video-player-wrap" onClick={togglePlay}>
                  <video 
                    ref={videoRef}
                    className="video-thumb" 
                    src="/KH.mp4" 
                    autoPlay 
                    muted={isMuted}
                    loop 
                    playsInline 
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', opacity: 1, filter: 'none', backgroundImage: 'none' }} 
                  />
                  <div className="video-overlay" style={{ opacity: isPlaying ? 0 : 0.4, transition: 'opacity 0.3s' }} />

                  {/* Play Button (Center) */}
                  {!isPlaying && (
                    <div className="video-play-btn" style={{ pointerEvents: 'none' }}>
                      <i className="fas fa-play" />
                    </div>
                  )}

                  {/* Top Left: Enable Sound */}
                  <div className="video-enable-sound" onClick={toggleMute} style={{ cursor: 'pointer' }}>
                    <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"} />
                    <span>{isMuted ? "Enable sound" : "Mute"}</span>
                  </div>

                  {/* Top Right: Sound Badge */}
                  {isMuted && (
                    <div className="video-sound-badge" onClick={toggleMute}>
                      <div className="icon-circle">
                        <i className="fas fa-volume-up" />
                      </div>
                      <div className="badge-text">
                        <span>Click to turn</span>
                        <span>On Sound</span>
                      </div>
                    </div>
                  )}

                  {/* Bottom Controls */}
                  <div className="video-controls" onClick={(e) => e.stopPropagation()}>
                    <div className="left">
                      <i className={isPlaying ? "fas fa-pause" : "fas fa-play"} style={{ cursor: 'pointer', width: '16px', textAlign: 'center' }} onClick={togglePlay} />
                      <span style={{ fontWeight: 700, letterSpacing: '0.05em', minWidth: '35px' }}>{currentTime}</span>
                    </div>
                    <div className="video-progress-bar" ref={progressRef} onClick={handleProgressClick}>
                      <div className="video-progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="right">
                      <span style={{ fontWeight: 700, letterSpacing: '0.05em', minWidth: '35px' }}>{duration}</span>
                      <i className={isMuted ? "fas fa-volume-mute" : "fas fa-volume-up"} style={{ cursor: 'pointer', width: '16px', textAlign: 'center' }} onClick={toggleMute} />
                      <i className="fas fa-cog" style={{ cursor: 'pointer' }} />
                      <i className="fas fa-expand" style={{ cursor: 'pointer' }} onClick={toggleFullScreen} />
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="hero-h1">
                Who is <span className="gold">Kiran Hajare?</span>
              </h1>
            </div>

            {/* Mobile-only: Stats Strip */}
            <div className="hero-stats-strip">
              <div className="hero-stat">
                <span className="hero-stat-num">50K+</span>
                <span className="hero-stat-label">People Trained</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">30K+</span>
                <span className="hero-stat-label">Using My System</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-num">₹1Cr+</span>
                <span className="hero-stat-label">Ad Spend Experience</span>
              </div>
            </div>

            <p className="hero-bio" style={{ marginTop: '16px' }}>
              I've spent ₹1 Crore+ on ads and built a simple system that helps small business owners
              get real results. Trained 50,000+ people. 30,000+ are already using my system to get
              daily enquiries and real customers — without wasting money on ads.
            </p>
            <div style={{ marginTop: '28px' }}>
              <a
                href="/my-story"
                className="hero-cta-btn"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
              >
                Full Story <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Image Cutout (desktop only) */}
        <div className="hero-right">
          <img
            src="/k1.webp"
            alt="Kiran Hajare"
          />
        </div>
      </div>
    </section>
  );
}

