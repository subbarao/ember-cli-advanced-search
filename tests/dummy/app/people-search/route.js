import Ember from 'ember';
import AdvancedSearchRouteable from 'bb-advanced-search/mixins/advanced-search-routeable';

export default Ember.Route.extend(AdvancedSearchRouteable, {
  searchModel: 'people-search',
  aggregateOn: ['name'],

  model(params) {
    return this.query(params.search);
  }

});
