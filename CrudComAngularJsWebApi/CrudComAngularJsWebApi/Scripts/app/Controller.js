app.controller("crudCtrl", function($scope, crudService) {

    $scope.divCelular = false;

    obterCelulares();

    function obterCelulares() {

        // debugger;

        var celularesData = crudService.ObterCelulares();

        celularesData.then(function (celular) {

            $scope.celurares = celular.data;
        }, function () {

            toastr["error"]("Erro ao obter os celulares", "DevMedia - CRUD com MVC e AngularJS");
        });

    }

    //obtem por id
    $scope.obterPorId = function (celular) {

        var celularData = crudService.ObterCelularPorId(celular.Id);

        celularData.then(function (_celular) {
            $scope.celular = _celular.data;
            $scope.celularId = celular.Id;
            $scope.Marca = celular.Marca;
            $scope.Modelo = celular.Modelo;
            $scope.Cor = celular.Cor;
            $scope.TipoChip = celular.TipoChip;
            $scope.MemoriaInterna = celular.MemoriaInterna;
            $scope.Action = "Atualizar";
            $scope.divCelular = true;
        }, function () {
            toastr["error"]("Erro ao obter celular por id!", "DevMedia - CRUD com MVC e AngularJS");
        });
    }

    $scope.excluirCelular = function(celular) {

        var celularData = crudService.ExcluirCelular(celular.Id);

        celularData.then(function(data) {

            if (data.status == 200) {

                toastr["success"]("Celular excluído com sucesso!", "DevMedia - CRUD com MVC e AngularJS");
            }
            obterCelulares();
        },function() {
            toastr["error"]("Erro ao excluir", "DevMedia - CRUD com MVC e AngularJS");

            });

    }

    $scope.AdicionarAtualizarCelular = function () {

        var celular = {
            Marca: $scope.Marca,
            Modelo: $scope.Modelo,
            Cor: $scope.Cor,
            TipoChip: $scope.TipoChip,
            MemoriaInterna: $scope.MemoriaInterna
        };
        var valorAcao = $scope.Action;

        if (valorAcao == "Atualizar") {

            celular.Id = $scope.celularId;
            var celularData = crudService.AtualizarCelular(celular);
            celularData.then(function (data) {
                obterCelulares();
                $scope.divCelular = false;
                if (data.status == 200) {
                    toastr["success"]("Celular alterado com sucesso!", "DevMedia - CRUD com MVC e AngularJS");
                }
            }, function () {
                toastr["error"]("Erro ao atualizar!", "DevMedia - CRUD com MVC e AngularJS");
            });
        } else {

            var celularData = crudService.AdicionarCelular(celular);
            celularData.then(function (data) {
                obterCelulares();

                if (data.status == 200) {
                    toastr["success"]("Celular cadastrado com sucesso!", "DevMedia - CRUD com MVC e AngularJS");
                }
                $scope.divCelular = false;
            }, function () {
                toastr["error"]("Erro ao incluir!", "DevMedia - CRUD com MVC e AngularJS");
            });
        }
    }

    $scope.incluirCelularDiv = function () {

        limparCampos();
        $scope.Action = "Adicionar";
        $scope.divCelular = true;
    }

    $scope.Cancelar = function () {
        $scope.divCelular = false;
    };

    

    function limparCampos() {
        $scope.Cor = "";
    }


  

    

});
