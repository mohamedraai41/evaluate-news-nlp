function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    if(Client.checkForUrl(JSON.parse(JSON.stringify(formText[0].value))))
    {
        console.log("::: FORM INPUT VALID :::")
        
        console.log("BUILDING REQUEST");
        fetch('http://localhost:8080/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({text: formText[0].value})
        })        
        .then(res => res.json())
        .then(function(res) {
            
            console.log(res); 

            document.getElementById('results').innerHTML = res.agreement;
            document.getElementById('polarity').innerHTML = res.irony;
            document.getElementById("score_tag").innerHTML = res.score_tag;
            document.getElementById("confidence").innerHTML = res.confidence;
        })
    }else{
        let error_section = document.querySelector('section.errors');
        let error = document.querySelector('section.errors #error');
        error.innerHTML = "The URL:[" +JSON.stringify(input_url[0].value)+"] is not valide. Please enter a valid url"
        error_section.style.display = "block";
        
    } 
}
export { handleSubmit }

