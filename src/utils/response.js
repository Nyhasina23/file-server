let res = {
    statusCode: undefined,
    status: (code) => {
        if ((typeof code === 'string' || Math.floor(code) !== code)) {
           throw 'Invalid status code'
        } else {
            this.statusCode = code
        }
        return res;
    },
    send: (toSendData) => {
        let data = {
            status: this.statusCode,
            data: toSendData
        }
        return data;
    }
}
module.exports ={res}
