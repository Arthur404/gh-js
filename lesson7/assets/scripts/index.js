;(function () {
    var arrImg = [
      'https://s1.1zoom.ru/big0/930/Coast_Sunrises_and_sunsets_Waves_USA_Ocean_Kaneohe_521540_1280x775.jpg',
        'http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg',
        'http://cdn.fishki.net/upload/post/2017/04/21/2273492/2dce7fb4883772576d32a95fcae-prev.jpg',
        'http://mirpozitiva.ru/uploads/posts/2016-09/1474011210_15.jpg',
        'http://bm.img.com.ua/nxs/img/prikol/images/large/3/9/315193.jpg',
        'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg',
        'http://cdn.fishki.net/upload/post/2017/03/19/2245758/tn/02-funny-cat-wallpapercat-wallpaper.jpg',
        'https://s00.yaplakal.com/pics/pics_original/5/5/3/8037355.jpg',
        'http://minionomaniya.ru/wp-content/uploads/2016/01/%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%BF%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8.jpg',
        'https://i.mycdn.me/i?r=ADHEiBM5u3F0_-zi1E-_K23ZVROjf365gi3gLK86JyqOLiFEKHwKiL9QuGcq4J-B13c'
    ];

    var container = document.getElementById('root');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', loadImg);

    function loadImg() {
        var promise = Promise.resolve();

        arrImg.forEach(function (url) {
            promise = promise.then(function () {
                return new Promise(function (done, fail) {
                    var img = new Image;
                    img.src = url;
                    img.addEventListener('load', function () {
                        container.appendChild(img);
                        done();
                    });
                    img.addEventListener('error', function () {
                        console.log(fail(url));
                    });
                });
            });
        });
    }

})();