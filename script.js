//dichiarare le variabili
const btnLogin= document.getElementById(btnLogin);
const btnLogout= document.getElementById(btnLogout);


class users {
    constructor(date,userName,numberLogin){
    this.date= date
    this.userName= userName
    this.numberLogin= numberLogin
};

const currentUser =new users(
    localStorage.getItem('userName')
    new date(localStorage.getItem("date")),
  Number(localStorage.getItem("numberLogin"))
)

incrementNumberLogin(){
    this.numberLogin++
}
};


//dichiarare le funzioni
function login () {

    // al click lo user, se non esiste viene salvato e si accede alla schermata Logged(con numero accessi e data)
    //sennò si accede alla schermata e viene aggiunto un accesso

    const currentUser= new users (userName, new date(), 1)
    localStorage.setItem("username",username)
    localStorage.setItem("date",date)
    localStorage.setItem("numberLogin",numberLogin)
    



   
};

function logout (){
    // i dati salvati vengono cancellati e si ritorna alla schermata di login

    localStorage.removeItem("username");
    localStorage.removeItem("date")




};



//eseguire le funzioni
btnLogin.addEventListener("click",login);
btnLogout.addEventListener("click",logout);
