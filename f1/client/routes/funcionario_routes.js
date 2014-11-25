if(Meteor.isClient){
Router.map(function () {
  this.route("/", function(){
    this.render("funcionariosList");
  });
  this.route("funcionariosList", {
    path: "/funcionarios/list"
  });
  this.route("funcionarioNew", {
    path: "/funcionario/new",
    template: "funcionarioNew"
  });
  this.route("funcionarioEdit", {
    path: "/funcionario/:_id/edit",
    template: "funcionarioEdit",
    data: function () {
      return {
        funcionario: Funcionarios.findOne(this.params._id)
      };
    }
  });
  this.route("funcionarioDetail", {
    path: "/funcionario/:_id/detail",
    template: "funcionarioDetail",
    data: function () {
      return {
        funcionario: Funcionarios.findOne(this.params._id)
      };
    }
  });
  this.route("dependenteNew", {
    path: "/dependente/:_idFunc/newDependente",
    template: "dependenteNew",
    data: function () {
      return {
        funcionario: Funcionarios.findOne(this.params._idFunc)
      };
    }
  });
  this.route("dependentesList", {
    path: "/dependentes/:_idFunc/list",
    template: "dependentesList",
    data: function() {
      
      return {
        funcionario: Funcionarios.findOne(this.params._idFunc)
      };
    }
  });
  this.route("dependenteEdit", {
    path: "/dependente/:_id/edit",
    template: "dependenteEdit",
    data: function () {
      return {
        dependente: Dependentes.findOne(this.params._id)
      };
    }
  });
});
}