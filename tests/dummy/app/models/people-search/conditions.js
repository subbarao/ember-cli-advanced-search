import DS from 'ember-data';
import MF from 'model-fragments';

export default MF.Fragment.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  person_id: DS.attr('advanced-search-autocomplete')
});
