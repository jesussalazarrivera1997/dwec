/*2. The World Translator
Write a function named helloWorld that:
takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.
 */

function helloWorld(language) {
	var saludo = "";
	switch (language) {
        case "es":
			saludo = "Hola mundo";
			break;
		case "de":
			saludo = "Hallo Welt";
			break;
		default:
			saludo = "hellow, World";
			break;
	}
	
	return document.write(saludo);
}
helloWorld("es")