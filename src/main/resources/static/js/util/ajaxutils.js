/**
 * Created by nbfujx on 2017/12/28.
 */


function getJSON (url) {
    return new Promise( (resolve, reject) => {
            var xhr = new XMLHttpRequest()
            xhr.open('GET', url, true)

            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(this.responseText, this)
                    } else {
                        var resJson = { code: this.status, response: this.response }
                        reject(resJson, this)
                    }
                }
            }

            xhr.send()
    })
}

function postJSON(url, data) {
    return new Promise( (resolve, reject) => {
            var xhr = new XMLHttpRequest()
            xhr.open("POST", url, true)
            xhr.setRequestHeader("Content-type", "application/json");

            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText), this)
                    } else {
                        var resJson = { code: this.status, response: this.response }
                        reject(resJson, this)
                    }
                }
            }

            xhr.send(JSON.stringify(data))
        })
}
