function usage() {
    let text = `Usage:
    todo - prints list of todos
    todo done ID - marks todo as done
    todo add "Buy milk" - adds new todo item to todo list
    todo remove ID - removes todo from the list
    todo usage - prints this usage`;

    console.log(text);
}

function list(todos_list) {

    console.log(todos_list);
}

function done(todos, todo_id) {

    for(let i = 0; i < todos.length; i++) {
        let todo = todos[i];

        if(todo.id === todo_id) {
            todo.done = true;
            break;
        } 
    }

    console.log("Marked as done");
}

function add(todos, new_todo) {
    let last_todo = todos[todos.length-1];
    let last_id = last_todo.id;
    let new_id = last_id + 1;

    todos.push({id: new_id, name: new_todo});

    console.log("Added to the list");
}

function remove(todos, remove_todo_id) {

    for(let i = 0; i < todos.length; i++) {
        let todo = todos[i];
        var index_of_todo_for_removal;

        if(todo.id === remove_todo_id) {
            index_of_todo_for_removal = i;
            break;
        } 
    }
    
    todos.splice(index_of_todo_for_removal, 1);
    
    console.log("Removed from the list");
}

function main() {
    let todos = [
        {id: 1, name: "Buy milk", done: false},
        {id: 2, name: "Buy cookies", done: false},
        {id: 13, name: "Clean the kitchen", done: false}
    ];

    console.log("XXX All arguments are:" );
    console.log(process.argv);

    let command = process.argv.slice(2,3);

    console.log(command);

    if(command == "") {
        list(todos);
    } else if(command == "done") {
        let todo_id = Number(process.argv.slice(3,4)[0]);

        done(todos, todo_id); 
        list(todos);
    } else if(command == "add") {
        let new_todo = process.argv.slice(3,4)[0];
        //console.log(new_todo);

        add(todos, new_todo);
        list(todos);
    } else if(command == "remove") {
        let todo_id = Number(process.argv.slice(3,4)[0]);

        remove(todos, todo_id);
        list(todos);
    } else if(command == "usage") {
        usage();
    } else {
        console.log("Command " + command + " is not supported.");
    }

    console.log("Bye!");
}

main();

