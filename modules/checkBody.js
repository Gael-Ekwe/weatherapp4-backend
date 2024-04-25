function checkBody(body,properties) {
let isValid = true;

for(let key of properties){
    if(!body[key]) isValid = false;
}

return isValid;
}

/*const test = {name:'', email: 'cwdc', password: 'kju'};

let isValid = checkBody(test,['email','password']);
console.log(isValid);*/

module.exports = {checkBody}