(function() {

    angular
        .module('storeApp')
        .controller('StoreController', StoreController);

    function StoreController() {
        this.pizzas = [
            {
                name: 'Margherita',
                cover: 'img/margarita.jpg',
                price: 5.1
            },

            {
                name: 'Margherita Chile',
                cover: 'img/margarita-chili.jpg',
                price: 5.2
            },

            {
                name: 'Hawaii',
                cover: 'img/gavayskaya.jpg',
                price: 7.15
            },

            {
                name: 'Havana',
                cover: 'img/gavana.jpg',
                price: 5.85
            },

            {
                name: 'Hunter',
                cover: 'img/hunter.jpg',
                price: 6.8
            },

            {
                name: 'Jamaica',
                cover: 'img/jamaica.jpg',
                price: 6.9
            },

            {
                name: 'Munich',
                cover: 'img/munich.jpg',
                price: 6.5
            },

            {
                name: 'Nicosian',
                cover: 'img/nicosya.jpg',
                price: 6.5
            },

            {
                name: 'Pepperoni',
                cover: 'img/pepperoni.jpg',
                price: 5.8
            },

            {
                name: 'Picante',
                cover: 'img/picante.jpg',
                price: 6.15
            },

            {
                name: 'Student',
                cover: 'img/student.jpg',
                price: 5.35
            },

            {
                name: 'Vegan',
                cover: 'img/vega.jpg',
                price: 5.2
            }
        ];

        this.basket = [];
        this.amount = 0;

        this.addToBasket = function(item) {
            this.basket.push(this.pizzas[item]);
            this.title = this.basket.slice(-1)[0].name;
            this.amount += this.basket.slice(-1)[0].price;
        }
    }
})();