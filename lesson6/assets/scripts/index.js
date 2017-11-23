;(function () {
    var products = document.querySelectorAll('#shop [data-product]'),
        body = document.body,
        cart = document.querySelector('[data-cart]'),
        tbody = cart.querySelector('tbody'),
        icon = cart.querySelector('[data-icon]'),
        rect = icon.getBoundingClientRect();

    Array.prototype.forEach.call(products, function (product) {
        product.addEventListener('mousedown', function (e) {
            var thisProduct = this.cloneNode(true),
                productDND = this.querySelector('[data-dnd]'),
                clone = productDND.cloneNode(true),
                box = productDND.getBoundingClientRect(),
                getProductId = tbody.querySelectorAll('[data-product-id]'),
                prevCart,
                helperOffset = {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                },
                offset = {
                    top: e.pageY - helperOffset.top,
                    left: e.pageX - helperOffset.left
                },
                productName = thisProduct.querySelector('[data-product-name]').textContent,
                productPrice = thisProduct.querySelector('[data-product-price]').textContent;

            clone.classList.add('drugging');
            clone.style.width = productDND.offsetWidth + 'px';
            clone.style.top = e.pageY - offset.top + 'px';
            clone.style.left = e.pageX - offset.left + 'px';
            body.appendChild(clone);
            clone.ondragstart = function() {
                return false;
            };

            body.addEventListener('mousemove', onBodyMousemove);

            body.addEventListener('mouseup', onBodyMouseup);

            function onBodyMousemove(e) {
                clone.style.top = e.pageY - offset.top + 'px';
                clone.style.left = e.pageX - offset.left + 'px';
                var cloneRect = clone.getBoundingClientRect();

                if (intersectRect(rect, cloneRect) && cart !== prevCart) {
                    cart.classList.add('intersect');
                    prevCart = cart;
                }

                if (!intersectRect(rect, cloneRect) && prevCart) {
                    cart.classList.remove('intersect');
                    prevCart = null;
                }
            }

            function onBodyMouseup() {
                var abort = true;
                if (prevCart) {
                    Array.prototype.forEach.call(getProductId, function (id) {
                        if (id.dataset.productId === thisProduct.dataset.product) {
                            var plusAmount = id.querySelector('[data-product-amount] input');
                            plusAmount.value++;
                            var valPrice = thisProduct.querySelector('[data-product-price]').textContent;
                            var resValPrice = parseFloat(valPrice.replace(/[$]/, ''));
                            id.querySelector('[data-price-amount]').textContent = resValPrice * parseFloat(plusAmount.value) + '$';
                            abort = false;
                        }
                    });
                    if (abort) {
                        var tr = document.createElement('tr');
                        var tdNum = document.createElement('td');
                        var tdName = document.createElement('td');
                        var tdPrice = document.createElement('td');
                        var tdAmount = document.createElement('td');
                        var inputAmount = document.createElement('input');
                        var deleteBtn = document.createElement('input');
                        deleteBtn.type = 'button';
                        deleteBtn.className = 'delete-btn';
                        deleteBtn.setAttribute('data-delete-product', thisProduct.dataset.product);
                        deleteBtn.value = 'Del';
                        inputAmount.type = 'number';
                        inputAmount.className = 'input-amount';
                        tdAmount.appendChild(inputAmount);
                        tdAmount.appendChild(deleteBtn);
                        tr.setAttribute('data-product-id', thisProduct.dataset.product);
                        tdAmount.setAttribute('data-product-amount', '');
                        tbody.appendChild(tr);
                        var tbodyLengthTR = tbody.querySelectorAll('tr');
                        tdNum.setAttribute('data-num', '');
                        tdNum.textContent = tbodyLengthTR.length;
                        tr.appendChild(tdNum);
                        tdName.textContent = productName;
                        tr.appendChild(tdName);
                        tdPrice.setAttribute('data-price-amount', '');
                        tdPrice.textContent = productPrice;
                        tr.appendChild(tdPrice);
                        inputAmount.value = 1;
                        tr.appendChild(tdAmount);
                    }

                    totalPrice();
                }

                activeCart();

                cart.classList.remove('intersect');
                clone.remove();
                prevCart = null;

                body.removeEventListener('mousemove', onBodyMousemove);
                body.removeEventListener('mouseup', onBodyMouseup);
            }
        });
    });

    cart.addEventListener('click', deleteFromCart);

    tbody.addEventListener('change', changeProduct);

    function changeProduct(event) {
        if (event.target.className === 'input-amount') {
            var amountProduct = parseFloat(event.target.value);
            var valPrice = event.target.parentElement.previousSibling;
            var thisProduct = valPrice.parentElement;
            if (amountProduct < 1) {
                thisProduct.remove();
                activeCart();
            } else if (isNaN(amountProduct)) {
                valPrice.style.color = 'red';
                valPrice.textContent = amountProduct;
            } else {
                var productId = thisProduct.dataset.productId;
                var priceProduct = body.querySelector('[data-product="'+ productId +'"]').querySelector('[data-product-price]').textContent;
                var resPrice = parseFloat(priceProduct.replace(/[$]/, ''));
                valPrice.textContent = (amountProduct * resPrice) + '$';
                totalPrice();
            }
        }
    }

    function deleteFromCart(event) {
        if (event.target.className === 'delete-btn'){
            this.querySelector('[data-product-id="'+ event.target.dataset.deleteProduct +'"]').remove();
            totalPrice();
            activeCart();
            var numberProduct = body.querySelectorAll('[data-num]');
            Array.prototype.forEach.call(numberProduct, function (num, i) {
                num.textContent = i+1;
            });
        }
    }

    function totalPrice() {
        var amountPrice = tbody.querySelectorAll('[data-price-amount]');
        var totalPrice = cart.querySelector('[data-total-price]');
        var total = 0;

        Array.prototype.forEach.call(amountPrice, function (price) {
            total += parseFloat(price.textContent.replace(/[$]/, ''));
        });

        totalPrice.textContent = total + '$';
    }

    function activeCart() {
        if (cart.querySelector('[data-product-id]')) {
            cart.classList.add('active');
        } else {
            cart.classList.remove('active');
        }
    }

    function intersectRect(r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    }
})();