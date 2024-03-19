const generateEventCode = () => {
    let code = "";
    for(let i=0;i<10;i++){
        let ch = String.fromCharCode(65 + Math.random() * 26);
        code += ch;
    }
    return code;
}
module.exports = generateEventCode;