// import {
//     baseUrl
// } from '@/config/env.js'

function getStatus(response) {
    let responseJson = {};
    switch (response.status) {
        case 500:
            alert("服务器异常");
            break;
        case 403:
            alert("token过期");
            break;
        case 404:
            alert("网络请求地址不存在");
            break;
        case 200:
            responseJson = response.json();
            break;
        case 400:
            break;
        case 504:
            alert("请求超时");
            break;
        default:
            // Message('请求超时');
            break;
    }
    return responseJson
}
export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    // url = baseUrl + url;

    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors",
            // cache: "force-cache"
        }

        if (type == 'POST') {
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            })
        }

        try {
            const response = await fetch(url, requestConfig);
            // const responseJson = await response.json();
            return getStatus(response)
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } 
            // else {
            //     requestObj = new ActiveXObject;
            // }

            let sendData = '';
            if (type == 'POST') {
                sendData = JSON.stringify(data);
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}