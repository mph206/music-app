let token;

requestAccessToken = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YzIxOWE5Y2EwYTQ1NDY0YjllY2Q2NGI5YTBjZjMwY2M6NGZkNmJlMjYxNWVkNGZlNThlNTA4ZTg3NGI3MGI4ZGY=");
        
    const urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
    };
    
    fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then(response => response.json())
      .then(result => token = result)
      .catch(error => console.log('error', error));
}

requestAccessToken()
console.log(requestAccessToken)


const requestData = (searchTerm) => {
    return fetch(`https://api.spotify.com/v1/tracks/${searchTerm}`, {
		headers: {
			'Authorization': `${token.token_type} ${token.access_token}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
        })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch((err) => console.log('error', err));
}

// https://developer.spotify.com/documentation/web-api/reference/object-model/


requestData('11dFghVXANMlKmJXsNCbNl')



    // // https://gomakethings.com/using-oauth-with-fetch-in-vanilla-js/