let container = document.querySelector(".container")
let button = document.querySelector("button")
let count = 0
let box = 0
let one , two , three
one = two = three = 0
button.addEventListener("click" , () => {
  container.replaceChildren()
  count = prompt("put the number")
  count = +count
  let double = count ** 2
  let width = (899.9 / count)
  width = width / 899.9 * 100 // Culc the width of one box
  if (count > 100) {
    alert("Can not Exceed")
  } else if (count <= 0) {
    alert("Can not be Negative Or Zero")
  } else {
    for (let i = 1; i < double + 1; i++) {
      // let opacity = 0
      let box = document.createElement("div")
      box.setAttribute("style", `width:${width}%; opacity: 1;`);
      box.setAttribute("id" , "square")
      
      // box.addEventListener("mouseover" , () => {

      //   if (opacity === 0) {
      //     threeRandomsNum()
      //   } 
      //   if (opacity < 1) {
      //     box.setAttribute("style", `width:${width}%; opacity: ${opacity+=.1}; background-color: rgb(${one},${two},${three});`);
      //   } 
      //   // box.style.backgroundColor = `rgb(${one},${two},${three});`
        
      // })
      
      
      container.addEventListener("mouseover" , (e) => {
        let opacity = 0
        if ((e.target.id === "square")) {
          threeRandomsNum() //Random color
          e.target.setAttribute("style", `width:${width}%; opacity: ${opacity=1}; background-color: rgb(${one},${two},${three});`);
        }
          

        
        // let opacity = 0
        // if (e.target.id === "square") {
        //   opacity += 0
        //   if (opacity === 0) {
        //     threeRandomsNum()
        //   } 
        //   if (opacity < 1) {
        //     e.target.setAttribute("style", `width:${width}%; opacity: ${opacity+=.1}; background-color: rgb(${one},${two},${three});`);
        //   } 
        // }

      })

      container.appendChild(box)
    }
  }
})
function threeRandomsNum () {
  one = Math.floor(Math.random()*255)
  two = Math.floor(Math.random()*255)
  three = Math.floor(Math.random()*255)
  return one, two , three
}

