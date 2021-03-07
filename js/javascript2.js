window.addEventListener('load', () => {
    fetch('https://api.github.com/users/rrgomide')
        .then((response) => {
            response.json().then(data => {
                showData(data);
            })
        });

        divisionPromise(12,2).then(result => {
            console.log('resultado da promise = ' + result);
        });

        executeDivisionPromise();
    
});

function showData(data) {
    var user = document.querySelector('#user');
    user.textContent = data.login + ' ' + data.name;
}

function divisionPromise(a, b) {
    return new Promise((resolve, reject) => {
        if(b === 0) {
            reject('Não é possível dividir por 0')
        }
        resolve(a / b);
        
    });
}

async function executeDivisionPromise() {
    const division = await divisionPromise(12,2);
    console.log(division);
}