function addUser() {

    parent_name = document.getElementById("user_name").value;
    child_name = document.getElementById("child_name").value;

    localStorage.setItem("parent_name", parent_name);
    localStorage.setItem("child_name", child_name);

        window.location = "verification.html";
}

const firebaseConfig = {
    apiKey: "AIzaSyBCfVy03n6Ba4Tt4yfLnJ6w_qEeV2TwbNM",
    authDomain: "scs-absency-database.firebaseapp.com",
    projectId: "scs-absency-database",
    storageBucket: "scs-absency-database.appspot.com",
    messagingSenderId: "255386255362",
    appId: "1:255386255362:web:507bb753aaf4c2bbf3a71b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addsickness() {
    reason1 = "sickness";

    localStorage.setItem("reason", reason1);

        window.location = "sickness.html";
  }