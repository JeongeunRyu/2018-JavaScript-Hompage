src = "http://code.jquery.com/jquery-3.3.1.min.js"
$(document).ready(function () {


    $(".input").focus(function () {
        $(this).css("background-color", "#C3B8D9");
    });
    $(".input").blur(function () {
        $(this).css("background-color", "white");
    });


    $("#ssignin").click(function () {
        $(".modal-content").load("a/register.html");
    });

    $("#reg_but").click(function () {
        $.ajax({
            url: "a/data.json",
            dataType: "json",
            type: "get",
            async:t,
            error: function () {
                alert("연결 실패");
            },
            success: function (data) {


                if (data.logindata[0].id != $("#loginid").val() || data.logindata[0].pw != $("#loginpw").val()) {
                    alert("로그인 실패!! \n 아이디와 비밀번호를 확인해주세요!!");
                } else {
                    alert("로그인 성공 \n " +
                        data.logindata[0]['name'] + "님 환영합니다!");
                    window.close();
                    opener.removebut();

                }
            }
        });


    });



});