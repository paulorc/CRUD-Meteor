Template.dependenteEdit.rendered = function () {
    VMasker(this.find("[data-vm-mask-cpf]")).maskPattern("999.999.999-99");
    VMasker(this.find("[data-vm-mask-date]")).maskPattern("99/99/9999");
}

Template.dependenteEdit.events({
  "submit form": function(e) {
    e.preventDefault();
    var currentId = this._id;

    var dependenteEdits = {
    
      nome: $(e.target).find("[name=nomeDependente]").val(),
      cpf: $(e.target).find("[name=cpf]").val(),
      dataNasc: $(e.target).find("[name=dataNasc]").val()

    };
    Session.set("idFunc", this._idFunc);
    Meteor.call("editDependente", dependenteEdits, currentId, function(error, id) {
      if (error) {
        return alert(error.reason);
      }
          var idFunc = Session.get("idFunc");
         Router.go("dependentesList", {_idFunc: idFunc});
    });
  },

  "click .cancel": function(e) {
    e.preventDefault();
    Router.go("dependentesList", {_idFunc: this._idFunc});
  }
});