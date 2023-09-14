function openPopup(planet) {
    const videoUrls = {
        sun:"https://www.youtube.com/embed/2HoTK_Gqi2Q",
        mercury: "https://www.youtube.com/embed/0KBjnNuhRHs",
        venus: "https://www.youtube.com/embed/BvXa1n9fjow",
        earth: "https://www.youtube.com/embed/HCDVN7DCzYE",
        mars:"https://www.youtube.com/embed/D8pnmwOXhoY",
        jupiter:"https://www.youtube.com/embed/PtkqwslbLY8",
        saturn:"https://www.youtube.com/embed/epZdZaEQhS0",
        uranus:"https://www.youtube.com/embed/m4NXbFOiOGk",
        neptune:"https://www.youtube.com/embed/NStn7zZKXfE"
    };

    const videoUrl = videoUrls[planet];
    const videoContainer = document.getElementById("video");
    videoContainer.src = videoUrl;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    const videoContainer = document.getElementById("video");
    videoContainer.src = "";
    document.getElementById("popup").style.display = "none";
}