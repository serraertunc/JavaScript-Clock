//isim alma kısmı
let myname= prompt("Adınız nedir?");
if(myname==""){
    alert("isim girilmesi zorunludur.")
    location.reload();//reloads current page
}
else{
    let query= document.querySelector("#myName");
    query.innerHTML = myname;
    console.log(`name: ${query.innerHTML}`);
}



//timer kısmı
function showTime() {
    const days =[ "Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    console.log("showtime");
    let clock = document.querySelector("#myClock");
    let current = new Date();
    clock.innerHTML = `${current.toLocaleTimeString()} ${current.toLocaleDateString()} ${days[current.getDay()]}`;
    setTimeout(showTime, 1000);
}

showTime();

