var months=["January","February","March","April",
            "May","June","July","August","September",
            "October","November","December"];

function isDate(d){
    var date = new Date(d);   
    return(date instanceof Date && !isNaN(date.valueOf()));
}


function unixConverter(timeStamp){   
    var d=new Date(timeStamp*1000)//js uses milliseconds, unix is in seconds
    return(months[d.getMonth()]+" "+d.getDate()+" , "+d.getFullYear())
}

function makePretty(d){
         d=new Date(d);
  var DATE=d.toString().split(' ')

    return months[d.getMonth()]+' '+DATE[2]+', '+DATE[3]
}


module.exports =function(query){
    var natural=null,unix=null;

    if (!isNaN(query)){ 
        natural= unixConverter(query); 
        unix=query}
    else if(isDate(query)){
        natural=makePretty(query); 
        unix=Date.parse(query)/1000
    }
    return ({natural,unix})  
}



