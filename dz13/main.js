function pow(num = prompt('Enter the "NUM"'), degree = prompt('Enter the "DEGREE"')) {
    if(degree != 1){
        return num *= pow(num,degree - 1);
    } else {
        return num;
    }
}
console.log(pow());