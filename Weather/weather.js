const apiKey = 'bc88a3325103ff3f8a8956afa0b5aa28';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let search = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImg = document.querySelector(".status img");

async function wether(city)
{
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var status = await responce.json();

    document.querySelector(".city").innerHTML = status.name;
    document.querySelector(".actual").innerHTML = Math.round(status.main.temp);

    if(status.weather[0].main =='Clouds')
    {
        weatherImg.src = 'https://pluspng.com/img-png/partly-cloudy-png-hd-sunny-to-partly-cloudy-icon-256.png'
    }
    else if(status.weather[0].main =='Clear')
    {
        weatherImg.src = 'https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png'
    }
    else if(status.weather[0].main =='Rain')
    {
        weatherImg.src = 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png'
    }
    else if(status.weather[0].main =='Drizzle')
    {
        weatherImg.src = 'https://cdn-icons-png.freepik.com/512/6142/6142570.png'
    }
    else if(status.weather[0].main =='Mist')
    {
        weatherImg.src = 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png'
    }

}

searchBtn.addEventListener('click',() => {
    wether(search.value);
});



