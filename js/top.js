var body = document.body;
body.setAttribute( 'id', 'congsusie' );

var img = document.createElement('img');
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGWSURBVFiF7Ze/S8NAFMc/jS0q9A/wLzABVzWLlooiiHVy8B9w0s2/wsmtmzgquIhQnERQB73BQaFwp5sOooIiiGiD1CERquR6TUybDv1Ahty9e++bdz9eLmMPj+eBVaAE5OgMHlABytkg+HqHAjcyAWDhf3lalCw6l/YwclaKwQF/ClIl26RvGagmFGcE2IwqoCqVOE8iumO72r6unoI9x3Y/DeO9FvwA9Gva680GDhmc1oAl4AvYBQYM9mFkTMp1fACLUokDAMd254F9IB/VUZw18A4s/AQHkEocATPAS7sFvAFzUonDvx1SCQEUgYd2CXgFZqUSJzoDqcQVMAncJi3gGZiWSpyZDKUSN/iV7jopAU/AlFTiohWHgYg7/Exc/lfAPVAMUhsJqcQj/ppomjXTNtwBCo7tFhratqQStTBjx3b7gRWgr+E5BUbRlH2TgLWQtm38QyiMQWDD4PMXcc6BeowxPQE9AVriVMMxx3Z1uyByNYwj4DjGGC2p/5J1hQDPaNU+PAv/lpoWlSxQDl5SuZ5/A+vkZ0FXwYF3AAAAAElFTkSuQmCC';

var a = document.createElement('a');
a.setAttribute( 'href', '#congsusie' );
a.style.position = 'fixed';
a.style.right = '100px';
a.style.bottom = '100px';
a.style.visibility = 'hidden';
a.style.zIndex = '999999';

a.appendChild(img);

body.appendChild(a);

window.onscroll = function(){
    if(window.pageYOffset >= 200){
        a.style.visibility = 'visible';
    } else {
        a.style.visibility = 'hidden';
    }
};