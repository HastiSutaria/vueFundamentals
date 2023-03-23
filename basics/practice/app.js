const app = Vue.createApp({
    data(){
        return{
            courseGoal: 'Learning Vue',
            vueLink : 'https://vuejs.org/',
            todos : ['happy', 'sad']
        }
    },
    methods: {
        output(){
            if (Math.random() > 0.5){
                return 'Master Vue!'
            }
            else {
                return 'Learn Vue!'
            }
        }
          
    }
})

app.mount('#user-goal')