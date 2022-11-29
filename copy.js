const fs = require('fs');

getCurrentFilenames();
console.log("\nFile Contents of example_file:",
  fs.readFileSync("sourse.txt", "utf8"));
 
fs.copyFile("sourse.txt", "destination.txt", (err) => {
  if (err) {
    console.log("Error Found:", err);
  }
  else {
    getCurrentFilenames();
    console.log("\nFile Contents of sourse:",
      fs.readFileSync("destination.txt", "utf8"));
  }
});
 
function getCurrentFilenames() {
  console.log("\nCurrent filenames:");
  fs.readdirSync(__dirname).forEach(file => {
    console.log(file);
  });
}