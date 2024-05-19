/**
 * Very barebones user data validation
 * @param  {...any} args items to check 
 * @returns {Object} output returns an object. This object contains a boolean that tell if data is valid or not.
 * if it is offensive, the function returns the offending object.
 */
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


const addToStorage = (name, object) => {
    let tasksArray = JSON.parse(localStorage.getItem(name));
    
    if(tasksArray === null) {
        tasksArray = new Array();
    } 

    tasksArray.push(object);
    localStorage.setItem(name, JSON.stringify(tasksArray));

};
