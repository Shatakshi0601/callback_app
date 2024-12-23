async function myFunction() {
    try {
      await new Promise(resolve=> setTimeout(resolve,1000))
      let result = 1+1;
      if (result !== 3) {
        throw new Error("Sum is not 3");
    }

    }  catch (error) {
      alert('Error: ' + error.message); 
    }
  }
  
document.getElementById("mybtn").addEventListener("click", myFunction)