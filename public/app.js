
function something()
{
    var x = window.localStorage.getItem('bbb');

    x = x * 1 + 1;

    window.localStorage.setItem('bbb', x);

    alert(x);

}

function add_to_cart(id)
{
    var key = 'product_' + id;

    var x = window.localStorage.getItem(key + id);
    x = x * 1 + 1;
    window.localStorage.setItem(key, x);
    // Вывод количества item ов в корзине

    update_orders_input();
    //alert('Item in your cart: ' + cart_get_number_of_items())
}

function update_orders_input()
{
    var orders = cart_get_orders();
    $('#orders_input').val(orders);
}

function cart_get_number_of_items()
{
    var cnt = 0;

    for(var i = 0; i < window.localStorage.length; i++)
    {
        var key = window.localStorage.key(i);// получаем ключ
        var value = window.localStorage.getItem(key); // получаем значение, анлог в руби: hh['bbb'] = x
        if(key.indexOf('product_') == 0)
        {
          cnt = cnt + value * 1;
        }
    }
    return cnt;
}

function cart_get_orders()
{
    var orders = 0;

    for(var i = 0; i < window.localStorage.length; i++)
    {
        var key = window.localStorage.key(i);// получаем ключ
        var value = window.localStorage.getItem(key); // получаем значение, анлог в руби: hh['bbb'] = x
        if(key.indexOf('product_') == 0)
        {
            orders = orders + key + '=' + value + ',';
        }
    }
    return orders;
}