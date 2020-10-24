(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    window.App = App;

    class FireStore {
        constructor() {
            console.log("using firestore.js")
            firebase.initializeApp(window.FireBaseConfig);
            this.db = firebase.firestore();
        }
        async add(key, val) {
            this.key = key;
            this.val = val;
            this.db.collection("orders").add({
                key: val
            })
            return null;
        }
        async get(key) {
            this.key = key;
            return this.db.collection("orders").where("emailAddress", "=", key).get();
        }
        async getAll() {
            return this.db.collection("orders").get();
        }
        async remove(key) {
            this.key = key
            this.db.collection("orders").where("emailAddress", "=", key).delete()
            return null;
        }
        
    }

    App.FireStore = FireStore;
    window.App = App;

})(window);