//grabs the variables
const btn = document.querySelector('#btn');
let result = document.querySelector('#result');
let text = document.querySelector('#text');
btn.addEventListener('click' , function(){
    let sBar = text.value;
    console.log('text.value', text.value);
    axios.get(`https://rickandmortyapi.com/api/character/?name=${sBar}`) 
    .then(
        function(response){
         console.log('response', response);
         result.innerHTML = response.data.results.map(results =>{
             //console.log('results.image', results.image);
            return `
            <div>name: ${results.name}</div>
            <div>status: ${results.status}</div>
            <div>origin name: ${results.origin.name}</div>
            <div>species: ${results.species}</div>
            <br>
            <img src = ${results.image}>
            `
        })
        .join('');
    })
    .catch(
        function(rip){
        console.log('rip',rip);
        });
});

