//Question No 1: Value Detective

function describeValue(value) {
    const type = typeof value;
    const truthiness = value ? "truthy" : "falsy";
    return `${type} | ${truthiness}`;
}

//Question No 2: Bangladesh Weekend Machine
function getDayType(day) {
    const normalizedDay = day.toLowerCase();

    switch (normalizedDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

//Question No 3: Username Gatekeeper
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

//Question No 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50; // minimum fare

    if (distance > 2) {
        fare += (distance - 2) * 15;
    }

    fare += waitingMinutes * 2;

    if (isNight) {
        fare *= 1.2;
    }

    return fare;
}

