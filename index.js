exports.handler = function (event, context, callback) {
    //parameter value is present in event
    //here you can do your code    
    let value1 = event.value1 ? event.value1 : null;
    let value2 = event.value2 ? event.value2 : null;
    let action = event.action ? event.action : null;
    if (value1 !== null && value2 !== null) {
        let result = Number(value1) + Number(value2);
        return callback(null, { result: result }); //Success
    } else {
        return callback("error"); //Error      
    }
}
