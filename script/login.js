/**
Lấy thẻ <form> và gắn sự kiện submit
    - document.querySelector("form"): lấy phần tử <form> trên trang.
    - addEventListener("submit", ...): lắng nghe sự kiện “gửi form”.
    - e.preventDefault(): chặn hành vi mặc định của form (không cho load lại trang).
 */
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!localStorage.getItem("users")){
        alert("No user found");
    }
    else {
        /**
        Nếu có danh sách người dùng, lấy thông tin nhập vào
            - Parse chuỗi JSON trong localStorage thành mảng các đối tượng user.
            - Lấy giá trị mà người dùng nhập trong form login.
         */
        let users = JSON.parse(localStorage.getItem("users"));

        let email = document.getElementById("email");
        let password = document.getElementById("password");

        /**
        Tìm xem người dùng có tồn tại không
            - .find() sẽ tìm phần tử đầu tiên trong mảng users mà 
                + email trùng khớp
                + password trùng khớp.
         */
        let existing_user = users.find(
            (index) => 
                index.email === email.value.trim() &&
                index.password === password.value.trim()
        );
        if (existing_user) {
            localStorage.setItem("current_user", JSON.stringify(existing_user));
            location.href = "../index.html";
        }
        else {
            alert("Email or password is incorrect");
        }
    }
});