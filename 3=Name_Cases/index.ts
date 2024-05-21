//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Naila Solanki";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw/g,c=>c.toLocaleUpperCase()));