
let result = (input)=>{
    let regex = new RegExp(/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/);
    if (regex.test(input) == true) {
        return "true";
    }
    else {
        return "false";
    }
}

let emailres = (input) => {
    let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if (regex.test(input) == true) {
        return "true";
    }
    else {
        return "false";
    }
}

module.exports = {result,emailres}
