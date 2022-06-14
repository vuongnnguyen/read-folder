document.getElementById("filepicker").addEventListener("change", function(event) {
    let files = event.target.files;
    for (let i=0; i<files.length; i++) {
        let reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = function () {
            let a = document.createElement('a');
            a.href = reader.result;
            a.download = files[i].name;
            a.style.display = 'none';
            document.body.append(a);
            a.click();
            a.remove();
        }
    };
  }, false);