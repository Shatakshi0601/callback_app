async function myFunction() {
    try {
      let result = 10 / 5;
      if (result== 2) {
        alert("Division by 5 results in 2");
    } else {
        alert(result); 
    }

    }  catch (error) {
      alert('Error: ' + error.message); 
    }
  }
  
document.getElementById("mybtn").addEventListener("click", myFunction)