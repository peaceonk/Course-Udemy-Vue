
let today = new Date();   
let currentYear = today.getFullYear();
const myBirthYear = 1992;

let myAge = currentYear - 1992;

const app = Vue.createApp({
    data() {    
        return {
            your_name:  'peace Kim'
            , your_age : myAge
            , some_image_url : 'https://i.namu.wiki/i/B0r-BQ-_qNcUA60MgqzcDKwc7a7wFw3R1VlTTpqMsRpteRxCjWqMw26F-3bvzP6HV_BBghawhroq5qkTsKvHW_p5RU5DGUP6poGN0tRyPqyJOPRABtxW4FZ-ksxPlv6J3Uop6b9PYB0vyuqnxYOXqg.webp'
        };
    },
    methods: {

    }
})


app.mount('#assignment');