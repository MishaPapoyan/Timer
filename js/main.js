const year = document.getElementById('year')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.innerText = currentYear + 1;

function updateCounter() {
	const currentTime = new Date();
	const diff = nextYear - currentTime;
	const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutsLeft = Math.floor(diff / 1000 / 60) % 60;
	const secondsLeft = Math.floor(diff / 1000) % 60;

	days.innerText = `${daysLeft < 9 ? '0' + daysLeft : daysLeft} `;
	hours.innerText = `${hoursLeft < 9 ? '0' + hoursLeft : hoursLeft} `;
	minutes.innerText = `${minutsLeft < 9 ? '0' + minutsLeft : minutsLeft} `;
	seconds.innerText = `${secondsLeft < 9 ? '0' + secondsLeft : secondsLeft} `;
}

updateCounter()
setInterval(updateCounter,1000);