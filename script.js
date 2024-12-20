const byteSize = (str) => {
	 const blob = new Blob([str]);
  
  // Return the size property of the Blob object, which gives the byte size
	  return blob.size;
	console.log(byteSize('hello world')); 
	console.log(byteSize('안녕하세요'));   
	console.log(byteSize(''));
  // write your code here
};
// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
