Template.funcionarioDetail.helpers({
  dependentes: function(){
    var idFunc = this._id;
    return Dependentes.find({_idFunc: idFunc});
  }
});

Template.funcionarioDetail.events({
  "click .edit-funcionario": function(e) {
    e.preventDefault();
    Router.go("funcionarioEdit", {_id: this._id});
  },
  "click .list-funcionario": function(e) {
    e.preventDefault();
    Router.go("funcionariosList");
  },
  "click .incluir-dependente" : function(e){
    e.preventDefault();
    Router.go("dependenteNew", {_idFunc: this._id});
  },
  "click .list-dependente-funcionario": function(e) {
    e.preventDefault();
    Router.go("dependentesList", {_idFunc: this._id})
  }
});