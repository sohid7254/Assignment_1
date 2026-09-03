function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }

    if (username.includes(" ")) {
        return "No Space Allowed";
    }

    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }

    return "Available";
}

console.log(validateUsername("John"));
console.log(validateUsername("Jo"));
console.log(validateUsername("John Doe"));
console.log(validateUsername("AdminUser"));
console.log(validateUsername("User123"));
console.log(validateUsername("admin"));
console.log(validateUsername("user admin"));
