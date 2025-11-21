let cargador = ["pium!","pium!","pium!","pium!","pium!","pium!","pium!"]
function chauchat(parametro) {
  let dejarEnfriar = 3
  for (let i = 0; i < parametro.length; i++) {
       let pillada = 0
       posibilidadPillada = Math.floor(Math.random()*100)
       console.log(posibilidadPillada)
    if(posibilidadPillada < 80 && dejarEnfriar){
      console.log("Illo me he quedao pillá!")
      i = parametro.length
    }  else if(!dejarEnfriar){
      console.log("")
      i--
      dejarEnfriar = 3
    } else { 
      console.log("pium!")
      dejarEnfriar--
    }
    // console.log("dejarEnfriar vale: ",dejarEnfriar)
  }
}
chauchat(cargador)