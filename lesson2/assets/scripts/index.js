var $ = require("jquery");

// Task 1
function calcArgs() {
    return arguments.length;
}

// Task 2
function calcStringArgs() {
    var len = 0;
    for (var i = 0; i < arguments.length; i++) {
        typeof arguments[i] === 'string' ? len++ : false;
    }
    return len;
}

// Task 3
function sumArgs() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        typeof arguments[i] === 'number' ? sum += arguments[i] : false;
    }
    return sum;
}

// Task 4
$(function () {
    $('.task-4 [type="text"]').on('keyup', function () {
        var checkbox = $(this).siblings('input[type="checkbox"]');

        if ($(this).val() === 'JavaScript') {
            checkbox.prop('checked', true);
        } else {
            checkbox.prop('checked', false)
        }
    });
});

// Task 5
$(function () {
    $('.task-5 form').on('submit', function (e) {
        e.preventDefault();

        var numbers = $(this).find('input[name="numbers"]'),
            letters = $(this).find('input[name="letters"]'),
            agreement = $(this).find('input[name="agreement"]'),
            type = $(this).find('input[name="type"]');

        if (!$.isNumeric(numbers.val()) && !'') {
            alert('В первом поле должно быть число');
        }
        if ($.isNumeric(letters.val()) && !'') {
            alert('Во втором поле должна быть строка');
        }
        if (!agreement.is(':checked')) {
            alert('Чекбокс не отмечен');
        }
        if (!type.is(':checked')) {
            alert('Радио не выбрано');
        } else {
            $(this).unbind('submit').submit();
        }
    });
});

// Task 6
(function (a) { console.log(a(function (b) { return b + b; })); })(function (c) { return c(2) * c(3); });

var funcB = function (b) {
    return b + b;
};
var funcA = function (a) {
    console.log(a(funcB));
};
var funcC = function (c) {
    return c(2) * c(3);
};
funcA(funcC);
