function remBreaks() {

// maak variabele genaamd 'txtOutput' van de inhoud van het tekstveld 'oldText'
	var txtOutput = document.getElementById("oldText").value;

// vervang in de variabele 'txtOutput' alle plekken met 2 spaties of meer door een enkele spatie
	txtOutput = txtOutput.replace(/ {2,}/g," ")

// vervang in de variabele 'txtOutput' alle regeleindes door een enkele spatie
	txtOutput = txtOutput.replace(/(\r\n|\n|\r)/gm," ");

// vervang in de variabele 'txtOutput' de nu ontstane dubbele spaties met twee regeleindes om paragrafen te behouden
	txtOutput = txtOutput.replace(/\s{2,}/g, '\n\n');

// vervang ligaturen met een spatie door enkel de ligatuur, zonder spatie
	txtOutput = txtOutput.replace(/ff e/g, "ffe");
	txtOutput = txtOutput.replace(/ff a/g, "ffa");
	txtOutput = txtOutput.replace(/ff i/g, "ffi");
	txtOutput = txtOutput.replace(/fb /g, "fb");
	txtOutput = txtOutput.replace(/fl /g, "fl");
	txtOutput = txtOutput.replace(/fi /g, "fi");
	txtOutput = txtOutput.replace(/fj /g, "fj");
	txtOutput = txtOutput.replace(/ft e /g, "fte ");
	txtOutput = txtOutput.replace(/ft e\./g, "fte.");

// fix voor engelse woorden met combinatie ff + e
	txtOutput = txtOutput.replace(/sheriffen/g, "sheriff en");

// vervang spaties direct voorafgaand aan een punt
	txtOutput = txtOutput.replace(/ \./g, ".");

// publiceer de inhoud van de variabele 'txtOutput' in het tekstveld 'newText'
	document.getElementById("newText").value = txtOutput;
}

function clearTextAreas() {

	document.getElementById("oldText").value = "";
	document.getElementById("newText").value = "";

}