$(document).ready(function(){
    $("#subscribe").click(function(){
        
    });


$("#icon1").on("click", function(){
    $("#des").hide();
    $("#icon1").toggle();
    $("#des").show();
    });
$("#des").on("click",function(){
    $("#icon1").hide();
    $("#des").toggle();
    $("#icon1").show();
    });


    $("#icon2").on("click", function(){
        $("#dev").hide();
        $("#icon2").toggle();
        $("#dev").show();
        });
    $("#dev").on("click",function(){
        $("#icon2").hide();
        $("#dev").toggle();
        $("#icon2").show();
        });    


        $("#icon3").on("click", function(){
            $("#prod").hide();
            $("#icon3").toggle();
            $("#prod").show();
            });
        $("#prod").on("click",function(){
            $("#icon3").hide();
            $("#prod").toggle();
            $("#icon3").show();
            }); 
        var user
    $("#subscribe").click(function(){
        var userName = document.getElementById("mce-NAME").value;
        alert(userName + " we have received your message. Thank you for reaching out to us.");
        });               
// $("#icon2").click(function(){
//     $("#dev").show();
//     $("icon2").hide();
// });


// $("#icon3").click(function(){
//     $("#prod").show();
//     $("icon3").hide();
// });
});
