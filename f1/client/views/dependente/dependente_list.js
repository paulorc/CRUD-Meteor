Template.dependentesList.helpers({
  dependentes: function(){
    var idFunc = this._id;
    return Dependentes.find({_idFunc: idFunc});
  }
});

Template.dependentesList.events({
    "click .cancel": function(e) {
    e.preventDefault();
    var idFunc = this._id;
    Router.go("funcionarioDetail", {_id: idFunc});
  },
  "click .deletar" : function(e){
    e.preventDefault();
    Dependentes.remove(this._id);
  },
  "click .editar" : function(e){
    e.preventDefault();
    var idFunc = this._id;
    Router.go("dependenteEdit", {_id: idFunc});
  }
});