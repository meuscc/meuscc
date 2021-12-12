import React, { useEffect, useRef, useState } from "react";
import music_data from "./music_data";
import s from "./Music.module.scss";
import { IconMusic, IconPause, IconPlay } from "./icons";

declare const Plyr: any;

const slideWidth = 375;
const currentTrackStorageKey = "current_music_track";
const musicData = music_data.map((v) => ({ ...v, type: v.type[1] }));
const musicTypes = Array.from(new Set(musicData.map((v) => v.type)));

export default function Music() {
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTrack, setCurrentTrack] =
    useState<{ name: string; uri: string }>();
  const currentTrackRef = useRef(currentTrack);
  const audioRef = useRef<any>();
  const playerRef = useRef<any>();

  useEffect(() => {
    currentTrackRef.current = currentTrack;
    if (currentTrackRef.current) {
      localStorage.setItem(
        currentTrackStorageKey,
        JSON.stringify(currentTrackRef.current)
      );
    }
  }, [currentTrack]);

  useEffect(() => {
    setTimeout(() => {
      playerRef.current = new Plyr(audioRef.current, {
        controls: [
          "play", // Play/pause playback
          "progress", // The progress bar and scrubber for playback and buffering
          "current-time", // The current time of playback
          "duration", // The full duration of the media
          "volume", // Volume control
        ],
      });
      const persistedCurrentTractString = localStorage.getItem(
        currentTrackStorageKey
      );
      if (persistedCurrentTractString) {
        const persistedCurrent = JSON.parse(persistedCurrentTractString);
        setCurrentTrack(persistedCurrent);
        playerRef.current.source = {
          type: "audio",
          title: "Example title",
          sources: [
            {
              src: persistedCurrent.uri,
              type: "audio/mp3",
            },
          ],
        };
      } else {
        playerRef.current.source = {
          type: "audio",
          title: "音乐",
          sources: [
            {
              src: musicData[0].uri,
              type: "audio/mp3",
            },
          ],
        };
      }

      playerRef.current.on("ended", (event: any) => {
        const currentTrackIndex = musicData.findIndex(
          (v) => v.name === currentTrackRef.current?.name
        );
        const nextCurrentTrack = musicData[currentTrackIndex + 1];
        if (!nextCurrentTrack) {
          return;
        }
        setCurrentTrack(nextCurrentTrack);
        playerRef.current.source = {
          type: "audio",
          title: "音乐",
          sources: [
            {
              src: nextCurrentTrack.uri,
              type: "audio/mp3",
            },
          ],
        };
        playerRef.current.play();
      });
    }, 2000);
  }, []);

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
        <div style={{ padding: "0" }}>
          <audio ref={audioRef} autoPlay={false} loop={false} />
        </div>
        <div className={s.genre_nav}>
          {musicTypes.map((type, k) => {
            return (
              <span
                key={type}
                onClick={() => setCurrentSlide(k)}
                className={""}
              >
                {type}
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
            {musicTypes.map((type) => {
              return (
                <div
                  key={type}
                  className={s.section}
                  style={{ width: slideWidth }}
                >
                  <div>
                    {musicData
                      .filter((track) => track.type === type)
                      .map((track) => {
                        return (
                          <div key={track.name}>
                            <div
                              onClick={() => {
                                setCurrentTrack({ ...track });
                                playerRef.current.source = {
                                  type: "audio",
                                  title: "Example title",
                                  sources: [
                                    {
                                      src: track.uri,
                                      type: "audio/mp3",
                                    },
                                  ],
                                };
                                playerRef.current.play();
                              }}
                              className={s.trick_item}
                            >
                              {track.name
                                .replace(/_/g, " ")
                                .replaceAll(/-/g, " - ")}
                              <span style={{ fontSize: 20 }}>
                                {track.name === currentTrack?.name ? (
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
      </div>
    </div>
  );
}
