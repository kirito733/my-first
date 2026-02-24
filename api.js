let url ="https://isro.vercel.app/api/spacecrafts"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((spacecrafts)=>{
    console.log(spacecrafts)
    ihtml = ""
    for(item in spacecrafts) {
        console.log(spacecrafts[item])
        ihtml +=`
         <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${spacecrafts[item].name}</h5>
    <p class="card-text"><a href="${spacecrafts[item].url}">visit here</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`
    }
    cardContainer.innerHTML = "ihtml"
})