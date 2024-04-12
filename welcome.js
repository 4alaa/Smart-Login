



document.querySelector("h2").innerHTML=`hallo ${localStorage.getItem("user-Name")} in our page`

document.querySelector("h1").innerHTML=` ${localStorage.getItem("user-Name")} `


function logOut() {

    localStorage.removeItem("user-Name")
    location.href='index.html'
    
}

document.querySelector("#logOUt").addEventListener("click",logOut)




// text to speech
onload = function() {
	if ('speechSynthesis' in window) with(speechSynthesis) {

		var playEle = document.querySelector('#plays');

		var flag = false;



		function onClickPlay() {
			if (!flag) {
				flag = true;
				utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
				utterance.voice = getVoices()[0];
				utterance.onend = function() {
					flag = false;
				};
				speak(utterance);
			}

		}



	}

	else { /* speech synthesis not supported */
		msg = document.createElement('h5');
		msg.textContent = "Detected no support for Speech Synthesis";
		msg.style.textAlign = 'center';
		msg.style.backgroundColor = 'red';
		msg.style.color = 'white';
		msg.style.marginTop = msg.style.marginBottom = 0;
		document.body.insertBefore(msg, document.querySelector('div'));
	}
    
    onClickPlay()

}



