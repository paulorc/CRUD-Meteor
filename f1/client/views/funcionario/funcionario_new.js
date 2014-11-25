Template.funcionarioNew.rendered = function () {
    VMasker(this.find("[data-vm-mask-cpf]")).maskPattern("999.999.999-99");
}

Template.funcionarioNew.events({
  "submit form": function(e) {
    e.preventDefault();

    var funcionario = {
      
        nome: $(e.target).find("[name= nome]").val(),
      
         cargo: $(e.target).find("[name= cargo]").val(),
      
         cpf: $(e.target).find("[name= cpf]").val(),
      
    }


    Meteor.call("newFuncionario", funcionario, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      Router.go("funcionarioDetail", {_id: id});
    });
  },
  
  "click .cancel": function(e){
    e.preventDefault();
    Router.go("funcionariosList");
  }
});