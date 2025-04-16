// Firebase configuration (USE YOUR ACTUAL VALUES FROM FIREBASE CONSOLE)
const firebaseConfig = {
    apiKey: "AIzaSyABCD1234...", // Replace with your real API key
    authDomain: "yourproject.firebaseapp.com",
    databaseURL: "https://yourproject-default-rtdb.firebaseio.com", // Note: firebaseio.com
    projectId: "yourproject", // Corrected from 'projected'
    storageBucket: "yourproject.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcd1234..."
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Initialize Realtime Database
const db = firebase.database();

// Reference to your database
const feedbackRef = db.ref("feedbackForm");

// Get form element
const feedbackForm = document.getElementById("feedbackForm");

// Listen for form submit
if (feedbackForm) {
    feedbackForm.addEventListener("submit", submitForm);
}

function submitForm(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Save to Firebase
    feedbackRef.push({
        name: name,
        email: email,
        subject: subject,
        message: message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });

    alert("Thank you for your feedback!");
    e.target.reset();
}