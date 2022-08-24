// Bài tập 2:

while(true) {   
    for (let i=2; i<101; i++) {
        let integer = true;
        for (let index=2; index <= Math.sqrt(i);index++) {
            if(i % index === 0) {
                integer = false;
                break;
            }
        }
        if (integer) {
         console.log(`${i} là số nguyên tố`);    
        }          
    }
    break;
}

// Bài tập 1:

function reverse()  {
    let arr=[5,1,4,2,8]
    for (let i=arr.length-1; i >= 0; i--) {
        console.log(arr[i])
    }
}


reverse();

