/*webdev_teste@mailna.co*/

const url = "https://go-wash-api.onrender.com/api/login";

async function login() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let api = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "email": email,
            "password": password,
            "user_type_id": 1
        }),

        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(api.ok){
        let resposta = await api.json();
        localStorage.setItem("user", JSON.stringify(resposta))
        console.log(resposta)
        window.location.href='../VIEW/home.html'        
    }

    let respostaErro = await api.json();
    console.log(respostaErro)
    alert(JSON.stringify(respostaErro))
}
