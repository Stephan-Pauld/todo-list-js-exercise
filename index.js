// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, desc) {
  const task = {
    title: title,
    desc: desc,
    complete: false,
    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },

    markCompleted: function () {
      console.log('cats');
      this.complete = true;
    },
  };
  return task
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// console.log(tasks);



task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted(); // Clean Cat Litter has been completed
task1.logState(); // Clean Cat Litter has not been completed




// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1


