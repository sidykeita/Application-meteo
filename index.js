
let ville;
let villeDom = document.querySelector('#ville');
let temperature = document.querySelector("#temperature_label");
let boutton = document.querySelector('#changer');

if('geolocation' in navigator)
{
    navigator.geolocation.watchPosition((position) => {
        recevoirTemperature(position);
        
    },error,option)
}else{  
    ville = 'paris';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=56ffc93b129066dabfef9a61b1027fe2&units=metric`;
    var requete = new XMLHttpRequest();
    requete.open("GET",url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function()
    {
    if(requete.readyState === XMLHttpRequest.DONE)
        {
        if(requete.status == 200)// vérifie si il y a une erreur serveur
            {
            let reponse = requete.response;
            villeDom.textContent = reponse.name;
            temperature.textContent = reponse.main.temp;      
            }else{
            console.log(`Veuillez recommencez error ${requete.status}`);
            }
        }
    }
}

var option = {
    enableHighAccuracy: true
}

function error() 
{
    ville = 'paris';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=56ffc93b129066dabfef9a61b1027fe2&units=metric`;

    var requete = new XMLHttpRequest();
    requete.open("GET",url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function()
    {
    if(requete.readyState === XMLHttpRequest.DONE)
        {
        if(requete.status == 200)// vérifie si il y a une erreur serveur
            {
            let reponse = requete.response;
            villeDom.textContent = reponse.name;
            temperature.textContent = reponse.main.temp;      
            }else{
            console.log(`Veuillez recommencez error ${requete.status}`);
            }
        }
    }
}

function recevoirTemperature(position)
{
    // l'url contient le nom de la ville nécessaire à l'aplication météo
    const url = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=56ffc93b129066dabfef9a61b1027fe2&units=metric`;
  
    var requete = new XMLHttpRequest();
    requete.open("GET",url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function()
    {
    if(requete.readyState === XMLHttpRequest.DONE)
        {
        if(requete.status == 200)// vérifie si il y a une erreur serveur
            {
            let reponse = requete.response;
            villeDom.textContent = reponse.name;
            temperature.textContent = reponse.main.temp;      
            }else{
            console.log(`Veuillez recommencez error ${requete.status}`);
            }
        }
    }
  
}


boutton.addEventListener('click',() => {
  let VilleChoisie = prompt('Quelle ville désirez vous ?');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${VilleChoisie}&appid=56ffc93b129066dabfef9a61b1027fe2&units=metric`;

  var requete = new XMLHttpRequest();
  requete.open("GET",url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function()
  {
  if(requete.readyState === XMLHttpRequest.DONE)
      {
      if(requete.status == 200)// vérifie si il y a une erreur serveur
          {
          let reponse = requete.response;
          villeDom.textContent = reponse.name;
          temperature.textContent = reponse.main.temp;      
          }else{
          console.log(`Veuillez recommencez error ${requete.status}`);
          }
      }
  }
  
})

