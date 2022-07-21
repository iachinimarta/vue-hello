var app = new Vue({
    el: '#app',
    data: {
    message: 'E fino a qui.. ci siamo.',
    },
    methods: {
        img: function() {
            let imgBox = document.getElementById('img');
            imgBox.innerHTML += `<img src="https://picsum.photos/200">`;
        }
    }
});