// Variables
const fichaBlanca = 1;
const fichaNegra = 2;
const casillaVacia = 0;

// Imagina que ves el tablero desde abajo a traves de un cristal y la zona de los 2 es la de arriba
const tableroInicial = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0]
];

// Funciones
let app = new Vue({
    el: '#app',
    data: {

        tableroJuego: [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],

        fichaBlanca: fichaBlanca,
        fichaNegra: fichaNegra,
        casillaVacia: casillaVacia,

        fichaEnLaMano: false,
        fichaSeleccionada: 0,

        alternancia: true


    },
    mounted: function () {
        this.nuevaPartida();
    },
    methods: {
        nuevaPartida: function () {
            this.tableroJuego = tableroInicial.reverse();
        },
        moverFicha: function (columna, casilla) {
            if (!this.fichaEnLaMano) {
                this.fichaSeleccionada = 0;
                this.fichaSeleccionada = this.tableroJuego[parseInt(columna)][parseInt(casilla)];
                this.tableroJuego[parseInt(columna)][parseInt(casilla)] = this.casillaVacia;
            } else {
                this.tableroJuego[parseInt(columna)][parseInt(casilla)] = this.fichaSeleccionada;
            }
            this.fichaEnLaMano = !this.fichaEnLaMano;
            this.alternancia = !this.alternancia;
        },
    },
    computed: {
        actualizarTablero: function () {
            if (this.alternancia) {
                return this.tableroJuego;
            } else {
                return this.tableroJuego;
            }
        },
    },
})