const request = require('request')

function curlSim(cmd){
    let first, second;
    if (cmd.split(" ").length > 1) {
      first = cmd.split(" ")[0];
      second = cmd.split(" ")[1];
    }
    if (second && first === "curl") {
        request(second, function (error, response, body) {
            if(error){
                throw error
            }else if(body) {
                process.stdout.write(body);
            }else{
                console.log(`connection stuff: ${response}`)
            }
        })
    }
}

module.exports = curlSim