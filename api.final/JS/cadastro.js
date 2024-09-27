const url = "https://go-wash-api.onrender.com/api/user";

async function cadastro() {
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let cpf_CNPJ = document.getElementById('cpf_CNPJ').value;
  let terms = document.getElementById('terms').checked;
  let birthday = document.getElementById('birthday').value;

  if (!terms|| !name|| !email || !password || !cpf_CNPJ|| !birthday){
    alert('Preencha todos os dados.');
    return; 
  }
  if (!terms) {
    alert('Você precisa aceitar os termos e condições para se cadastrar.');
    return; 
  }

  let api = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      "name":name,
      "email":email,
      "user_type_id": 1,
      "password":password,
      "cpf_cnpj": cpf_CNPJ,
      "terms": terms,
      "birthday":birthday
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });


  if (api.ok) {
    let result = await api.json();
    console.log(result);
    alert(JSON.stringify(result));
  } else {
   
    let errorApi = await api.json();
    let errors = errorApi.data.errors;

  
    for (let erro in errors) {
      if (errors[erro].length > 0) {
        alert(errors[erro][0]);
      }
    }
  }
}
