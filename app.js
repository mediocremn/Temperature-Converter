/*Temperature Converter Folder - Javascript
This project converts a given temperature to the desired temperature.*/

const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');
/*This sets up the initial DOM variables for the Temperature Converter.  
  We use "querySelector" along with the CSS-style names to find DOM 
  elements other than ID elements.*/

function backColorTemp (temperature) {

const coldThermC_id = document.getElementById('cold_thermometerC');
const warmThermC_id = document.getElementById('warm_thermometerC');
const hotThermC_id = document.getElementById('hot_thermometerC');
const coldThermF_id = document.getElementById('cold_thermometerF');
const warmThermF_id = document.getElementById('warm_thermometerF');
const hotThermF_id = document.getElementById('hot_thermometerF');
const coldThermK_id = document.getElementById('cold_thermometerK');
const warmThermK_id = document.getElementById('warm_thermometerK');
const hotThermK_id = document.getElementById('hot_thermometerK');

	if (temperature>100) {
		celsiusInput.style.backgroundColor = "#ff0000";
		fahrenheitInput.style.backgroundColor = "#aa0000";
		kelvinInput.style.backgroundColor = "#550000";
		coldThermC_id.style.visibility = "hidden";
		warmThermC_id.style.visibility = "hidden";
		hotThermC_id.style.visibility = "visible";
		coldThermF_id.style.visibility = "hidden";
		warmThermF_id.style.visibility = "hidden";
		hotThermF_id.style.visibility = "visible";
		coldThermK_id.style.visibility = "hidden";
		warmThermK_id.style.visibility = "hidden";
		hotThermK_id.style.visibility = "visible";
	}
	if (temperature<0) {
		celsiusInput.style.backgroundColor = '#0000ff';
		fahrenheitInput.style.backgroundColor = "#0000aa";
		kelvinInput.style.backgroundColor = "#000055";
		coldThermC_id.style.visibility = "visible";
		warmThermC_id.style.visibility = "hidden";
		hotThermC_id.style.visibility = "hidden";
		coldThermF_id.style.visibility = "visible";
		warmThermF_id.style.visibility = "hidden";
		hotThermF_id.style.visibility = "hidden";
		coldThermK_id.style.visibility = "visible";
		warmThermK_id.style.visibility = "hidden";
		hotThermK_id.style.visibility = "hidden";
	}
	if (temperature>=0 && temperature<=100) {
		celsiusInput.style.backgroundColor = '#00ff00';
		fahrenheitInput.style.backgroundColor = "#00aa00";
		kelvinInput.style.backgroundColor = "#005500";
		coldThermC_id.style.visibility = "hidden";
		warmThermC_id.style.visibility = "visible";
		hotThermC_id.style.visibility = "hidden";
		coldThermF_id.style.visibility = "hidden";
		warmThermF_id.style.visibility = "visible";
		hotThermF_id.style.visibility = "hidden";
		coldThermK_id.style.visibility = "hidden";
		warmThermK_id.style.visibility = "visible";
		hotThermK_id.style.visibility = "hidden";
	}
}

function roundNum(num) {
	return Math.round(num*100)/100;
}
/*This function rounds values off to the nearest hundredth.*/

function celsiusToFahrenheitAndKelvin() {
	const cTemp = parseFloat(celsiusInput.value);
	const fTemp = (cTemp * (9/5)) + 32;
	const kTemp = cTemp + 273.15;
	fahrenheitInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
	backColorTemp(cTemp);
};
/*This function takes an inputted celsius temp, converts it to 
  fahrenheit & kelvin, and then displays the new values.  
  The DOM "addEventListener(event, function)" listens for a 
  specific event (like a 'input' event) & then calls the 
  specified function.  The ".value" gets the value entered 
  & displays it while fTemp converts from Celsius to Farenheit/Kelvin.
  We need to convert cTemp value from possible "string" to a 
  "floating number" by using "parseFloat" on it.  We also 
  use the rounding function above ("roundNum(kTemp)").*/

function fahrenheitToCelsiusAndKelvin() {
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32) * (5/9);
	const kTemp = cTemp + 273.15;
	celsiusInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
	backColorTemp(cTemp);
};
/*This function is similar to the above function.*/

function kelvinToCelsiusAndFahrenheit() {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp - 273.15;
	const fTemp = (cTemp * (9/5)) + 32;
	celsiusInput.value = roundNum(cTemp);
	fahrenheitInput.value = roundNum(fTemp);
	backColorTemp(cTemp);
};
/*This function is similar to the above function.*/

function main() {
	celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
	fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
	kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
}
/*This function calls the specific functions above when a specific value is entered.
  Note: Don't include parentheses when calling function  or they
  don't work.*/

main();
/*This calls the main function to start this temperature converter program.*/
