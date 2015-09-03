import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  from: attr('string'),
  typ: attr('string'),
  date: attr('date'),
  msg: attr('string'),
  name: attr('string'),
  driverphone: attr('string'),
  isDone: attr('boolean', {defaultValue: false})
});