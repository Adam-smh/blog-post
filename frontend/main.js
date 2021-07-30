fetch('https://dry-earth-93155.herokuapp.com/get-blogs/')
.then(response => response.json())
.then(data => console.log(data))