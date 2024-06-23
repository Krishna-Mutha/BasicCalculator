		
		// displays the value 
		function dis(val) { 
			document.getElementById("result").value += val 
		} 
        // inputting the value at the display
		function inputvalue(event) { 
			if (event.key == '0' || event.key == '1' 
				|| event.key == '2' || event.key == '3' 
				|| event.key == '4' || event.key == '5' 
				|| event.key == '6' || event.key == '7' 
				|| event.key == '8' || event.key == '9' 
				|| event.key == '+' || event.key == '-' 
				|| event.key == '*' || event.key == '/') 
				document.getElementById("result").value += event.key; 
		} 

		// solving equation and returning result
		function solve() { 
			let x = document.getElementById("result").value 
			let y = math.evaluate(x) 
			document.getElementById("result").value = y 
		} 

		// clearing the display
		function clr() { 
			document.getElementById("result").value = "" 
		} 