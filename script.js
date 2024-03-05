// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.

// Section 2: App State Variables
// an empty array
let tasks = [];

// Section 3: Cached Element References
document.addEventListener('DOMContentLoaded', function() {
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

// TESTING
// console.log('hi');
// console.log('hello');
});

// Function to handle form submissions
function handleSubmission(event) {
    event.preventDefault();
    
    // TODO: Get form input values
    const taskName = document.getElementById('taskName').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;
    
    // TODO: Validate input fields
    if (!taskName || !taskDeadline) {
        alert('Task name and deadline are required!');
    }

    // TODO: Update the tasks array
    tasks.push ({name: taskName, description: taskDescription, deadline: taskDeadline})

    render();
}

//  ***** START AGAIN HERE; PDF PAGE 7 *****
    // Function to render tasks in the table
function render() {

    // TODO: Use array methods to create a new table row of data for each item in the array comment
    taskTable.innerHTML = tasks.map(task => `
        <tr>
            <td>${task.name}</td>
            <td>${task.description}</td>
            <td>${task.deadline}</td>
            <td><button onclick="markTaskComplete(this)">Complete</button></td>
            <td><button onclick="removeTask(this)">Remove</button></td>
        </tr>
    `).join('');

}   

    // Function to initialize the table
function init() {
    taskTable.innerHTML = ''; // Clear the table
    tasks = []; // Reset the tasks array
    render(); // Call the render function
}

// Event listener for form submission
taskForm.addEventListener('submit', handleSubmission);

// Call the init function to set up the initial state of the app
init();