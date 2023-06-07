function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getDataFromApi() {
        (async () => {
          let response = await fetch('https://kav-api.kovalev.team/servodrive/lastActualData?servoDriveId=1%27);
          let el = document.getElementById('demo')
          el.innerHTML = ""
          let text = await response.text(); 
          for (const [key, value] of Object.entries(JSON.parse(text)[0])) {
            const newEl = document.createElement("li")
            newEl.appendChild(document.createTextNode(${key}: ${value}))
            el.appendChild(newEl)
            await sleep(100)
          }
        })()
      }
