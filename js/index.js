function noHistoryHref(gamePath) {
    $.ajax(gamePath, {
        success: function (response) {
            document.getElementById("body").innerHTML = '<iframe style="width:100%;height:85vh;border:none;background-color: rgb(45, 45, 45); color:rgb(183, 183, 183);" src=' + gamePath + '></iframe>';
        }
    });
}
document.addEventListener('contextmenu', event => event.preventDefault());
