import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
  }
  const updateStoredTime = throttle(() => {
    player.getCurrentTime().then((currentTime) => {
      localStorage.setItem('videoplayer-current-time', currentTime);
    });
  }, 1000);
  player.on('timeupdate', updateStoredTime);
  console.log(player);  