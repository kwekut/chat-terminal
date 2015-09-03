import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function(){
  this.route('notification');
  this.route('admin');
  this.route('twilio');
  this.route('accounts', { path: '/accounts' }, function() {
    this.route('account', { path: '/account' });
  });
});


export default Router;


