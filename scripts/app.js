// ONLINE: you MUST fill in the following values 
//               from Firebase/Firestore for your project 
// PROJECT_ID,
// WEB_API_KEY,
// PROJECT_NUMBER
//
// go to... 
// console.Firebase.google.com, then 
//    click on the Gear Icon -> Project Settings -> General

(function(window) {
    'use strict';
    window.FireBaseConfig = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: ""
    };
})(window);


//   function sendToFirestore(data) {
//       alert("external function used");
//       var name = data.emailAddress;
//       var db = firebase.firestore();

//       db.collection("orders").doc(name).set({
//           coffee: data.coffee,
//           emailAddress: data.emailAddress,
//           flavor: data.flavor,
//           size: data.size,
//           strength: data.strength
//       }).then(function () {
//           console.log("document successfully written");
//       }).catch(function () {
//           console.error("error writing document: " + error);
//       });
//   }

//   function removeFromeFirestore() {
//     alert("external function used");
//     var db = firebase.firestore();

//     db.collection("orders").doc(name).delete({
//         coffee: data.coffee,
//         emailAddress: data.emailAddress,
//         flavor: data.flavor,
//         size: data.size,
//         strength: data.strength
//     }).then(function () {
//         console.log("document successfully deleted");
//     }).catch(function () {
//         console.error("error writing document: " + error);
//     });
// }
