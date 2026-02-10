const str = "hello world from javaScript";
const titlecase = str.toLowerCase().split(' ').map(i => i.charAt(0).toUpperCase()+i.slice(1)).join(' ');
console.log(titlecase);