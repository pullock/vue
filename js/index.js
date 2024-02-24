new Vue({
    el: '#input',
    data: {
        string: 'Введите ваш текст...',
        state: false
    },
    methods: {
        change: function(){
            return this.string;
        },
        radio_1: function(){
            return this.state = 'Сделать';
        },
        radio_2: function(){
            return this.state = 'Сделано';
        },
        button: function(){
            let block = document.querySelectorAll('.text__block');
            block[0].innerHTML += '<div class="text">' +
                        '<div class="text__end">' + this.string + '</div>' +
                        '<div class="status__end">' + this.state + '</div>' +
                    '</div>';
            
            this.string = '';
        }
    }
})