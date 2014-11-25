Template.dependenteNew.rendered = function () {
    VMasker(this.find("[data-vm-mask-cpf]")).maskPattern("999.999.999-99");
    VMasker(this.find("[data-vm-mask-date]")).maskPattern("99/99/9999");
}

Template.dependenteNew.events({
  "submit form": function(e) {
    e.preventDefault();
    var idFuncionario = this._id;
    var dependente = {
        nome: $(e.target).find("[name= nome]").val(),
        cpf: $(e.target).find("[name= cpf]").val(),
        dataNasc: $(e.target).find("[name= dataNasc]").val(),
         _idFunc: idFuncionario
    }
    Meteor.call("newDependente", dependente, function(error, id) {
      if (error) {
        return alert(error.reason);}
      Router.go("funcionarioDetail", {_id: idFuncionario});
    });},
  "click .cancel": function(e){
    e.preventDefault();
    Router.go("funcionariosList");
  }});