angular.module("JuegoCartas", [])
    .controller("ControladorJuegoCartas", function ($scope) {
        //conjunto cartas
        $scope.cartas = [];
        //conjunto grupos
        $scope.grupos = [];


        $scope.repartir = function () {
            for (i = 0; i < 10; i++) {
                $scope.cartas[i] = new Carta();
            }
             $scope.grupos = [];
        };

        $scope.verificar = function () {
            contadores = $scope.cartas.reduce((acumulador, carta) => {
                acumulador[carta.getIndiceNombre()]++;
                return acumulador;
            }, Array(13).fill(0));

            grupo = ["", "", "Par", "Terna", "Cuarta", "Quinta", "Sexta", "Septima", "Octava", "Novena", "Decima"];
            nombre = ["As", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

            $scope.grupos = contadores
                .map((contador, i) => contador >= 2 ? { tipo: grupo[contador], nombreCarta: nombre[i] } : null)
                .filter(item => item != null);
        };


    });