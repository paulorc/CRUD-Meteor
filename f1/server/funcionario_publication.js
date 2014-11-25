Meteor.publish("funcionarios", function () {
    return Funcionarios.find({});
  });