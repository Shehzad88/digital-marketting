document.getElementById("btn").addEventListener("click", function() {
  document.querySelector(".ListCard").classList.remove("hidden");
  document.getElementById("backdrop").classList.remove("hidden");
});

document.getElementById("cld").addEventListener("click", function() {
  document.querySelector(".ListCard").classList.add("hidden");
  document.getElementById("backdrop").classList.add("hidden");
});

document.getElementById("btn1").addEventListener("click", function(){
  document.querySelector(".sign").classList.remove("hidden");

});

document.getElementById("kk").addEventListener("click", function() {
  document.querySelector(".sign").classList.add("hidden");
});

