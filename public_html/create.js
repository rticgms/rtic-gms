var eventHandler = document.getElementById('submitForm');
eventHandler.addEventListener('submit', function(event) { generate(event); })

function generate(event) {
    event.preventDefault();

    var fp = new Fingerprint().get();
    var pw = document.getElementById("password").value.trim();
    var un = document.getElementById("username").value.trim();
    var key = CryptoJS.AES.encrypt(pw, un +''+ fp).toString().trim();
    document.location.href = "index.html?username=" + un + "&key=" + encodeURIComponent(key);
    return false
}