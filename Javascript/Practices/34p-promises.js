
function func1(){
    return new Promise(function(resolve,reject){
        let error=true;
        if(!error)
        {
            resolve('resolved');
        }
        else{
            reject('rejected');
        }
    })
};
func1().then(function(re){
    console.log(re+' Your promise has been resolved')
}).catch(function(rej){
    console.log(rej+' Your promise has been rejected')
})
