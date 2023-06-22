const SongsManager = function () {
    const _songs = {};
    const _constantPartOfTheURL = "https://www.youtube.com/watch?v=";

    function _getSongId(url) {
        const startIndex = url.indexOf("=") + 1;
        return url.substring(startIndex);
    }

    function _getFullUrl(songId) {
        return _constantPartOfTheURL + songId;
    }

    function addSong(songName, url) {
        _songs[songName] = _getSongId(url);
    }

    function getSong(songName) {
        console.log(_getFullUrl(_songs[songName]));
    }

    return {
        addSong: addSong,
        getSong: getSong
    };
};

const manager = SongsManager();

manager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
manager.getSong("sax");
manager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
manager.getSong("how long");



