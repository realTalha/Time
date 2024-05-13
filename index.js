const currenttime = () => {
    let curtime = new Date().toLocaleTimeString();
    document.getElementById("clock").innerHTML = curtime;
    }
   currenttime();
  const intervalID =  setInterval(()=>{
    currenttime();
   },1000);
   setTimeout(() => {
    clearTimeout(intervalID);
   },5000)