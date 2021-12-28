
let arr=["www.amazon.com","www.nie.ac.in","www.flipkart"]
let input=document.getElementById("input-el")
let ulel=document.getElementById("unordered-el")
let saveinputbtn=document.getElementById("input-btn")

  saveinputbtn.addEventListener("click",function(){
  arr.push(input.value)
  console.log(arr)
})


// for(let i=0;i<arr.length;i++){
//   ulel.textContent += arr[i] + " "
// }
//We don't want our text to be plain. We want it to be in the form of list.
let listitems= " "
for(let i=0;i<arr.length;i++){
  //ulel.innerHTML += "<li>" + arr[i] + "</li>"
  //OR
  //Using alternative way
  //Create element
  //set textContent
  //append textContent to ul
  // let z=document.createElement("li")
  // z.textContent=arr[i]
  // ulel.append(z)
  // OR
  //Improving performance
  listitems += "<li>" + arr[i] +  "</li>"
  console.log(listitems)
}
 ulel.innerHTML= listitems
