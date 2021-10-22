
function login() {
    const form = document.login_form;
    const chkUserid = checkValidUserid(form);
    const chkPw = checkValiduserpw(form);


    if (chkUserid) {
        document.getElementById('alert_userid').innerText = "";
        form.userid.style.border = '2px solid';
        form.userid.style.borderColor = '#00D000';
    } else {
        form.userid.style.border = '2px solid';
        form.userid.style.borderColor = '#FF0000';
        document.getElementById('alert_userid').style.color = '#FF0000';
    }

    if (chkPw) {
        document.getElementById('alert_password').innerText = "";
        form.userpw.style.border = '2px solid';
        form.userpw.style.borderColor = '#00D000';
    } else {
        form.userpw.style.border = '2px solid';
        form.userpw.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
    }

    if (chkUserid && chkPw ) {
        console.log('complete. form.submit();');
        //form.submit();
    }
}

function checkValidUserid(form) {
    if (form.userid.value == "") {
        document.getElementById('alert_userid').innerText = "Please enter userid.";
        //form.username.focus();
        return false;
    }

    return true;
}

function checkValiduserpw(form) {
    if (form.userpw.value == "") {
        document.getElementById('alert_password').innerText = "Please enter password.";
        //form.userpw.focus();
        return false;
    }

    const pw = form.userpw.value;
    // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number
    const num = pw.search(/[0-9]/g);
    // alphabet
    const eng = pw.search(/[a-z]/ig);
    // special characters
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 6) {
        // 최소 6문자.
        document.getElementById('alert_password').innerText = "password must be at least 6 characters.";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // 공백 제거.
        document.getElementById('alert_password').innerText = "Please enter your password without spaces.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지.
        document.getElementById('alert_password').innerText = "Password is not valid.";
        return false;
    }

    window.open('index.html');
}




    /*
    function check()

{
    id = document.getElementById("userid").value
		pw = document.getElementById("userpw").value
		if(userid == ""){
			alert('아이디를 입력하세요.');
			return;
		}
		if(userpw == ""){
			alert('패스워드를 입력하세요.');
			return;
		}
		if(userid.length < 5 || userid.length > 19){
			alert('아이디는 5~19자리 입니다.');
			return;
		}
		document.getElementById("form_login").action = "#.jsp";
		document.getElementById("form_login").method = "post"; 
		document.getElementById("form_login").submit();



    
    if(form.userid.value=="hong" )
    {
        if(form.userpw.value=="1234")
        {
            window.open('index.html')
        }
        else
        {
            alert("Error Password")
        }
        
    }
    else
    {
        alert("Error UserID ");
    }
}*/

/*
and 연산자
true && true = true
true && false = false 
*/


