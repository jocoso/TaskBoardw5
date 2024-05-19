const checkValidity = (...args) => {
    
    const output = {"val": true};

    args.every( (arg) => {
        //console.log(arg)
        arg = String(arg.trim());

        if(!Boolean(arg) || arg == "" || arg.length == 0) {
            output.val = false;
            output.obj = arg;
        }
        
    });
    
    
    return output;

}