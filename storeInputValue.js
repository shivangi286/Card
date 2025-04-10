function storeInput() {
  // Initialize an empty array
  const inputArray = [];
  
  // Get the input elements
  const input1 = document.getElementById("fname");
  const input2 = document.getElementById("lname");
  const input3 = document.getElementById("email");
  const input4 = document.getElementById("lineaddress");
  const input5 = document.getElementById("pcode");
  const input6 = document.getElementById("nHelp");
  const input7 = document.getElementById("tNumber");

  // Get the values of the input elements
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;
  const value4 = input4.value;
  const value5 = input5.value;
  const value6 = input6.value;
  const value7 = input7.value;
  
   if (value1 != "" && value2 != "" && value3 != "" && value4 != "" && value6 != "") {

    alert("Details submitted successfully!")
    // Add the values to the array
    inputArray.push(value1, value2, value3, value4, value5, value6, value7);
  
    // Print the array to the console
    console.log(inputArray);
   }
}