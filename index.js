
let arr=[]
let input=document.getElementById("input-el")
let ulel=document.getElementById("unordered-el")
let saveinputbtn=document.getElementById("input-btn")

saveinputbtn.addEventListener("click",function(){
  arr.push(input.value)
  renderleads()
  document.getElementById("input-el").value=''
})
function renderleads(){
  let listitems= " "
  for(let i=0;i<arr.length;i++){
    listitems += "<li>" + arr[i] +  "</li>"
    console.log(listitems)
  }
   ulel.innerHTML= listitems

}
