for(let i=1;i<10;i++){
    let temp='';
    for(let j=1;j<=i;j++){
        temp+=(i + '*' + j + '=' + i * j+' ');
    }
    console.log(temp);
}