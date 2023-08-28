const app = Vue.createApp({
    // data: function() {

    // }

    data() {    
        return {
            courseGoal:  'Finish the course and learn Vue!'
            , courseGoalA : '잘 끝내!'
            , courseGoalB : '끝났어'
            , courseGoalHtmlTag : '<h2>잘 끝났어?</h2>'
            , vueLink: 'https://vuejs.org'
        };
    },
    methods: {
        // outputGoal: function() {

        // }

        outputGoal() {
            const randomNumber = Math.random();
            if ( randomNumber < 0.5) {
                return 'Learn Vue!'
            }else {
                return 'master Vue!'
            }
        },

        outputGoal2() {
            const randomNumber = Math.random();
            if ( randomNumber < 0.5) {
                return this.courseGoalA;
            }else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');

