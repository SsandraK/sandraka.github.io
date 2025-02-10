
function displayInfo() {
    let section = document.getElementById("section");
section.innerHTML ='';
    let heading = document.createElement("h2");
    heading.textContent = "About Me";

    let paragraph = document.createElement("p");
    paragraph.innerHTML = `Hi! &#128075; My name is <strong>Sandra</strong>. I started my coding journey in 2022 with JavaScript by taking an online course on Udemy.
        I was both inspired and a bit confused by coding, which motivated me to dive deeper and study it in school.
        Fortunately, I discovered <strong>kood/Jõhvi</strong>, a hands-on coding program that allowed me to grow as a developer.
        Thanks to this experience, I realized that I am highly <strong>consistent, motivated, and focused</strong> on completing projects from start to finish.
         In this portfolio page, I have added some projects I have recently done. Go ahead and have a little scroll! &#128522;
    `;

    section.appendChild(heading);
    section.appendChild(paragraph);
}

document.addEventListener("DOMContentLoaded", displayInfo);

function displaySkyMap(){
    let videoUrl = 'videos/Sky-map.mp4';
    let videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.style.width = '40%';
    videoElement.style.display = 'block';

    document.getElementById('video-container1').appendChild(videoElement);
}


function displayKaqiz(){
    let videoUrl = 'videos/kaquiz1.mp4';
    let videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.style.width = '70%';
    videoElement.style.display = 'block';

    document.getElementById('video-container2').appendChild(videoElement);
}

function displayKaqiz(){
    let videoUrl = 'videos/kaquiz1.mp4';
    let videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.style.width = '70%';
    videoElement.style.display = 'block';

    document.getElementById('video-container2').appendChild(videoElement);
}

function displayChess(){
    let videoUrl = 'videos/chess02.mp4';
    let videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;
    videoElement.style.width = '70%';
    videoElement.style.display = 'block';

    document.getElementById('video-container3').appendChild(videoElement);
} 

function displayVideo(containerId, videoPath) {
    let container = document.getElementById(containerId);
    let videoElement = document.createElement('video');
    videoElement.src = videoPath;
    videoElement.controls = true;
    videoElement.style.width = '100%';
    videoElement.style.maxWidth = '500px';  
    videoElement.style.borderRadius = '10px';
    
    container.appendChild(videoElement);
}

document.addEventListener("DOMContentLoaded", () => {
    displayVideo('video-container1', 'videos/Sky-map.mp4');
    displayVideo('video-container2', 'videos/kaquiz1.mp4');
    displayVideo('video-container3', 'videos/chess02.mp4');
});



