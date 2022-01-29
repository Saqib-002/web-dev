function func1(){
    let error=false;
    if(!error){
        console.log(' error');
        throw new Error('Error Occur');
    }
    else{
        console.log('No error');
    }
}

try{
    func1();
}catch(error){
    console.log(error);
}finally{
    console.log("Finally");
    
}