$(".action").click(function () {
    var $input = $(".input");
    var li = $("<li>").text(new Date().toUTCString()).addClass("list-group-item");
    $input.append(li);
});
