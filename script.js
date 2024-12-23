async function myFunction() {
    try {
      let result = 1+1;
      if (result !== 3) {
        throw new Error("Sum is not 3");
    }

    }  catch (error) {
      alert('Error: ' + error.message); 
    }
  }
  
document.getElementById("mybtn").addEventListener("click", myFunction)