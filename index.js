function login(){
  try {
      let x =  prompt("LOGIN (Namamu mu tulis disiniiii)");
      if(x == "") throw "username not defined"; 
      if(Number(x)) throw "username not defined"; 
      if(x == null) throw "username not defined"; 

      // Save username to local storage to access later
      localStorage.setItem('username', x);

      alert(`welcome ${x}`);
  } catch(error) {
      alert(error);
      window.location.reload();
  }
}

const box = document.querySelector("div");
const laughText = document.getElementById("laughText");
const userName = document.getElementById("userName");
const audio = document.getElementById("myAudio");

document.getElementById("Btn").onclick = function() {
   // Toggle the style for the div
   box.classList.toggle("style");

   // Play the audio when button is clicked
   audio.play();

   // Display "HAHAHA" and the username from localStorage
   laughText.textContent = "🤪🤪🤪🤪🤪";
   userName.textContent = `HAHAHA Kenapa mubuka iii ${localStorage.getItem('username')}`;
};
