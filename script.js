// B3ivXpnpM9uQnY29D2ALeiVmZFNrvI8bpYxSBT1m834JKsVLRHNupy0w
const myApiKey = 'B3ivXpnpM9uQnY29D2ALeiVmZFNrvI8bpYxSBT1m834JKsVLRHNupy0w'
const url = 'https://api.pexels.com/v1/search?query=people'

fetch(url, {
    method: 'GET',
    headers: {
        Authorization: `${myApiKey}`
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Errore di rete - ${response.status}`);
        }
        return response.json()
    })
    .then(data => {
        //cosa vogliamo fare con i dati
        console.log(data)

        //recuperare le photo delle persone dall'oggetto data
        const album = data.photos
        console.log(album)

        let htmlListContent = ''
        album.forEach((photo) => {

            //vado a inserire ogni photo dentro le card
        })



    })
    .catch(error => {
        console.log(error)
    })

