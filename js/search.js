
function checklog(e) {
    if(e == undefined || e == null || e == '') {
        alert("이전 주소를 찾을 수 없음");
    } else {
        alert(e);
    }
}
function showlog(e) {
    if(e.length < 1) {
        alert("접속로그를 찾을 수 없음");
    }
    else {
        var log = "";
        for (var i = 0; i < e.length; i++) {
            log = log + e[i] + "\n";
        }
        alert("최근 5건의 접속로그\n" + log);
    }
}
function insertlog(e) {
    var jsonData = {
        insertlog : e
    }
    $.ajax({
        url: "/insertadlog",
        type: "POST",
        data: jsonData
    }).done(function (data){
        alert("등록 완료");
        window.location.reload();
    }).fail(function (jqXHR, textStatus) {
        if (jqXHR.status == 403) { alert("실패"); }
        if (jqXHR.status == 404) { alert("실패"); }
    });
}
function deletelog(e) {
    var jsonData = {
        deletelog : e
    }
    $.ajax({
        url: "/deleteadlog",
        type: "POST",
        data: jsonData
    }).done(function (data){
        alert("삭제 완료");
        window.location.reload();
    }).fail(function (jqXHR, textStatus) {
        if (jqXHR.status == 403) { alert("실패"); }
        if (jqXHR.status == 404) { alert("실패"); }
    });
}