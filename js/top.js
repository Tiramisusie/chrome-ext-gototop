//滚动动画
var scrolling = function(e){
    e.preventDefault();
    var timer;

    timer = setInterval(function () {
        if( document.body.scrollTop > 500 ){
            document.body.scrollTop -= 500;
        } else {
            document.body.scrollTop = 0;
            clearInterval( timer );
        }
    }, 20 );
};

var img = document.createElement('img');
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAhWSURBVHic5ZttcFRXGcd/z72bbDAkUNqI1A8qWDpDYaYj1HGo1mJLXmor8rIbEEtDQjPiN1vRLyrjqONMfZtOrZ22ZJOCNGQXilLJy8ZYCoNQdVpbEZy0OsUKHUuxkIB52d3z+CGbFyDZe3ZzN3Gm/5lM7t77v//znP99zrn3nHOvqCrvZwSmq+BYOOb2Mmubqumpi1X+YrricKar4AtO8QLQH4rII5ENnTdOVxzTYkBTuPNW17gvpn8WkzIvNm1o/+h0xCJT3QfsCMeXOmgXMOuqQ2cFs3JztOrkVMYzpRnQsD6+2EE7uLbyADcqzpGGcMcnpzKmKcuAp9e3LnSNexiY60HtcYyzrGbvytenIq4pyYDIqgMlrnHb8a48QKlxdF8sHJuR77hgqppAUfBR4GP2J+iSS1ryRN7iGYO8N4GG6vgXRXV/bmfrltpoZYO/EV2JvBqwc03X9clA8hRQlqPEhYGC5Pytuz//np9xjUVem0AykPg6uVceYHbRYOCbfsUzHvKWAemr/yYwc3JK0pdM6YL6fRVv+xHX1chbBiTd5ENMuvIAOiPg8J3J64yPvGRAZNWBEoLBM0CJT5KDAwXJD+WjL8hPBhQGV+Nf5QEKC5MFq33UG0F+DBC+5Lukmmq/NYd0fW4Cu9bEP5gI6FnA9VUYkslAYl79s/e+66eo7xMigwUsF+UEICAytFdFQAB06H96/8j21b9REEHT+0UAcROBFUDMz3infDj8/wbfMyBS3RFWo3m7vabmlO2rf3Jpwi89Xw1oWNv6EXHdFhnO/DzAvXh+CXDCLz1fr5TjBJb4qTduGYZbfNXzU8xg8m6AqvpqgK9NQJAsDJA+VJ/HoR9lMfAJq7PE3wzwtxMUPmzBOqfwAzdR+EzN/jsvDO+MhOJViP4KKPQoxNcpdL97a09DRXmwLlrx6NjKA9TGyttU9QEg431ZUR8GWKPw2wCPpz/duzlW8euJjtbFKveI6k6PMvwcY0zegF2b4sXD2+KRAYp4To2pI8c9KCMZMLbsXJGzAZF1ncsi4fiORL+ejYVjhQCKx2Ol6r+9dMXIax6UEZMT/ea1SKjjqaZ1nTfZxJxRzBZPfeE3HwgUFTyOQ83wvovOdQuAUyCngWUTnixS4KWvYuaODg3GxT9g+OrLfIT5RkxdY3V8nzjmGzXNlW9aVgXIMgOeXt+6MFBU8EcYrTyAm0otBBDlDY/CHvQqQ5GvZT5ON0CqX8ZedUdVQyYlnY3htqzmIK0NeOyetqBr3P3AonEO35z+n9EAhVWN4bbPTnS8obrzdoHPZNIQTRugqfHS/uOKczCbvsHagOKZ7vcYv/KoyEKAFJrRAMBVnHgk3F433G8AxMKxwsZwfKuoiXvFIY52AzjiLJyAcluy3zR76QzDqg9oXNc1H0cfnpihQxlg9A1cz4FQIciOXkp/Hgl3vAwYKF0GWmQTi1HpHirS3MQEgy5F7msKty6pid7zFy89qwxQN1nuwb0ZYMtzVWdA+mw0gSJgOfDp9LYV3ESwG0azbiIY3BobPbsmoHqXB6OsafWh2SgK+ncrzdzwzpgnSI9bnyy1EbTsA2TCjmsY6g5adYSTRDfAExsPXgfc4BHRfBtB206w1ItgHB1KSeFlS80cIMcAZgwGFluQPWMGewMGvQiCLgIwRo9YamYNEdMFoMIKb7aet9G0NcAireVzALOk9yUsDMsBg4m+5BEATZflEY/V9LmVAQKnLGjLdq7puj4UDfUBf7LRzRLH6w/c+9+hN0f0U15k9dMAo2pjgJMqSJQDiOJ7MxDoAujRkuVA0JMv6p8Bjjh/s+EpUglgxH8DjDhdAGKV/qDKWzY8KwOSxioDQKlAEDcRPAoYq3PscCk1e84fAERsDdDf2vCsDJjt9LwO9FhQ5zasbbs1/bDi+RhqC0UO1z+5NBFZdaBE0YmH26PoNXPKjtpoWxkQioYGUVpsuMhQMxCl3YpvI6n6OwANBu/AbvzSZbt6ZD8fINpoRUsbYBzneWttDzjp9u+I3Gd1gtBqrW1LrI1WHgNsOsPlu7/cVvqvRb8/BvixlP1uTWzlq99dcSigqmst+Of7NWg9HM5qRkgUiyyQxEAqMHP79u1GVA9moz+umsgLKDqvLFmMRccqyM++Gr3zkq1+VgYEUtIEXMhIEv1+bfPKswDqyKSbgTFDj7/10bsvKjzgQb9QWJh6LBv9rAy4/7nyd0AzzdmdTM6+4UfDP/o12AEMZFPGNRDpGt6si1a0AxNmlar+ZOMvq2zuViPIelq8NlrZBOP38CqydWzvm07FQ9mWMQyBf9ZFK64Yhzg432L81aNXSqX3kWzLyGltUFyp15T+lStWafRoXUvF4au5AwXJDTOMO973AZ5ISsE1s0s10ZV/bqyO71XV0JiI+ozjbAztCWU9CMvJgM3N5W81hDu+IrCLdBYJzu7xuOl3+96LhWPu5eIyz3UBgOLL5xKhaCg10XFV0woyaoDoti177rZ7Wr0KOa8M1UUrntWh9YEUgBheyMS/6My8zVwe6LP4u3zRlGRcAldxRz6mENUf17ZUPJ5rPSa1NlgXrdglovcDKce45zJxt+ypOg684imqNGzZW5lxeczRZDegoA9vjlVuyybma7QmczLA5pbKZkHWb9p/1388ycLwRxAngbGGHQTeBnpNQeDbnmVGq84Z1XW10cqf5hLzFSFN5WtyuzbFixP9esao1joitwMPARjVFYhzWoQ76lrKn5mygJiG9wQj4faa2mhl09PrOm5xHU4A50romZep08snpvVFyUi44yWUV2tjFfXTFcO0fTsMoKoRRE5PZwzTakBRUJsvF5fZLqXlBe/7d4X/B5pbDhSBsxLaAAAAAElFTkSuQmCC';

var a = document.createElement('a');
a.setAttribute( 'href', '#' );
a.addEventListener( 'click', scrolling );
a.style.position = 'fixed';
a.style.right = '100px';
a.style.bottom = '100px';
a.style.visibility = 'hidden';
a.style.zIndex = '999999';

a.appendChild(img);

document.body.appendChild(a);

window.onscroll = function(){
    if(window.pageYOffset >= 200){
        a.style.visibility = 'visible';
    } else {
        a.style.visibility = 'hidden';
    }
};