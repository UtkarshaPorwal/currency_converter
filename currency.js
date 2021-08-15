const currency1= document.getElementById('from');
const currency2= document.getElementById('to');
const amountinput= document.getElementById('amount');
const amountoutput=document.getElementById('amount2');
const btnn= document.getElementById('btn1');
const rate1=document.getElementById('rateid');
function changer(){
    const curr1=currency1.value;
    const curr2=currency2.value;
    fetch(`https://v6.exchangerate-api.com/v6/3219662b0e1a6064b0f86ac4/latest/${curr1}`)
    .then((res)=>res.json())
    .then((data)=>{
        btnn.addEventListener('click',()=>{
        const  rate=data.conversion_rates[curr2];
        rate1.innertext=`1${curr1}=${rate}${curr2}`;
        amountoutput.value=(amountinput.value*rate).toFixed(2);})
    });
}

currency1.addEventListener('change',changer);
currency2.addEventListener('change',changer);
amountinput.addEventListener('input',changer);
amountoutput.addEventListener('input',changer);

// btnn.addEventListener('click',()=>{
//     const temp=currency1.value
//     currency1.value=currency2.value;
//     currency2.value=temp;
//     changer();

// })

changer();