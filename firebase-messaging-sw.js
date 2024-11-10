// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBSHzpgPN9qyt0kQTFt5QW_f2wrqz_hA1s",
    authDomain: "profileprojeks.firebaseapp.com",
    projectId: "profileprojeks",
    storageBucket: "profileprojeks.firebasestorage.app",
    messagingSenderId: "1022288710835",
    appId: "1:1022288710835:web:754cc80224ba4022b2b4c6",
    measurementId: "G-1WY6EDRWKP"
  };

// Inisialisasi Firebase di Service Worker
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Menampilkan notifikasi saat menerima pesan di latar belakang
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
