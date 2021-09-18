function addFile() {
    file_str = "<div class='file'><lable for='file'>Filename: </label><input type='text' id='file' placeholder='filename.txt'></div>"
    document.getElementById("items").innerHTML += file_str
}
