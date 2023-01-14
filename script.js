let input = document.getElementById("input") ;
let button = document.getElementById("button") ;
let item = document.getElementById('item');
let pos = document.getElementById("pos") ;
let neg = document.getElementById("neg") ;
let nat = document.getElementById("nat") ;


item.addEventListener('click', (e) =>{

    if( e.target.textContent == "Positive" ){
        e.target.style.opacity = '1';
        neg.style.opacity = '0.5';
        nat.style.opacity = '0.5';
        document.querySelector('h2').innerText = 'Positive content';
    }else if( e.target.textContent == "Negativ" ){
        e.target.style.opacity = '1';
        pos.style.opacity = 0.5;
        nat.style.opacity = 0.5;
        document.querySelector('h2').innerText = "Negative content";
    }else if( e.target.textContent == "Natural" ){
        e.target.style.opacity = '1';
        neg.style.opacity = 0.5;
        pos.style.opacity = 0.5;
        document.querySelector('h2').innerText = "Neutral content";
    }
});

button.addEventListener('click', (e) => {
    
    if( input.value == 1  ){
        neg.style.opacity = 0.5;
        pos.style.opacity = 1;
        nat.style.opacity = 0.5;
        document.querySelector('h2').innerText = "Positive content";

    }else if( input.value == 2 ){
        neg.style.opacity = 1;
        pos.style.opacity = 0.5;
        nat.style.opacity = 0.5;
        document.querySelector('h2').innerText = "Negative content";


    }else if( input.value == 3 ){
        neg.style.opacity = 0.5;
        pos.style.opacity = 0.5;
        nat.style.opacity = 1;
        document.querySelector('h2').innerText = "Neutral content";

    }else {
        alert("index is invalid")
    }
    input.value = '';
});

button.addEventListener('mousedown', (e) =>{
    button.style.backgroundColor = "#d8d8d8";
    button.style.transform = "translateY(3px)";

})
button.addEventListener('mouseup', (e) =>{
    button.style.backgroundColor = "#d8d8d894";
    button.style.transform = "translateY(0px)";
});