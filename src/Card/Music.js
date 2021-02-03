import { Card } from ".";
import { useState, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack } from "react-feather";

export const MusicCard = ({ item, ...props }) => {
  const [playing, setPlaying] = useState(item.playing);
  const [progress, setProgress] = useState(item.progress);
  const PlayIcon = playing ? Pause : Play;

  useEffect(() => {
    setPlaying(item.playing);
    setProgress(item.progress);
  }, [item]);

  useEffect(() => {
    const i = setInterval(() => {
      if (playing) {
        const p = progress + 1;
        if (p >= item.length) {
          setProgress(item.length);
          setPlaying(false);
        } else setProgress(p);
      }
    }, 1000);
    return () => clearInterval(i);
  }, [progress, playing, item.length]);

  return (
    <Card className="flex flex-col justify-center space-y-4" {...props}>
      <div className="space-y-2">
        <h1 className="text-center font-semibold text-lg">{item.name}</h1>
        <div className="flex justify-center">
          <button>
            <SkipBack size={15} />
          </button>
          <button onClick={() => setPlaying(!playing)} className="mx-5">
            <PlayIcon />
          </button>
          <button>
            <SkipForward size={15} />
          </button>
        </div>
      </div>
      <div className="mx-5">
        <div className="w-full h-2 rounded-full overflow-hidden bg-gray-100">
          <div
            className="h-full bg-primary"
            style={{ width: `${(progress / item.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};
