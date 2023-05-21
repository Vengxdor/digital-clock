const currentDate = () =>{
   let date = new Date()
   let H = date.getHours();
   let M = date.getMinutes();
   let S = date.getSeconds();
   
   H = H % 12;
   H = H ? H : 12;
   H = (H < 10) ? "0" + H : H
   M = (M < 10) ? "0" + M : M
   S = (S < 10) ? "0" + S : S
   
   let time = H + ":" +  M + ":" + S
   let printNomber  = document.getElementById("printTime")

   printNomber.textContent = time

}

setInterval(currentDate, 1000)

