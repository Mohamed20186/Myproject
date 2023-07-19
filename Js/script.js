// JavaScript Creative Effects
const picture = document.getElementById("picture");

// Add a click event listener to the picture
picture.addEventListener("click", () => {
    // Change the picture source to a different image
    picture.src = "F:/Githup/Myproject/img/personal.jpg";

    // Rotate the picture by 45 degrees on each click
    picture.style.transform += "rotate(45deg)";

    // Add a red border to the picture on each click
    picture.style.border = "2px solid red";

    // Add a caption below the picture
    const caption = document.createElement("p");
    caption.innerText = "This is a creative picture!";
    caption.style.color = "blue";
    picture.insertAdjacentElement("afterend", caption);
});
