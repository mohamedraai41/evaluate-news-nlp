function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    Client.checkForfUrl(formText)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8080', {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            formText: formText
        }),
    })
        .then(res => {
            return res.json()
        })
        .then(function (res) {
            document.getElementById('results').innerHTML = res.agreement;
            document.getElementById('polarity').innerHTML = res.irony;
            document.getElementById("score_tag").innerHTML = res.score_tag;
            document.getElementById("confidence").innerHTML = res.confidence;
        })
}
export { handleSubmit }
