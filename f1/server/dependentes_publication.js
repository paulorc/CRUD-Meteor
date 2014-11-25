Meteor.publish("dependentes", function () {
    return Dependentes.find({});
  });