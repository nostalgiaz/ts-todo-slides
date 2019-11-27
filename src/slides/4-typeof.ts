function doSomething(x: number | string) {
    if (typeof x === 'string') {
        x.substr(1);
    }
}