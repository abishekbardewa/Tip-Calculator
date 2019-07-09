

document.querySelector('#submit').addEventListener('click',calculate);


function calculate(e){
 
    //UI Variables
    const totalAmount = document.querySelector('#total-amount').value;
    const tip = document.querySelector('#tip').value;
    const people = document.querySelector('#people').value;
    
    if(totalAmount ==='' || totalAmount <1 || people ==='' || people <1){
        
            validate('Please fill all the fields','alert-danger'); 
               
    }
    
    let totalTip = (totalAmount) * (tip/100);

    let eachTip = Math.round(totalTip/people);
    eachTip = eachTip.toFixed(2);
    
    //Show Result
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `Total Tip: RS. ${eachTip} each`;

    const ul = document.querySelector('#result');
    const container = document.querySelector('#result-box');
    container.appendChild(li,ul);
    e.preventDefault();
    }

function validate(msg,className){
    const div = document.createElement('div');
    div.textContent = msg;
    div.className = `alert ${className}`;
    const card = document.querySelector('.card-body');
    const form = document.querySelector('#tip-form');

    card.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000)
}