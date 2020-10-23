// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {

};
// Initialize Firebase
var firebase = firebase.initializeApp(firebaseConfig);
firebase.analytics();


var firestore = firebase.firestore();

const docRef = firestore.doc("cofferun/data");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function () {
    const textToSave = inputTextField.value;
    console.log("I am saving this to the cloud " + textToSave + " to firestore");
    docRef.set({
        ordeR: textToSave
    }).then(function () {
        console.log("data saved");
    }).catch(function (error) {
        console.log("error: " + error);
    });
})