function addFile() {
    file_str = "<div class='file'><label for='file'>Filename: </label><input type='text' id='file' placeholder='filename.txt'></div>"
    document.getElementById("items").innerHTML += file_str
}

function addFolder() {
    let folderStr = `
    <div class="folder">
        <div class="folder-name">
            <label for="folder-name">Folder Name: </label>
            <input type="text" id="folder-name" placeholder="Folder Name">
        </div>
        <div id="folder-contents"></div>
    </div>`
    document.getElementById("items").innerHTML += folderStr
}
