let beta, gamma, incRoulis, incTangage, pression=0, vapeur;

window.onload = function () {
  if ( window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission === 'function' ){
      const banner = document.createElement('div')
      banner.innerHTML = `<div style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Cliquez ici pour autoriser l'accès à votre capteur de mouvements.</p></div>`
      banner.onclick = ClickRequestDeviceOrientationEvent
      document.querySelector('body').appendChild(banner)
  }

  function ClickRequestDeviceOrientationEvent () {
    window.DeviceOrientationEvent.requestPermission()
      .then(response => {
        if (response === 'granted') {
          window.addEventListener('deviceorientation',function(e) {
    document.getElementById('autorisation').style.display = 'none';
    beta=(Math.round(e.beta));
    gamma=(Math.round(e.gamma));
    //On passe les valeurs récupérées à la fonction calcul
    calcul();
      }
          )} else {
          alert("Désolé, vous ne pouvez pas jouer à ce jeu car votre appareil n'a pas de capteur de mouvement.")
        }
      })
      .catch(e => {
        console.error(e)
    })
}

function myTimer() {
    if (pression >= 500){
      //    document.getElementById('retour').style.display = 'normal';
      alert("coucou");
      pression = 0;
      clearInterval(timerGlobal);
    //Envoi de la page Bang -> décrément du nombre de joueurs
    }
  }

function calcul() {

    document.getElementById('beta').innerHTML = ('Roulis : '+beta);
    document.getElementById('gamma').innerHTML = ('Tangage : '+gamma);
    document.getElementById('pression').innerHTML = ('Pression : '+pression);
    document.getElementById('incRoulis').innerHTML = ("n'affichera rien"+incRoulis;
    document.getElementById('incTangage').innerHTML = incTangage;

    if((beta >= 5 && beta < 10) || (beta <= -5 && beta > -10))
    {
      pression+=2;
    }
    else if((beta >= 10 && beta < 15) || (beta <= -10 && beta > -15))
    {
      pression+=4;
    }
    else if(beta >= 15 || beta <= -15)
    {
      pression+=6;
    }
    else
    {
      pression+=0;
    }
    if((gamma >= 10 && gamma < 15) || (gamma <= -10 && gamma > -15))
    {
      pression+=2;
    }
    else if((gamma >= 15 && gamma < 30) || (gamma <= -15 && gamma > -30))
    {
      pression+=4;
    }
    else if(gamma >= 30 || gamma <= -30)
    {
      pression+=6;
    }
    else
    {
      pression+=0;
    }
  }
}
