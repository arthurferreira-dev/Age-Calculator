let Inputdate = document.getElementById('data').valueAsDate;
let year = Inputdate.getUTCFullYear();
let resul = document.getElementById('result');
let Data = new Date();
let yearNow = Data.getFullYear();

function Enviar() {
    if (Inputdate) {
        let x = yearNow - year;
        resul.innerHTML= `Você tem ${x} anos. Certo?`;
    } else {
        resul.innerHTML = 'Porfavor coloque uma Data';
    }
}