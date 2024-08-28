// function getdata(){
//     fetch("http://localhost:8081/test")
//     .then(response => {
//         if(!response.ok){
//             throw Error("ERROR");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data.data);
//         document.querySelector('#sample').innerHTML = `<h1>Hello</h1>`
//     })
//     .catch(error => {
//         console.log(error);
//     })
// }

// getdata();