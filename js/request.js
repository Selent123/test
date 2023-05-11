function _request(param) {
    var data = null;
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var json = httpRequest.responseText;
            console.log(json);
            data = json
        }
    };
    httpRequest.open('GET', 'https://edu.telking.com/api/?type='+param, false);
    httpRequest.send();
    return data;
}
