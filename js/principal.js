var app = new Vue({
    el: '#app',
    data: {
        lista: [
            {
                nombre:'Juan Carlos',
                promedio: '10',
                estado: false
            },
            {
                nombre:'Celina',
                promedio: '17',
                estado: true
            },
            {
                nombre:'Jose',
                promedio: '18',
                estado: true
            }
        ],
        nombre: '',
        promedio: ''
    },
    methods: {
        agregarNota: function () {
            estadoA = false;
            if (this.promedio >= 12.5) {
                estadoA = true;
            }
            if (this.nombre != '' && this.promedio != '') {
                this.lista.push(
                    {
                        nombre:this.nombre,
                        promedio: this.promedio,
                        estado: estadoA
                    }
                );
                //Vaciar campos
                this.nombre = '';
                this.promedio = '';
            } else {
                alert('Ingrese el nombre y promedio del estudiante');
            }
        }
    },
})