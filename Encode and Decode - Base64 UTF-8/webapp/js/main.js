class EncodeDecodeBase64UTF8 {

    constructor() {
        this.name = "UTF-8"
    }

    encode = function b64EncodeUnicode(str) {
        // first we use encodeURIComponent to get percent-encoded UTF-8,
        // then we convert the percent encodings into raw bytes which
        // can be fed into btoa.
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode('0x' + p1);
            }));
    }

    decode = function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
}

class EncodeDecodeBase64ASCII {

    constructor() {
        this.name = "ASCII"
    }

    encode = function b64Encode(str) {
        return btoa(str);
    }

    decode = function b64Decode(str) {
        return atob(str);
    }
}


class EncodeDecodeController {

    constructor(conversor) {
        this.conversor = conversor
    }

    addEventListener() {
        document.getElementById('button_encode').addEventListener('click', () => {
            
            console.debug("Encode: ", this.conversor.name)
            const text_to_encode_value = document.getElementById('text_encode').value;
            const text_from_decode_value = this.conversor.encode(text_to_encode_value);
            document.getElementById('text_decode').value = text_from_decode_value
        }, false);

        document.getElementById('button_decode').addEventListener('click', () => {
            console.debug("Decode: ", this.conversor.name)
            const text_to_decode_value = document.getElementById('text_decode').value;
            const text_from_encode_value = this.conversor.decode(text_to_decode_value);
            document.getElementById('text_encode').value = text_from_encode_value
        }, false);

        document.getElementById('tipo_codificacao').addEventListener('change', (event) => {
            switch (event.target.value) {
                case 'UTF-8':
                    this.conversor = new EncodeDecodeBase64UTF8();
                    break;
                case 'ASCII':
                    this.conversor = new EncodeDecodeBase64ASCII();
                    break;
            }

            console.debug("Type codification: ", this.conversor.name)
        }, false);
    }
}

(() => {
    const encodeDecodeBase64UTF8 = new EncodeDecodeBase64UTF8();

    const encodeDecodeController = new EncodeDecodeController(encodeDecodeBase64UTF8);
    encodeDecodeController.addEventListener();

})();