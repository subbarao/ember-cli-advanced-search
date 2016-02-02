# Bb-advanced-search

## Installation

## Running

## Enhance findRecord in application adapter

We need to send query params via `findRecord`. Since ember data doesn't
support this out-of-the-box yet:

```es6
  // https://github.com/emberjs/data/issues/3596#issuecomment-126604014
  urlForFindRecord(id, modelName, snapshot) {
    let url   = this._super(id, modelName, snapshot);
    let query = Ember.get(snapshot, 'adapterOptions.params');
    if (query) {
      url += '?' + Ember.$.param(query);
    }
    return url;
  }
```

## Snake-cased server API

Because this addon uses [ember-data-model-fragments](https://github.com/lytics/ember-data-model-fragments), if the server is returning snake-cased attributes - like
search.metadata.current_page instead of search.metadata.currentPage -
you must register a custom serializer for ember-data-model-fragments if
you haven't already:

```es6
// https://github.com/lytics/ember-data-model-fragments/issues/166
// app/initializers/fragment-serializer

import DS from 'ember-data';

const FragmentSerializer = DS.JSONSerializer.extend({
  keyForAttribute(key) {
    return Ember.String.underscore(key);
  }
});

export default {
  name: 'FragmentSerializer',
  before: 'store',
  after: 'fragmentTransform',
  initialize: function(container) {
    container.register('serializer:-fragment', FragmentSerializer);
  }
};
```

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
