Template.funcionariosList.helpers({
  funcionarios: function() {
      return Funcionarios.find({}, {sort: {createdAt: -1}});
  }
});

Template.funcionariosList.events({
  "click .new": function(e) {
    e.preventDefault();
    Router.go('funcionarioNew');
  },
  "click .deletar" : function(e){
  	e.preventDefault();
  	Funcionarios.remove(this._id);
    /*Dependentes.remove({_idFunc: {this._id}});*/
  },
  "click .editar" : function(e){
  	e.preventDefault();
  	Router.go("funcionarioEdit", {_id: this._id});
  }
});