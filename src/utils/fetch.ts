enum Metods {
    Get = 'GET',
    Put = 'PUT', 
    Post = 'POST', 
    Delete = 'DELETE'
};

interface TypesOptions {
    data?: any,
    timeout?: number,
    headers?: any,
    method: Metods

}

function queryStringify(data: Record<string, string>): string {
    let str = '?';
    for (var key in data) {
        str = str + key + '=' + data[key] + '&'
    }
    return str.substr(0, str.length - 1)
}

class HTTPTransport {
    get = (url: string, options: TypesOptions = {method: Metods.Get}) => {
            if (options && options.data) {
                url = url + queryStringify(options.data);
            }
            return this.request(url, options, options.timeout);
    };
    post = (url: string, options: TypesOptions = {method: Metods.Post}) => {
        return this.request(url, options, options.timeout);
    };
    put = (url: string, options: TypesOptions = {method: Metods.Put}) => {
        return this.request(url, options, options.timeout);
    };
    delete = (url: string, options: TypesOptions = {method: Metods.Delete}) => {
        return this.request(url, options, options.timeout);
    };

    request = (url: string, options: TypesOptions, timeout = 5000) => {
        const {headers, data, method} = options;
        console.log(options);
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            console.log(xhr);
            xhr.open(method, url);

            if (headers) {
                Object.keys(headers).forEach((key) => {
                   xhr.setRequestHeader(key, headers[key]);
               });
            }
            
            xhr.onload = function() {
                resolve(xhr);
            };
              

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            xhr.timeout = timeout; 

            if (method === Metods.Get|| !data) {               
                xhr.send();
            } else {
                xhr.send(data);
            }
            console.log(xhr);

            if (xhr.status !== 200) {
                console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
            } else {
                console.log( xhr.responseText ); // responseText -- текст ответа.
            }
        });
    };
}
