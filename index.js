// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(error => {
//         alert("Bad things! Ragnarok!");
//         console.log(error.message);
//     })

function displayError(error) {
    const errorObj = {
        message: "Unauthorized Access"
    };
    document.body.append(errorObj.message);
}

function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
        .then(res => res.json())
        .then(data => {
            const body = document.querySelector('body');
            const p = document.createElement('p');
            p.textContent = data.id;
            body.append(p);
            console.log(data);
        })
        .catch(error => displayError(error));
};
