document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav");
  
    if (window.scrollY >= 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  // app.js

// Firebase Configuration dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBSHzpgPN9qyt0kQTFt5QW_f2wrqz_hA1s",
  authDomain: "profileprojeks.firebaseapp.com",
  projectId: "profileprojeks",
  storageBucket: "profileprojeks.firebasestorage.app",
  messagingSenderId: "1022288710835",
  appId: "1:1022288710835:web:754cc80224ba4022b2b4c6",
  measurementId: "G-1WY6EDRWKP"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Inisialisasi Cloud Messaging
const messaging = firebase.messaging();

// Meminta izin untuk push notification
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Notification permission granted.");
    // Dapatkan FCM token
    messaging.getToken({ vapidKey: "BFUoM_NXXtOX6XSvSQS0D1iJQIeJNgtPWu377GvFhDU7Q45MxzcxDQq7FNqm0Z6DsdoFzLYWzWLfRf3AyjjxSTY" }).then((token) => {
      console.log("Token received: ", token);
      // Kirim token ke server atau gunakan sesuai kebutuhan Anda
    });
  } else {
    console.log("Notification permission denied.");
  }
});
