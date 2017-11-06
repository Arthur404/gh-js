;(function () {
    // Task 1
    var form = document.querySelector('.task-1 form');

    form.addEventListener('submit', function (e) {
        var errors = [],
            numbers = document.querySelector('[name="numbers"]').value,
            letters = document.querySelector('[name="letters"]').value,
            agreement = document.querySelector('[name="agreement"]'),
            types = document.querySelectorAll('input[name="type"]'),
            type = 0;

        if (!/^\d+$/g.test(numbers)) {
            errors.push('Invalid numbers');
        }
        if (!/^[a-d]+$/.test(letters)) {
            errors.push('Invalid letters');
        }
        if (!agreement.checked) {
            errors.push('Agreement is unchecked');
        }
        for(var i = 0; i < types.length; i++) {
            if(types[i].checked === true) {
                type = types[i];
            }
        }
        if (!type.checked === true) {
            errors.push('Type is unchecked');
        }
        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });

    // Task 3
    function findUpperCase(str) {
        var regexp = /[a-z]*[A-Z]+[a-zA-Z]+/g;
        return str.match(regexp);
    }

    // Task 4
    var list = document.querySelectorAll('ul li'),
        input = document.querySelector('.task-4 input');

    list = Array.prototype.slice.call(list);

    list.forEach(function (item) {
        input.addEventListener('keyup', function () {
            var reg = this.value;
            regexp = new RegExp(reg);
            if (regexp.test(item.textContent)) {
                if (reg) {
                    item.innerHTML = item.textContent.replace(reg, '<span class="highlight">'+reg+'</span>');
                } else {
                    item.innerHTML = item.textContent;
                }
                item.classList.remove('hidden');
            } else {
                item.innerHTML = item.textContent;
                item.classList.add('hidden');
            }
        })
    })
})();