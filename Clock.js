const Hours = document.getElementById("horas");
const Minutes = document.getElementById("minutos");
const Seconds = document.getElementById("segundos");
const LabelInfo = document.getElementById("info");

const clock = setInterval(function SetTimeToClock()
{
    let ThisDate = new Date();
    let Hour = ThisDate.getHours();
    let Minute = ThisDate.getMinutes();
    let Second = ThisDate.getSeconds();

    if(Hour < 10)
    {
        Hour = '0' + Hour;
    }
    if(Minute < 10)
    {
        Minute = "0" + Minute;
    }
    if(Second < 10)
    {
        Second = "0" + Second;
    }

    Hours.textContent = Hour;
    Minutes.textContent = Minute;
    Seconds.textContent = Second;
})

const CurrentDay = setInterval(function GetCurrentDay() {
    const DiaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const Meses = ["Janeiro", "Fevereiro ", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let DayNumber;
    let DayMonth;
    let Day = new Date();

    switch(Day.getDay())
    {
        case 0:
        {
            DayNumber = DiaSemana[0];
            break;
        }
        case 1:
        {
            DayNumber = DiaSemana[1];
            break;
        }
        case 2:
        {
            DayNumber = DiaSemana[2];
            break;
        }
        case 3:
        {
            DayNumber = DiaSemana[3];
            break;
        }
        case 4:
        {
            DayNumber = DiaSemana[4];
            break;
        }
        case 5:
        {
            DayNumber = DiaSemana[5];
            break;
        }
        case 6:
        {
            DayNumber = DiaSemana[6];
            break;
        }
    }

    switch(Day.getMonth())
    {
        case 0:
        {
            DayMonth = Meses[0];
            break;
        }
        case 1:
        {
            DayMonth = Meses[1];
            break;
        }
        case 2:
        {
            DayMonth = Meses[2];
            break;
        }
        case 3:
        {
            DayMonth = Meses[3];
            break;
        }
        case 4:
        {
            DayMonth = Meses[4];
            break;
        }
        case 5:
        {
            DayMonth = Meses[5];
            break;
        }
        case 6:
        {
            DayMonth = Meses[6];
            break;
        }
        case 7:
        {
            DayMonth = Meses[7];
            break;
        }
        case 8:
        {
            DayMonth = Meses[8];
            break;
        }
        case 9:
        {
            DayMonth = Meses[9];
            break;
        }
        case 10:
        {
            DayMonth = Meses[10];
            break;
        }
        case 11:
        {
            DayMonth = Meses[11];
            break;
        }
    }

    LabelInfo.textContent = "" + DayNumber + ", " + Day.getDate() + " de " + DayMonth + " de " + Day.getUTCFullYear() + "";
});