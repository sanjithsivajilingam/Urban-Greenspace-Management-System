// function other(){
//     // // Perform any form validation here if needed
//     // // Redirect the user to the welcome page
//     window.location.href = "parkManager.html";
//     return false; // Prevent form submission
// }



function redirectToParkManager(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        fetch('http://127.0.0.1:8000/loginrequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            if (responseData.code === "managerSuccess") {
                window.location.href = 'parkManager.html';
            } else if(responseData.code === "userSuccess"){
                window.location.href = 'user.html';
            } else {
                window.location.href = "index.html";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

document.getElementById('loginForm').addEventListener('submit', redirectToParkManager);



