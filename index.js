
let arr=[]
let input=document.getElementById("input-el")
let ulel=document.getElementById("unordered-el")
let saveinputbtn=document.getElementById("input-btn")
let savetabbtn=document.getElementById("savetab-btn")
let deletebtn=document.getElementById("delete-btn")


//to getelementfromstorage
//Rendering Data from localStorage if there is any data
//const because it won't be reassigned below.
const leadsfromstorage=JSON.parse(localStorage.getItem("myleads_key"))
if(leadsfromstorage){
    arr=leadsfromstorage
    render(arr)
}


function render(lead){
  let listitems= " "
  for(let i=0;i<lead.length;i++){
    // let x=arr[i]
    // let atag=documnet.createElement('a');
    // let linktext=atag.setattribute('href',x)
   //listitems += "<li><a href= '"+ arr[i] + "' target='_blank'>" + arr[i] +  "</a></li>"
   //listitems += "<li><a href= '#' target='_blank'>" + arr[i] + "</a></li>"
   // Using template strings
   listitems += `
   <li>
    <a href='${lead[i]}' target='_blank' rel = 'noreference noopener'>${lead[i]}</a>
  </li>
  `
  }
  ulel.innerHTML=listitems

}


//SAVE TAB BUTTOn
//Not hardcoded anymore
savetabbtn.addEventListener("click",function(){

  // To capture the current tab url
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    arr.push(tabs[0].url)
    localStorage.setItem("tabskey",JSON.stringify(arr))
    render(arr)
    console.log(JSON.parse(localStorage.getItem("tabskey")))
  }
)
  
}
)


//DELETE ALL FUNCTION
deletebtn.addEventListener("dblclick",function(){
  localStorage.clear()
  arr=[]
  //ulel.textContent=""
  //Better way to clear DOM is
  render(arr)  //because now arr is empty.
}
)



saveinputbtn.addEventListener("click",function(){
  arr.push(input.value)
  render(arr)
  //Inefficient way to store in localStorage
  // arr=JSON.stringify(arr)
  // localStorage.myleads_key=arr
  // arr=JSON.parse(arr)


  //Efficient way to do it
  //This way we are not changing the actual array
  localStorage.setItem("myleads_key",JSON.stringify(arr))


  // To get input field as blank after typing
  //document.getElementById("input-el").value=''
  input.value=''
  console.log(localStorage.getItem("myleads_key"))
})
