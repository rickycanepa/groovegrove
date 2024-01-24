export function getAllUsers() {
    fetch('/api/data')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.error('Error fetching data: ', error));
}