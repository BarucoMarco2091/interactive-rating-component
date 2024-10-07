let btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', () => {
    let r = document.getElementById('res');
    let radio = document.querySelector('input[name="r1"]:checked').value;
    r.innerText = radio;
    const container = document.querySelector('#container');
    container.outerHTML = `
<div id="containernew">
    <img src="assets/illustration-thank-you.png" width="20%" height="20%">
    <span>You selected ${radio} out of 5</span>
    <h1 id="new-title">Thank you!</h1>
    <p>We appreciate you taking the time to give a rating.<br>If you ever need more support, don't hesitate to<br>get in touch!</p>
</div>
`
});



