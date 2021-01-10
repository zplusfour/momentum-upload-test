const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const p = document.createElement("p");
      p.innerHTML = URL.createObjectURL(this.files[i])
      p.onclick = function() {
        URL.revokeObjectURL(this.innerHTML);
      }
      li.appendChild(p);
      const info = document.createElement("a");
      info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}