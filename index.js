
let arr=[]
let input=document.getElementById("input-el")
let ulel=document.getElementById("unordered-el")
let saveinputbtn=document.getElementById("input-btn")

saveinputbtn.addEventListener("click",function(){
  arr.push(input.value)
  renderleads()
  //document.getElementById("input-el").value=''
  input.value=''
})
function renderleads(){
  let listitems= " "
  for(let i=0;i<arr.length;i++){
    // let x=arr[i]
    // let atag=documnet.createElement('a');
    // let linktext=atag.setattribute('href',x)
   //listitems += "<li><a href= '"+ arr[i] + "' target='_blank'>" + arr[i] +  "</a></li>"
   //listitems += "<li><a href= '#' target='_blank'>" + arr[i] + "</a></li>"
   // Using template strings
   listitems += `
      <li>
        <a href = ' ${arr[i]} ' target='_blank'> ${arr[i]} <\a>
      <\li>
      `
  }
  ulel.innerHTML=listitems

}
