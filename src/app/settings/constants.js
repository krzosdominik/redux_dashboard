export const tableHeaders = ["Id", "Name", "Username", "Email", "City", "Edit", "Delete"];

export const API_URL = 'https://jsonplaceholder.typicode.com/users';

const headers = {
    "Content-type": "application/json; charset=UTF-8"
};

export const GET = {
    method: 'GET',
    headers
};

export const POST = {
    method: 'POST',
    headers
};

export const PUT = {
    method: 'PUT',
    headers
};

export const DELETE = {
    method: 'DELETE'
}

export const spinnerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};