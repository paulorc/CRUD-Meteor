Funcionarios = new Meteor.Collection("funcionarios");


Meteor.methods({
  deleteFuncionario: function(id) {
    Funcionarios.remove(id);
  },
  newFuncionario: function(funcionario) {
    funcionario.createdAt = new Date();
    var id = Funcionarios.insert(funcionario);
    return id;
  },
  editFuncionario: function(funcionario, id) {
    funcionario.updatedAt = new Date();
    Funcionarios.update(id, {$set: funcionario});
    return id;
  }
});