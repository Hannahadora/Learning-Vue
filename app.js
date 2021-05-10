const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Hannah Chiamaka',
            age: 23
        }
    },
    
    methods: {
        // changeTitle() {
        //  this.title = 'Things fall apart'    
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')