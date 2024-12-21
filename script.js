async function myFunction() {
    try {
      let result = 10 / 0;
      if (result== 0) {
        alert("Division by zero results in Infinity");
    } else {
        alert(result); 
    }

    }  catch (error) {
      alert('Error: ' + error.message); 
    }
  }
  
document.getElementById("mybtn").addEventListener("click", myFunction)