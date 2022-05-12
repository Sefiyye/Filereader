let input = document.querySelector(".selectImg");
let row = document.querySelector(".row");
let clickHere = document.querySelector(".clickBtn");

let dropZone = document.querySelector(".dropZone");

clickHere.addEventListener("click", () => {
  input.click();
});

input.addEventListener("change", (e) => {
  let files = Array.from(e.target.files);

  files.forEach((file) => {
    showImage(file);
  });
});

function showImage(file) {
  if (
    file.type != "image/png" &&
    file.type != "image/jpg" &&
    file.type != "image/jpeg"
  ) {
    alert("Please choose image file");
    return;
  }

  let fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.addEventListener("loadend", () => {
    let col2 = document.createElement("div");
    col2.className = "col-lg-2 image ";

    let img = document.createElement("img");
    img.src = fileReader.result;
    img.style.width = "100%";
    img.classList.add("image");

    let icon = document.createElement("i");
    icon.className = "fa-solid fa-trash-can";
    icon.classList.add("icon");
    icon.classList.add("delete");
    col2.appendChild(icon);

    icon.addEventListener("click", function () {
      let result = confirm("Are you sure?");
      if (result) {
        col2.remove();
      }
    });

    col2.appendChild(img);
    row.appendChild(col2);
  });
}

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  let files = Array.from(e.dataTransfer.files);
  files.forEach((file) => {
    showImage(file);
  });
});



// $('#file').on('keyup', function(){
//     var value = $(this).val()
//     console.log('Value:', value);
// })

// buildTable(file)
// function buildTable(data){
//     var table=document.getElementById('myTable')
//     table.innerHTML=''
    
//     for (var i = 0; i < data.length; i++){
//         var row = <tr>
//             <td>${data[i]. image}</td>
//             <td>${data[i]. name}</td>
//             <td>${data[i]. extension}</td>
//             <td>${data[i]. size}</td>
//             </tr>
//             table.innerHTML += row
//     }
// }