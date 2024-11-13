app.service("crudService", function($http) {


    //Obter todos os celulares cadastrados

    this.ObterCelulares = function() {

        return $http.get("/api/v1/public/celulares");
    }


    //Obter por id

    this.ObterCelularPorId = function (id) {
        return $http.get("/api/v1/public/celular/" + id);
    }


    //Atualizar celular
    this.AtualizarCelular = function(celular) {
        var response = $http({
            method: "put",
            url: "/api/v1/public/putcelular",
            data: JSON.stringify(celular),
            dataType: "json"
    });

        return response;
    }

    //Incluir celular
    this.AdicionarCelular = function (celular) {
        var response = $http({
            method: "post",
            url: "/api/v1/public/postcelular",
            data: JSON.stringify(celular),
            dataType: "json"
        });

        return response;
    }


    //Excluir celular
    this.ExcluirCelular = function (id) {

        var response = $http({
            method: "delete",
            url: "/api/v1/public/deletecelular/" + JSON.stringify(id)
           
        });

        return response;
    }



});