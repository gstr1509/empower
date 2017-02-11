angular.module('emp', ['ui.router'])

angular.module('emp').config(function($stateProvider,$urlRouterProvider) {
  // An array of state definitions
  var states = [
    {
      name: 'hello',
      url: '/hello',
      // Using component: instead of template:
      component: 'hello'
    },

    {
      name: 'participate',
      url: '/participate',
      component: 'participate'
    },
    {
      name: 'dashboard',
      url: '/dashboard',
      component: 'dashboard'
    },
    {
      name: 'people',
      url: '/people',
      component: 'people',
      // This state defines a 'people' resolve
      // It delegates to the PeopleService to HTTP fetch (async)
      // The people component receives this via its `bindings: `
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    },

    {
      name: 'person',
      // This state takes a URL parameter called personId
      url: '/people/{personId}',
      component: 'person',
      // This state defines a 'person' resolve
      // It delegates to the PeopleService, passing the personId parameter
      resolve: {
        person: function(PeopleService, $transition$) {
          return PeopleService.getPerson($transition$.params().personId);
        }
      }
    }
  ]

  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
  //$urlRouterProvider.otherwise("/dashboard");
});

// To account for plunker embeds timing out, preload the async data
angular.module('emp').run(function($http,$location) {
  //$location.path('/dashboard');
  $http.get('core/data/people.json', { cache: true });
});