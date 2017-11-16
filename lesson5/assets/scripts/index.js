;(function () {
    // Task 1
    function arrFilter(obj) {
        return this.filter(function (item) {
            return repeat(item, obj);
        });

        function repeat(selfArr, selfObj) {
            return Object.keys(selfObj).reduce(function (curr, next) {
                if (typeof selfObj[next] === 'object') {
                    if (selfObj[next].constructor.name === 'RegExp') {
                        return curr && (selfObj[next].test(selfArr[next]));
                    } else {
                        return repeat(selfArr[next], selfObj[next])
                    }
                } else {
                    return curr && (selfObj[next] === selfArr[next]);
                }
            }, true)
        }
    }

    (function () {
        Array.prototype.filterWhere = arrFilter;

        var users = [
            {id: 1, name: 'Max', photo: {url: 'ava1.jpg', size: {width: 100, height: 50}}},
            {id: 2, name: 'Bob', photo: {url: 'avatar.png', size: {width: 800, height: 640}}},
            {id: 3, name: 'Nick', photo: {url: 'img.jpg', size: {width: 440, height: 320}}}
        ];

        var usersWithBigPhoto = users.filterWhere({photo: {size: {height: /\d{3}/}}});
        console.log(usersWithBigPhoto);
        delete Array.prototype.filterWhere;
    })();

    // Task 2
    (function () {
        function SuperArray() {
            this.filterWhere = arrFilter;
        }

        SuperArray.prototype = Array.prototype;

        var users = new SuperArray();
        users.push({id: 1, name: 'Max', age: 18}, {id: 2, name: 'Bob', age: 20}, {id: 3, name: 'Nick', age: 18});
        console.log(users.filterWhere({age: 18}));
        console.log([].filterWhere);
    })();

    // Task 3
    (function () {
        Function.prototype.extend = function (obj) {
            var func = this.prototype;

            if (arguments.length > 0) {
                for (var key in obj) {
                    func[key] = obj[key];
                }
            }
            return function () {
                return func;
            }
        };

        var SuperArray = Array.extend({
            filterWhere: arrFilter
        });
        var users = new SuperArray();
        console.log(users.push);
    })();
})();