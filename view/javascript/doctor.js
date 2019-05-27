console.log(window.location.pathname.slice(8, window.location.pathname.length));

var number = window.location.pathname.slice(8, window.location.pathname.length);
var url = "/doctor/json/" + number;
fetch(url)
    .then(response => {
        // console.log(response.json());
        return response.json();
        // response.text();
        // console.log(JSON.parse(response));
    })
    .then(data => {
        // console.log(JSON.parse(data)); // Prints result from `response.json()` in getRequest
        // console.log(data);
        // console.log(data.id);
        document.getElementById('nume').innerHTML = "<h2> Buna ziua " + data.firstName +" "+data.lastName+ "!</h2>";
    })
    .catch(error => console.error(error));
var url1="/doctor/progr/" + number;
console.log(url1);
fetch(url1)
    .then(response => {return response.json()})
    .then(data=>{
        // console.log(data);
        // document.getElementById('container-fluid').innerHTML=""
        console.log(Object.keys(data).length);
        // console.log(data[0]);
        // console.log(data[1]);
        // console.log(data[0].ownerEmail);
        
        var output="";
        for(var i=0;i<Object.keys(data).length;i++){
            console.log(data[i].ownerEmail);
            // var node = document.createElement("");
            output +="<div class = 'table-row'><div class='text'>"+data[i].pacientName+"</div><div class='num'>"+data[i].pacientAge+"</div><div class='text'>"+data[i].pacientType+"</div><div class='text'>"+data[i].date+"</div><div class='text'>"+data[i].hour+"</div><div class='text'>"+data[i].reason+"</div></div>";
            // div.appendChild(content);
            // div.appendChild(node);
        }
        document.getElementById('container-fluid').innerHTML= "<div class='table-row header'><div class='text'>Nume pacient</div><div class='num'>Varsta</div><div class='text'>Tip animal</div><div class='text'>Data programarii</div><div class='text'>Ora programarii</div><div class='text'>Motiv programare</div></div><div class='table-row'><div class='text'>"+output;

    })