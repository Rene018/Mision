// =[[1,0,0],[0,1,0],[0,0,1]]
const arr =[]
for (let i = 0; i < 3; i++) {
    arr[i]=[]
    for (let a = 0;  a< 3; a++) {
        if (a===i) {
            arr[i][a]=1
        } else {
            arr[i][a]=0
        }
        
    }
    
}