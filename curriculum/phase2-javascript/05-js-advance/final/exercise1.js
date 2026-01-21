const user = { name: "Kai", isActive: true };

// Before:
function getCard(user) {
    if (user.isActive) {
        return "User " + user.name + " is Active";
    } else {
        return "User " + user.name + " is Offline";
    }
}

// After (they need to write this):
const getCard = u => `User ${u?.name} is ${u.isActive ? "Active" : "Offline"}`;

console.log(getCard(user));