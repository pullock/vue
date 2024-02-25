new Vue({
    el: "#app",
    data: {
        text: 'Текст инпута',
        state: 'Добавлено',
        tasks: [
        ]
    },
    methods: {
        addTask: function(){
            
            if (this.text.indexOf('1') != -1){
                this.state = 'Сделать';
            } else {
                this.state = 'Сделано';
            }

            this.text = this.text.replace('1', '');

            this.tasks.push({
                textTask: this.text,
                stateTask: this.state
            })
        }
    }
})