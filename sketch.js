// Initialize a global variable
var species = "Global variable";

function transform() {
  // Initialize a local, function-scoped variable
  var species = "Local Variable";
  console.log(species);
}

// Log the global and local variable
