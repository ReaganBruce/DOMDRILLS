document.addEventListener("DOMContentLoaded", function () {
  let thisDiv = document.createElement("div");
  thisDiv.className = "header-container";

  let thisH1 = document.createElement("h1");
  let h1Text = document.createTextNode("This is an h1!");
  thisH1.className = "h1";

  thisH1.appendChild(h1Text);
  thisDiv.appendChild(thisH1);

  let thisH2 = document.createElement("h2");
  let h2Text = document.createTextNode("This is an h2!");
  thisH2.className = "h2";

  thisH2.appendChild(h2Text);
  thisDiv.appendChild(thisH2);

  let thisH3 = document.createElement("h3");
  let h3Text = document.createTextNode("This is an h3!");
  thisH3.className = "h3";

  thisH3.appendChild(h3Text);
  thisDiv.appendChild(thisH3);

  let thisH4 = document.createElement("h4");
  let h4Text = document.createTextNode("This is an h4!");
  thisH4.className = "h4";

  thisH4.appendChild(h4Text);
  thisDiv.appendChild(thisH4);

  let thisH5 = document.createElement("h5");
  let h5Text = document.createTextNode("This is an h5!");
  thisH5.className = "h5";

  thisH5.appendChild(h5Text);
  thisDiv.appendChild(thisH5);

  let thisH6 = document.createElement("h6");
  let h6Text = document.createTextNode("This is an h6!");
  thisH6.className = "h6";

  thisH6.appendChild(h6Text);
  thisDiv.appendChild(thisH6);

  document.body.appendChild(thisDiv);

 

  //Adds "this is a list item" and ++ by 1 and changes colors
  let theButton = document.getElementById("thisButton");
  let add = 0;
  theButton.addEventListener("click", function () {
    add++;
    let li = document.createElement("li");
    let clickedButton = document.createTextNode(`This is list item ${add}`);
    li.appendChild(clickedButton);
    document.body.appendChild(li);
    li.addEventListener("click", function () {
      let colorsArray = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "black",
      ];
      let randomNum = Math.floor(Math.random() * colorsArray.length);
      li.style.color = colorsArray[randomNum];
  
       
    });

    li.addEventListener('dblclick', function(){
      li.remove();
    })
  });
  
});

