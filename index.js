let options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'e4038346ebmsh18f8d9e4d66ee70p191150jsncacb55c7eb77',
        'X-RapidAPI-Host': 'get-details-by-pin-code-india.p.rapidapi.com'
    },
    body: '{"pincode":"751004"}'
};

let submit = document.getElementById('search');
submit.addEventListener('click', function () {
    document.getElementById('show').innerHTML = "";
    options.body = `{"pincode":"${document.getElementById('pincode').value}"}`;
    fetch('https://get-details-by-pin-code-india.p.rapidapi.com/detailsbypincode', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            let d = document.createElement('div');
            d.innerHTML = `City:${response.details[0]["city_name"]}<br>District:${response.details[0]["district_name"]}<br>State:${response.details[0]["state_name"]}`;
            document.getElementById('show').appendChild(d);

        })
        .catch(err => console.error(err));
})
