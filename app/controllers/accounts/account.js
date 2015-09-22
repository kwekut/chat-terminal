import Ember from "ember";

export default Ember.ArrayController.extend({

 socketService: Ember.inject.service('websockets'),
 
  init: function() {
    this._super.apply(this, arguments);
  },

 queryParams: ['phonenumber'],
  phonenumber: null,

  replyContent: '',

  filteredAccount: function() {

    var phonenumber = this.get('phonenumber');
    var application = this.get('model');

    if (phonenumber) {
      return application.filterBy('from', phonenumber);
    } else {
      return application;
    }
  }.property('phonenumber', 'application'),

  actions: {


    markTaken: function () {
            var from = this.get('phonenumber');
            var name = 'GetDriver';
            var obj = JSON.stringify({
                        'from': from, 
                        'typ': 'MARKTAKEN', 
                        'date': 'date', 
                        'msg': 'msg', 
                        'name': name, 
                        'driverphone': 'driverphone',
                        'isDone': true });
            //var socket =  this.get('socketService').socketFor('ws://68e9d71e.ngrok.io/socket');
            var socket =  this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj);       
    },


    markCompleted: function () {
            var from = this.get('phonenumber');
            var name = 'GetDriver';
            var obj = JSON.stringify({
                        'from': from, 
                        'typ': 'MARKATTENDED', 
                        'date': 'date', 
                        'msg': 'msg', 
                        'name': name, 
                        'driverphone': 'driverphone',
                        'isDone': true });

            //var socket =  this.get('socketService').socketFor('ws://68e9d71e.ngrok.io/socket');
            var socket =  this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj);       
    },

    billCustomer: function () {
            var amt = this.get('billAmount');
            var from = this.get('billPhoneNumber');
            var name = 'GetDriver';
            var obj = JSON.stringify({
                        'from': from, 
                        'typ': 'BILLCUSTOMER', 
                        'date': 'date', 
                        'msg': amt, 
                        'name': name, 
                        'driverphone': 'driverphone',
                        'isDone': true });

            //var socket =  this.get('socketService').socketFor('ws://68e9d71e.ngrok.io/socket');
            var socket =  this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');
            socket.send(obj);
            this.set('billAmount', '');       
    },


    replyMessage: function () {
            var msg = this.get('replyContent'); 
            var driverphone = this.get('driverPhone');
            var from = this.get('phonenumber');
            var name = 'GetDriver';
            //var socket =  this.get('socketService').socketFor('ws://68e9d71e.ngrok.io/socket');
            var socket =  this.get('socketService').socketFor('ws://blooming-sea-8888.herokuapp.com/socket');

        if ( driverphone == null ) {  
            var obj = JSON.stringify({
                        'from': from, 
                        'typ': 'REPLY', 
                        'date': 'date', 
                        'msg': msg, 
                        'name': name,
                        'driverphone': 'driverphone', 
                        'isDone': true });

            socket.send(obj); 
            this.set('replyContent', ''); 
        } else {
            var obj1 = JSON.stringify({
                        'from': from, 
                        'typ': 'REPLY', 
                        'date': 'date', 
                        'msg': msg, 
                        'name': name,
                        'driverphone': driverphone, 
                        'isDone': true });

            socket.send(obj1); 
            this.set('replyContent', ''); 
        }     
    }
  }
});