// 1. Display current date and time

function displayDateTime() {
    let today = new Date();

    document.getElementById("currentDate").textContent =
        today.toLocaleDateString();

    document.getElementById("currentTime").textContent =
        today.toLocaleTimeString();

    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    document.getElementById("dateDetails").textContent =
        `Year: ${year} | Month: ${month} | Day: ${day}`;
}

setInterval(displayDateTime, 1000);


// 2. Create a study activities array

let activities = [
    {
        name: "Learn HTML",
        duration: 60,
        completed: true
    },
    {
        name: "Practice CSS",
        duration: 45,
        completed: true
    },
    {
        name: "Learn JavaScript",
        duration: 90,
        completed: false
    },
    {
        name: "Practice English",
        duration: 30,
        completed: false
    }
];


// 3. Display activities using map()

let activityList = activities.map(function(activity) {
    return `
        <div class="activity ${activity.completed ? "completed" : ""}">
            <h3>${activity.name}</h3>
            <p>Study Time: ${activity.duration} minutes</p>
            <p>Status: ${activity.completed ? "Completed" : "Pending"}</p>
        </div>
    `;
});

document.getElementById("activityList").innerHTML =
    activityList.join("");


// 4. Count completed activities using filter()

let completedActivities = activities.filter(function(activity) {
    return activity.completed;
});


// 5. Calculate total study time using reduce()

let totalTime = activities.reduce(function(total, activity) {
    return total + activity.duration;
}, 0);


// 6. Display summary information

document.getElementById("totalActivities").textContent =
    activities.length;

document.getElementById("completedActivities").textContent =
    completedActivities.length;

document.getElementById("totalTime").textContent =
    totalTime + " minutes";


// 7. Find one activity using find()

let javascriptActivity = activities.find(function(activity) {
    return activity.name === "Learn JavaScript";
});

console.log("JavaScript Activity:", javascriptActivity);


// 8. Print all activities using forEach()

activities.forEach(function(activity) {
    console.log(activity.name);
});
