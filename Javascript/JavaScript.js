function save() {
    //recupero il valore (.value) inserito dall'utente nel campo che ha id 'username'
    let inseredEmail = document.getElementById("email").value;

    //salvo questi valori nel local storage:
    localStorage.setItem('email', inseredEmail) //key = username, value = inseredUsername (ovvero ciò che ha scritto l'utente)
}

function checkSubscriber() {
    let subscribeButton = document.getElementById("subscribe");

    let storedEmail = localStorage.getItem('email');
    let unsubscribeButton = document.getElementById("unsubscribe");

    let labelEmail = document.getElementById("email");

    if (storedEmail != null) //se è loggato
    {
        subscribeButton.style.display = "none";
        unsubscribeButton.style.display = "inline-block";
        labelEmail.style.display = "none";
        let check = true;
    }
    else {
        subscribeButton.style.display = "inline-block";
        unsubscribeButton.style.display = "none";
        let check = false;
    }
}

function Unsubscribe() {
    //ripulire il localstorage
    localStorage.clear();

    let subscribeButton = document.getElementById("subscribe");
    subscribeButton.style.display = "inline-block";

    let unsubscribeButton = document.getElementById("unsubscribe");
    unsubscribeButton.style.display = "none";

    let labelEmail = document.getElementById("email");
    labelEmail.style.display = "";
}

function homeOnLoad() {
    let storedEmail = localStorage.getItem('email');
    if (storedEmail != null) {
        alert("Ciao " + storedEmail);
    }
}