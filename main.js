$(document).ready(function () {

    let enabled = [];
    for (let i = 0; i < 17; i++) {
        enabled.push(true)
    }

    let canOpenNewBox = true;

    $('.box').hover(function () {
        const boxNumber = parseInt($(this).children("h2").html());

        if (enabled[boxNumber] === true) {
            $(this).css('background', 'linear-gradient(#98de5b, #08e1ae)');
        }
    },
        function () {
            const boxNumber = parseInt($(this).children("h2").html());

            if (enabled[boxNumber] === true) {
                $(this).css('background', 'linear-gradient(#1E5799, #7db9e8)');
            }
        });

    var val1 = "";
    var val2 = "";
    var box1 = "";
    var box2 = "";

    $(".box").click(function () {
        const boxNumber = parseInt($(this).children("h2").html());
        if (!enabled[boxNumber] || !canOpenNewBox) return;

        $(this).children("h3").css("display", "block");
        $(this).children("h2").css("display", "none");

        if (val1 == "") {
            val1 = $(this).children("h3").html();
            box1 = $(this);
        }
        else {
            val2 = $(this).children("h3").html();
            box2 = $(this);

            if (val1 != "" && val2 != "") {
                if (val1 === val2 && box1 != box2) {

                    box1.css('background', 'linear-gradient(#d2ccc4, #2f4353)');
                    box2.css('background', 'linear-gradient(#d2ccc4, #2f4353)');

                    let boxNumber1 = parseInt(box1.children("h2").html());
                    let boxNumber2 = parseInt(box2.children("h2").html());
                    enabled[boxNumber1] = false;
                    enabled[boxNumber2] = false;

                    val1 = "";
                    val2 = "";
                    box1 = "";
                    box2 = "";
                }
                else {
            
                    canOpenNewBox = false;
                    setTimeout(() => {
                        box1.children("h3").css("display", "none");
                        box2.children("h3").css("display", "none");
                        box1.children("h2").css("display", "block");
                        box2.children("h2").css("display", "block");

                        val1 = "";
                        val2 = "";
                        box1 = "";
                        box2 = "";

                        canOpenNewBox = true;
                    }, 1000)
                }
            }
        }
    })
})