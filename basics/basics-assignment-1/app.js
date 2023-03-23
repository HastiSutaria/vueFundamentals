const app = Vue.createApp({
    data(){
        return {
            name : 'Hasti',
            age : 20,
            imgLink : 'https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg'
        }
    },
    methods: {
        random(){
            return Math.random()
        }
    }
})

app.mount('#assignment')