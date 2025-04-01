
// async function getData() {
//     setTimeout(function() {
//         console.log("I am Inside setTimeOut")
//     }, 2000);
//     console.log("Dhananjay")
// }

// let output = getData();
// console.log(output)

// //await --?

// //fatch API

// async function getData() {

//     //get request - async
//     let responce = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
//     //parse json - async
//     let data = await responce.json();

//     console.log(data);
// };

// getData();

//scenario:

//prepare url / api end point -> sync
//fatch data -> network call -> async
//process data -> sync


// Fetch API se POST Request
async function sendData() {
    let newPost = {
        title: "My First Post",
        body: "This posted by Dhananjay",
        userId: 1
    };

    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // POST request
            headers: {
                "Content-Type": "application/json" // JSON format me data bhejna
            },
            body: JSON.stringify(newPost) // JavaScript object ko JSON me convert karna
        });

        let data = await response.json(); // Response ko JSON me convert karna
        console.log("post data responce", data);
    } catch (error) {
        console.log("Error sending data:", error);
    }
}

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    console.log("Get data Responce", data);
};

async function deleteData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE" // DELETE request
        });

        if (response.ok) {
            console.log("✅ Data successfully deleted!");
        } else {
            console.log("❌ Failed to delete data");
        }
    } catch (error) {
        console.log("❌ Error deleting data:", error);
    }
}




async function processData() {
    await deleteData();
    await sendData();
    await getData();
};

processData();


