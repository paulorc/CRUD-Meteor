Dependentes = new Meteor.Collection("dependentes");

Meteor.methods({
  newDependente: function(dependente) {
    dependente.createdAt = new Date();
    var id = Dependentes.insert(dependente);
    return id;
  },
  deleteDependente: function(id) {
    Dependentes.remove(id);
  },
  editDependente: function(dependente, id) {
    dependente.updatedAt = new Date();
    Dependentes.update(id, {$set: dependente});
      return id;
  }
});