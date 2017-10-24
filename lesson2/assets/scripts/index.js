var $ = require("jquery");

arr = [2,1,5,0,3,4,5,2,3,1,0];

function water(arr) {
    var len = arr.length;
    var q = 0;

    for (var i = 0; i < len; i++) {
        if (isFinite(arr[i])) {
            if (arr[i] > arr[i+1]) {
                q = arr[i] - arr[i+1];
                arr[i+1] = arr[i];
            }
        }
    }
}

water(arr);