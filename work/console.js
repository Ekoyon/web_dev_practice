const randomClickFunction = function () {
    const colors = ["green", "lemon", "blue", "purple", "red", "orange", "yellow", "black", "grey", "white"];
  
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  const randomColor = colors[randomIndex];
  
  htmlBody.style.backgroundColor = randomColor;
  
  console.log("The user clicked and set the colort to" + randomColor);
  }

  randomClickFunction();
  htmlBody.onClick = randomClickFunction();

  const myDate = new Date();
  myDate.toISOString()