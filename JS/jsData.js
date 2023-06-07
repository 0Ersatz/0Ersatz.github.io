async function myFunction() {
    try {
        const response = await fetch('https://kav-api.kovalev.team/servodrive/lastActualData?servoDriveId=1');
        const data = await response.json();
        const el = document.getElementById('demo');
        el.innerHTML = '';

        for (const [key, value] of Object.entries(data[0])) {
            const newEl = document.createElement('li');
            newEl.appendChild(document.createTextNode(`${key}: ${value}`));
            el.appendChild(newEl);
            await sleep(0);
        }
    } catch (error) {
        console.log(error);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
