var url_string = new URL(window.location);
var username = url_string.searchParams.get('username');
var key = decodeURIComponent(url_string.searchParams.get('key'));

var eventHandler = document.getElementById('loginButton');
eventHandler.addEventListener('click', function(event) { n(event); });

if (!username || username === "") {
    document.location.href = "create.html";
}

function n(event) {
    event.preventDefault();
    var fp = new Fingerprint().get();
    var password = CryptoJS.AES.decrypt(key, username +''+ fp).toString(CryptoJS.enc.Utf8);
    document.getElementById("username").value = username.trim();
    document.getElementById("password").value = password.trim();
    var form = document.getElementsByName('loginform')[0];
    form.submit();
}