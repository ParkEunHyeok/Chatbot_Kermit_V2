function sendPost(url, params) { // json 형식으로, ChatApi에 봇 prediction 요청
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json; charset=utf-8-sig',
        data: params,
        dataType: 'json',
        success: function(response) { // 성공시 실행되는 함수
            var result = JSON.parse(JSON.stringify(response)); // return 된 내용
            createBotDiv(result); // 챗봇 데이터 표시
        }
    });
}