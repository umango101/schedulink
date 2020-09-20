$(function () {
    $("#button_repeat").ejButton({
        size: "mini",
        showRoundedCorner: true,
        //used to set the button in repeat mode
        repeatButton: true,
        //specifies the time interval for click method
        //call, when the button is in pressed state
        timeInterval: "200",
        click: "btnClick"
    });
});
//If the button  is in pressed state or clicked, this method will be called
function btnClick(e) {
    $(".eventTrace").html("click event has been triggered..</br>" + $(".eventTrace").html());
}