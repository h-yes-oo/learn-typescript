function logMessage(value: any) {
    console.log(value);
}
logMessage('hello');
logMessage(100);
logMessage(false);

//union Type !!!
var me: string | number | boolean;
function log(value: string | number | boolean) {
    if(typeof value === 'number'){
        console.log(`This is number : ${value}`);
    } else if(typeof value == 'string') {
        console.log(`This is a string : ${value}`);
    } else{
        throw new TypeError('oh my god');
    }
}

log('hello');
log(100);
log(false);