//your JS code here. If required.
// Define the student object with a name property
// Create the student object with a name property
const student = {
    name: "John Doe"
};

// Add getKeys method to the Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this);
};

// Example usage
console.log(student.getKeys());  // Output will be ["name"]
