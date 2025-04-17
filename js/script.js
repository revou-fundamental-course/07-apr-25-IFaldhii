let visitorName = prompt("What's your name?", "");
document.getElementById("visitorName").innerHTML = visitorName

document.getElementById("formLayout").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(a) {
  a.preventDefault();

  const timeNow = new Date().toString();
  const nama = document.getElementById("nameBar").value;
  const dob = document.getElementById("dateBar").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("messageBar").value;
  
  document.getElementById("time").innerHTML = timeNow 
  document.getElementById("nameResult").innerHTML = nama
  document.getElementById("dobResult").innerHTML = dob
  document.getElementById("genderResult").innerHTML = gender
  document.getElementById("messageResult").innerHTML = message
}

let indexBanner = 0;

function nextBanner() {
    indexBanner +=1;
    showBanner();
}

function showBanner() {
    const bannerList = document.getElementsByClassName("banner-img");

    if (indexBanner > bannerList.length - 1) {
        indexBanner = 0;
    }

    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style = "display: none";
    }

    bannerList[indexBanner].style = "display: block";
}

showBanner();

setInterval(() => {
    nextBanner();
  }, 5000);