// Завдання 2 - відеоплеєр

// Виконуй це завдання у файлах 02-video.html і 02-video.js. 
// Розбий його на декілька підзавдань:

// Ознайомся з документацією бібліотеки Vimeo плеєра.
// Додай бібліотеку як залежність проекту через npm.
// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre-existing player,
//  але враховуй, що у тебе плеєр доданий як npm пакет, а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію 
// timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок 
// "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом 
// setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, 
// щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function onPlayVideo(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

   let curentTime = Number(localStorage.getItem("videoplayer-current-time"));

  
    player.setCurrentTime(curentTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
    player.on('timeupdate', throttle(onPlayVideo, 1000));
