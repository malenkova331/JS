let s = 'Hello, world!'

let reverse = (n) => {
    let o = '';
    for (let i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
}
console.log(reverse(s))