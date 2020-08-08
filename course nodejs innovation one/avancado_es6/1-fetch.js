fecth('/data.json', {method: 'post', body: JSON.stringify})
.then(responseStream => {
        if(responseStream.status === 200){
            responseStream.json()
        }else{
            throw new Error('Request error')
        }
    }
)
.then(data => console.log(data))
.catch(err => console.log(err)) // apenas error de rede