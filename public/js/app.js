const loadingElement = `<h2>LOADING...</h2>`;
document.querySelector('form').addEventListener('submit', (e) => {
    document.querySelector('.weatherRender').innerHTML = '';
    e.preventDefault();
    const city = document.querySelector('input').value;

    const local_url = `http://localhost:3000/weather/?city=${city}`;

    console.log('you are running app.js in js folder');
    document.querySelector('.weatherRender').innerHTML = loadingElement;
    fetch(local_url)
        .then((response) => {

            document.querySelector('.weatherRender').innerHTML = '';
            response.json()
                .then((data) => {
                    if (data.error) {


                        console.log(data.error);
                        const renderElement = `<h2 >Oops!   ${data.error}</h2>`
                        document.querySelector('.weatherRender').insertAdjacentHTML('beforeend', renderElement);

                    } else {

                        const renderElement = `<h2 >The weather is ${data.temperature} ${city} and it feels ${data.feelslike}</h2><img src="${data.weather_icons}" alt="icons">`
                        document.querySelector('.weatherRender').insertAdjacentHTML('beforeend', renderElement);
                        console.log(data);

                    }


                })
                .catch(error => {
                    document.querySelector('.weatherRender').innerHTML = '';
                    const renderElement = `<h2 >Oops!  address not found</h2>`
                    document.querySelector('.weatherRender').insertAdjacentHTML('beforeend', renderElement);

                    console.log('address not found')
                })

        })



})