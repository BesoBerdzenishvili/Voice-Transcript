import "./PlayBtn.css";

interface PlayBtnProps {
  isPlaying: boolean;
  startPlay: Function;
  stopPlay: Function;
}

const PlayBtn = ({ isPlaying, startPlay, stopPlay }: PlayBtnProps) => {
  return (
    <button
      className="play-btn"
      onClick={() => (isPlaying ? stopPlay() : startPlay())}
    >
      {isPlaying ? (
        <div className="vertical-lines">
          <div className="line"></div>
          <div className="line"></div>
        </div>
      ) : (
        <div className="triangle"></div>
      )}
    </button>
  );
};

export default PlayBtn;
