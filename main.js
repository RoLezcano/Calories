const app = Vue.createApp({
    data() {
        return {
            selectedProduct: 0,
            totalCalories: 0,
            products: [ {product: 'Seleccione el producto', calories: 0},
                        {product: 'Acelga', calories: 0.16}, {product: 'Almendra', calories: 7}, {product: 'Arroz', calories: 3.4}, {product: 'Atun', calories: 0.9},
                        {product: 'Banana', calories: 0.89}, {product: 'Batata', calories: 0.86}, {product: 'Brocoli', calories: 0.34}, {product: 'Calabaza', calories: 0.26},
                        {product: 'Cebolla', calories: 0.40}, {product: 'Cereal comun', calories: 3.7}, {product: 'Ciruela', calories: 0.45}, {product: 'Coliflor', calories: 0.25}, 
                        {product: 'Durazno', calories: 0.39}, {product: 'Fideos', calories: 3.33}, {product: 'Huevo', calories: 74}, {product: 'Jugo de naranja', calories: 0.45},
                        {product: 'Leche', calories: 0.37}, {product: 'Lechuga', calories: 0.15}, {product: 'Manzana', calories: 0.52}, {product: 'Morron', calories: 0.35},
                        {product: 'Naranja', calories: 0.45}, {product: 'Nuez', calories: 20}, {product: 'Pan Lactal', calories: 45}, {product: 'Papa al horno', calories: 1},
                        {product: 'Papa hervida', calories: 0.8}, {product: 'Pechuga de pollo', calories: 1.65}, {product: 'Pera', calories: 0.57}, {product: 'Queso port salud', calories: 2.1},
                        {product: 'Tomate', calories: 0.22}, {product: 'Zanahoria', calories: 0.37}, {product: 'Zapallito verde', calories: 0.16} ],
        }
    },
    methods: {
        // changeSelected(index) {
        //     this.selectedProduct = index
        // }
        updateTotalCalories() {
            this.totalCalories = this.totalCalories + (this.products[this.selectedProduct].calories * prompt('Ingrese la cantidad de gramos o de unidades consumidas'))
        },
        addProduct() {
            let newProduct = {product: prompt('Ingrese el nombre del producto'), calories: prompt('Ingrese las calorias por gramo o por unidad')}
            this.products.push(newProduct)
            this.products.sort((a, b) => (a.product > b.product) ? 1 : -1)
        },
        deleteProduct() {
            let productToDelete = prompt('Ingrese el nombre del producto a eliminar')
            this.products = this.products.filter(elem => elem.product != productToDelete);
        }
    },
    computed: {
    }
})

// app.mount('#app')