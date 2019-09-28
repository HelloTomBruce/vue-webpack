import request from "@/api/request";
import API from "@/api/url";

const playModules = {
    namespaced: true,
    state:      {
        playList: [],
        playing:  {
            cover: "",
            url:   "",
            lrc:   []
        }
    },
    actions: {
        setPlay: ({ commit }, id) => {
            let url = API.songDetail;
            let params = {
                ids: id
            };
            request
                .get(url, params)
                .then(res => {
                    commit("setPlay", {
                        cover: res.data.songs[0].al.picUrl
                    });
                })
                .catch(() => {});
        },
        setPlayingUrl: ({ commit }, id) => {
            let params = {
                id: id
            };
            request
                .get(API.songUrl, params)
                .then(res => {
                    commit("setPlayingUrl", res.data.data[0].url || "");
                })
                .catch(() => {});
        },
        setPlayingLyric: ({ commit }, id) => {
            let params = {
                id: id
            };
            request
                .get(API.songLyric, params)
                .then(res => {
                    let lyric = res.data.lrc.lyric || "";
                    lyric = lyric.replace();
                    let lyricArr = lyric
                        .split("\n")
                        .slice(0, -1)
                        .map(item => {
                            let lrcStr = item.split(/\[[\d:.]+\]/)[1];
                            let time = item.match(/\[[\d:.]+\]/)
                                ? item.match(/\[[\d:.]+\]/)[0]
                                : "";
                            return {
                                str: lrcStr,
                                time
                            };
                        });
                    commit("setPlayingLyric", lyricArr);
                })
                .catch(() => {});
        },
        setPlayList: ({ commit }, payload) => {
            commit("setPlayList", payload);
        }
    },
    mutations: {
        setPlay: (state, { cover }) => {
            state.playing.cover = cover;
        },
        setPlayingUrl: (state, url) => {
            state.playing.url = url;
        },
        setPlayingLyric: (state, lrc) => {
            state.playing.lrc = lrc;
        },
        setPlayList: (state, list) => {
            state.playList = list;
        }
    },
    getters: {
        getPlaying:  state => state.playing,
        getPlayList: state => state.playList
    }
};

export default playModules;
