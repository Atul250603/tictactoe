let element1 = document.getElementById("0");
let element2 = document.getElementById("1");
let element3 = document.getElementById("2");
let element4 = document.getElementById("3");
let element5 = document.getElementById("4");
let element6 = document.getElementById("5");
let element7 = document.getElementById("6");
let element8 = document.getElementById("7");
let element9 = document.getElementById("8");
let win = document.getElementById("win");
let turn = document.getElementById("turn");
let tbody=document.getElementById("tbody");
let count = 0;
let btn=document.getElementById("playAgain");
btn.addEventListener('click',func1);
element1.addEventListener("click", func);
element2.addEventListener("click", func);
element3.addEventListener("click", func);
element4.addEventListener("click", func);
element5.addEventListener("click", func);
element6.addEventListener("click", func);
element7.addEventListener("click", func);
element8.addEventListener("click", func);
element9.addEventListener("click", func);
function func(e) {
  let element = e.currentTarget;
  let tr=document.createElement('tr');
  let td=document.createElement('td');
  tr.appendChild(td);
  if (count == 0) {
    element.textContent = "O";
    element.style = "color:white;";
    turn.textContent = "Player 2's Turn";
  } else if (count % 2 == 0) {
    element.textContent = "O";
    element.style = "color:white;";
    turn.textContent = "Player 2's Turn";
  } else {
    element.textContent = "X";
    element.style = "color:white;";
    turn.textContent = "Player 1's Turn";
  }
  if (count >= 4) {
    if (
      element1.textContent === element2.textContent &&
      element2.textContent === element3.textContent
    ) {
      if (element1.textContent === "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element1.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else if (
      element4.textContent === element5.textContent &&
      element5.textContent === element6.textContent
    ) {
      if (element4.textContent == "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element4.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else if (
      element7.textContent === element8.textContent &&
      element8.textContent === element9.textContent
    ) {
      if (element7.textContent === "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element7.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else if (
      element1.textContent === element4.textContent &&
      element4.textContent === element7.textContent
    ) {
      if (element7.textContent === "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element7.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else if (
      element2.textContent === element5.textContent &&
      element5.textContent === element8.textContent
    ) {
      if (element2.textContent === "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element2.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else if (
      element3.textContent === element6.textContent &&
      element6.textContent === element9.textContent
    ) {
      if (element3.textContent === "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element3.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else if (
      element1.textContent === element5.textContent &&
      element5.textContent === element9.textContent
    ) {
      if (element1.textContent === "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element1.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else if (
      element3.textContent === element5.textContent &&
      element5.textContent === element7.textContent
    ) {
      if (element7.textContent === "O") {
        td.textContent="Player 1 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 1 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      } else if (element7.textContent === "X") {
        td.textContent="Player 2 is the winner";
        tbody.appendChild(tr);
        win.textContent = "Player 2 is the winner";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    } else {
      if (count == 8) {
        td.textContent="It's a Tie";
        tbody.appendChild(tr);
        win.textContent = "It's a Tie";
        turn.textContent = "";
        btn.style = "display:inline;";
        element1.removeEventListener("click", func);
        element2.removeEventListener("click", func);
        element3.removeEventListener("click", func);
        element4.removeEventListener("click", func);
        element5.removeEventListener("click", func);
        element6.removeEventListener("click", func);
        element7.removeEventListener("click", func);
        element8.removeEventListener("click", func);
        element9.removeEventListener("click", func);
        return;
      }
    }
  }
  count++;
}
function func1(){
  element1.textContent="";
  element2.textContent="";
  element3.textContent="";
  element4.textContent="";
  element5.textContent="";
  element6.textContent="";
  element7.textContent="";
  element8.textContent="";
  element9.textContent="";
  element1.addEventListener('click',func);
  element2.addEventListener('click',func);
  element3.addEventListener('click',func);
  element4.addEventListener('click',func);
  element5.addEventListener('click',func);
  element6.addEventListener('click',func);
  element7.addEventListener('click',func);
  element8.addEventListener('click',func);
  element9.addEventListener('click',func);
  win.textContent="";
  btn.style="display:none;";
  turn.textContent="Player 1's Turn";
  count=0;

}
        let link1=document.getElementById("link1");
        let link2=document.getElementById("link2");
        let link3=document.getElementById("link3");
        let footer=document.getElementById("footer");
        link1.addEventListener('click',func2);
        link2.addEventListener('click',func3);
        link3.addEventListener('click',func4);
        function func2(e){
            // let currentElement=e.currentTarget;
            // let parent1=currentElement.parentElement;
            // let parent2=parent1.parentElement;
            // let parent3=parent2.parentElement;
            // let sibling1=parent3.nextElementSibling;
            let target1=document.getElementById("link1info");
            let target2=document.getElementById("link2info");
            let target3=document.getElementById("link3info");
            target2.style="display:none;";
            target3.style="display:none;";
            target1.style="display:inline;";
            footer.classList.remove("footerSet");
        }
        function func3(e){
            // let currentElement=e.currentTarget;
            // let parent1=currentElement.parentElement;
            // let parent2=parent1.parentElement;
            // let parent3=parent2.parentElement;
            // let sibling1=parent3.nextElementSibling;
            let target1=document.getElementById("link1info");
            let target2=document.getElementById("link2info");
            let target3=document.getElementById("link3info");
            target1.style="display:none;";
            target3.style="display:none;";
            target2.style="display:inline;";
            footer.classList.add("footerSet");
        }
        function func4(e){
          // let currentElement=e.currentTarget;
          // let parent1=currentElement.parentElement;
          // let parent2=parent1.parentElement;
          // let parent3=parent2.parentElement;
          // let sibling1=parent3.nextElementSibling;
          let target1=document.getElementById("link1info");
            let target2=document.getElementById("link2info");
            let target3=document.getElementById("link3info");
          target1.style="display:none;";
          target2.style="display:none;";
          target3.style="display:flex; justify-content:center;";
          if(!(footer.classList.contains("footerSet"))){
            footer.classList.add("footerSet");
          }
      }