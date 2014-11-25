Template.funcionarioEdit.rendered = function () {
    VMasker(this.find("[data-vm-mask-cpf]")).maskPattern("999.999.999-99");
}

Template.funcionarioEdit.events({
  "submit form": function(e) {
    e.preventDefault();
    var currentId = this._id;

    var funcionarioEdits = {
    
      nome: $(e.target).find("[name=nome]").val(),
    
       cargo: $(e.target).find("[name=cargo]").val(),
    
       cpf: $(e.target).find("[name= cpf]").val()
    
    };

    Meteor.call("editFuncionario", funcionarioEdits, currentId, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
      Router.go("funcionarioDetail", {_id: id});
    });
  }/*,

  "click .delete": function(e) {
      if (confirm("Delete this Funcionario?")) {
      var currentId = this._id;
      Meteor.call("deleteFuncionario", currentId, function(error, id) {
        if (error) {
          return alert(error.reason);
        }
        Router.go("funcionariosList");
      }
    )}
  }*/,

  "click .cancel": function(e) {
    e.preventDefault();
    Router.go("funcionariosList");
  }
});