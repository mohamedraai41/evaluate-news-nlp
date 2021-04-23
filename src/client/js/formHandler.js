function handleSubmit(event) {
    event.preventDefault()
    const url = document.getElementById('url');
    if (Client.checkForUrl(JSON.parse(JSON.stringify(url)))) {
        console.log("valid url")

        fetch('http://localhost:8081/add', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(res())
            })
            .then(res => res.json())
            .then(function(res) {

                console.log(res);

                document.getElementById('results').innerHTML = res.agreement;
                document.getElementById('polarity').innerHTML = res.irony;
                document.getElementById("score_tag").innerHTML = res.score_tag;
                document.getElementById("confidence").innerHTML = res.confidence;
            })
    } else {
        alert('Error invalid url')
    }
}
export { handleSubmit }