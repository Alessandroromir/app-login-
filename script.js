//dichiarare le variabili
const btnLogin= document.getElementById(btnLogin);
const btnLogout= document.getElementById(btnLogout);


class users {
    constructor(date,userName,numberLogin){
    this.date= date
    this.userName= userName
    this.numberLogin= numberLogin
};

let currentUser = new users(
    localStorage.getItem('userName'),
    new date(localStorage.getItem("date")),
  Number(localStorage.getItem("numberLogin"))
)

incrementNumberLogin(){
    this.numberLogin++
}
};


const currentUser = new users(
    localStorage.getItem('userName'),
    new date(localStorage.getItem("date")),
  Number(localStorage.getItem("numberLogin")),
),

//dichiarare le funzioni
// Funzione di login


function login(username, password) {
    // Verifica delle credenziali
    if (isValidUser(username, password)) {
      // Creazione di un'istanza della classe User
      const currentUser = new User(username, new Date(), 1);
      // Memorizzazione dei dati dell'utente
      localStorage.setItem("username", username);
      localStorage.setItem("loginDate", currentUser.loginDate.toString());
      localStorage.setItem("loginCount", currentUser.loginCount);
      // Aggiornamento dell'interfaccia
      showLoggedInScreen();
    } else {
      // Gestione degli errori di login
      alert("Username o password errati!");
    }
  }

  function showLoggedInScreen() {
    // Nascondi la schermata di login
    document.getElementById("login").style.display = "none";
    // Mostra la schermata "logged-in"
    document.getElementById("logged-in").style.display = "block";
    // Aggiorna i dati dell'utente
    document.getElementById("username").textContent = currentUser.username;
    document.getElementById("loginDate").textContent = currentUser.loginDate.toLocaleDateString();
    document.getElementById("loginCount").textContent = currentUser.loginCount;
  }
  
  
  // Funzione di logout
  function logout() {
    // Aggiornamento del numero di login
    currentUser.incrementLoginCount();
    localStorage.setItem("loginCount", currentUser.loginCount);
    // Rimozione dei dati di accesso
    localStorage.removeItem("username");
    localStorage.removeItem("loginDate");
    // Reindirizzamento alla schermata di login
    showLoginScreen();
  }
  

  



//eseguire le funzioni
btnLogin.addEventListener("click",login);
btnLogout.addEventListener("click",logout);
