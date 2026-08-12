async function getData() {
    try {
        const response = await fetch("https://jsonplacehlder.typicode.com/non-existing-page-404")
        if (!response.ok) {
            throw new Error(`ERROR! status - ${response.status}`)
        }
    } catch (err){
        console.error("ERROR! Cannot load page!\n", err)
    }
}

getData()