import queryStringify from './queryStringify';

enum Metods {
    Get = 'GET',
    Put = 'PUT', 
    Post = 'POST', 
    Delete = 'DELETE'
};

type TypesOptions = {
    data?: any,
    timeout?: number,
    headers?: any,
    method: Metods

}

class HTTPTransport {
    get = (url: string, options: TypesOptions = {method: Metods.Get}) => {
            if (options && options.data) {
                url = url + queryStringify(options.data);
            }
            return this.request(url, options);
    };
    post = (url: string, options: TypesOptions = {method: Metods.Post}) => {
        return this.request(url, options);
    };
    put = (url: string, options: TypesOptions = {method: Metods.Put}) => {
        return this.request(url, options);
    };
    delete = (url: string, options: TypesOptions = {method: Metods.Delete}) => {
        return this.request(url, options);
    };

    request = (url: string, options: TypesOptions) => {
        const {headers, data, method} = options;
        console.log(options);
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
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
            xhr.timeout = (options.timeout) ? options.timeout : 0; 

            if (method === Metods.Get|| !data) {               
                xhr.send();
            } else {
                xhr.send(data);
            }

            if (xhr.status !== 200) {
                console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
            } else {
                console.log( xhr.responseText ); // responseText -- текст ответа.
            }
        });
    };
}
