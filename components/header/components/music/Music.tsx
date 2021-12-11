import React, { useState } from "react";
import music_data from "./music_data";
const concurrentMusicData = music_data.find((v) => v.concurrent)!.children;

import s from "./Music.module.scss";
import { IconMusic, IconPause, IconPlay } from "./icons";

const slideWidth = 256;

export default function Music() {
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentConcurrent, setCurrentConcurrent] = useState<
    Array<{ name: string; url: string; playing: boolean }>
  >(concurrentMusicData as any);

  const updateCurrentConcurrent = (name: string) => {
    setCurrentConcurrent((d) =>
      d.map((v) => ({
        ...v,
        playing: v.name === name ? !v.playing : v.playing,
      }))
    );
  };

  return (
    <div className={s.component}>
      <button
        onClick={() => setVisible((v) => !v)}
        className={`${s.trigger} ${visible ? s.trigger_active : ""}`}
      >
        <IconMusic />
      </button>
      <div
        className={`${s.section_dropdown} ${
          visible ? s.section_dropdown_visible : ""
        }`}
      >
        <div className={s.genre_nav}>
          {music_data.map((m, k) => {
            return (
              <span
                key={m.name}
                onClick={() => setCurrentSlide(k)}
                className={""}
              >
                {m.name}
              </span>
            );
          })}
        </div>
        <div className={s.section_wrap} style={{ width: slideWidth }}>
          <div
            className={`${s.section_ctn}`}
            style={{
              width: slideWidth * music_data.length,
              left: -1 * currentSlide * slideWidth,
            }}
          >
            {music_data.map((m) => {
              return (
                <div
                  key={m.name}
                  className={s.section}
                  style={{ width: slideWidth }}
                >
                  <div>
                    {m.children.map((track) => {
                      return (
                        <div key={track.name}>
                          <div
                            onClick={() => updateCurrentConcurrent(track.name)}
                            className={s.trick_item}
                          >
                            {track.name}
                            <span style={{ fontSize: 20 }}>
                              {currentConcurrent.find(
                                (_track) => _track.name === track.name
                              )?.playing ? (
                                <IconPause />
                              ) : (
                                <IconPlay />
                              )}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "none" }}>
          {currentConcurrent
            .filter((track) => track.playing)
            .map((track) => {
              return (
                <audio
                  key={track.name}
                  loop={true}
                  autoPlay={true}
                  controls={true}
                  src={track.url}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
