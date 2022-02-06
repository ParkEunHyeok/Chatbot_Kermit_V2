$(document).ready(function () { // 쓸데없는거 ㅋㅋ
    $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
    });
});

$(document).ready(function () { // 유저가 sent 버튼을 눌렀을 때 실행
    $('#sent_btn').click(function () {
        var data = $("[name=type_msg]").val(); // 유저가 보낸 데이터 읽어옴
        console.log(data);
        if (data != "") { // 내용 비어있으면 pass
            createUserDiv(data); // 유저 전송 박스 생성
            sendPost('/chatApi', data); // 봇 데이터 요청
        }

    });


});

function enterkey() { // 엔터 누르면 작동(동작안함ㅋㅋ)
    if (event.keycode == 13) {
        $('#sent_btn').click(function () {
            var data = $("[name=type_msg]").val();
            console.log(data);
            if (data != "") {
                createUserDiv(data)
            }
    
        });
    }
}

function createUserDiv(data) { // 유저가 보낸 채팅 html 공간 생성 후 표시
    const newDiv = document.createElement('div')
    var field = document.getElementById("chat_box");

    newDiv.className += "d-flex justify-content-end mb-4"

    let today = new Date();
    
    var str = '';
    str += "<div class=\"msg_cotainer_send\">";
    str += data;
    str += "<span class=\"msg_time_send\">";
    str += today.toLocaleTimeString();
    str += "</span>";
    str += "</div>";
    str += "<div class=\"img_cont_msg\">";
    str += "<img src=\"./static/Elmo_profile.png\" "
    str += "class=\"rounded-circle user_img_msg\"></div>"

    newDiv.innerHTML = str;

    field.appendChild(newDiv);
}

function createBotDiv(data) { // bot이 응답하는 데이터 box 생성 후 표시
    const newDiv = document.createElement('div')
    var field = document.getElementById("chat_box");

    newDiv.className += "d-flex justify-content-start mb-4"

    let today = new Date();
    
    var str = '';
    str += "<div class=\"img_cont_msg\">";
    str += "<img src=\"./static/Kermit_profile.png\" ";
    str += "class=\"rounded-circle user_img_msg\"></div>";
    str += "<div class=\"msg_cotainer\">";
    str += data;
    str += "<span class=\"msg_time\">";
    str += today.toLocaleTimeString();
    str += "</span></div></div>";

    newDiv.innerHTML = str;

    field.appendChild(newDiv);
}