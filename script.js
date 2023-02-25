const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

// Toggle dropdown function
const toggleDropdown = function() {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("arrow");
};

// Toggles dropdown open/close when button is clicked
dropdownBtn.addEventListener("click", function(e){
  e.stopPropagation();
  toggleDropdown();
});

// Checks if dropdown menu contains 'show' class or not,  closes dropdown when DOM element is selected
document.documentElement.addEventListener("click", function(){
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});