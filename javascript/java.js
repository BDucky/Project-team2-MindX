window.addEventListener('scroll', reveal);
let isCallBodyheader3 = false;
let isCallBodyheader2 = false;
let isCallBodyheader1 = false;

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    // console.log(reveals); 
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 500;
        // console.log(reveals[i]);
        if (revealtop < windowheight * 0.75) {
            reveals[i].classList.add('active');
            // reveal[i]?.id
            if (reveals[i].id === "number-exerien") {
                console.log('acc--------->');
                if (isCallBodyheader3 === false) {
                    bodyheader3();
                    isCallBodyheader3 = !isCallBodyheader3
                }
                if (isCallBodyheader2 === false) {
                    bodyheader2();
                    isCallBodyheader2 = !isCallBodyheader2
                }
                if (isCallBodyheader1 === false) {
                    bodyheader1();
                    isCallBodyheader1 = !isCallBodyheader1
                }
            }
        }
    }
}
// var head = setInterval(bodyHead,1000);
// var head2 = setInterval(bodyHead2, 30);
// // var head3 = setInterval(bodyHead3, 300);
// let count1 = 0;
// let count2 = 0;
// // let count3 = 0;
// window.addEventListener
// function bodyHead() {
//     count1++
//     document.querySelector("#number1").innerHTML = count1
//     if (count1 == 3) {
//         clearInterval(head);
//     }
// }
// function bodyHead2() {
//     count2++
//     document.querySelector("#number2").innerHTML = count2
//     if(count2 ==89){
//         clearInterval(head2);
//     }
// }
// function bodyHead3() {
//     count3++
//     document.querySelector("#number3").innerHTML = count3
//     if(count3 == 15){
//         setTimeout(head3);
//     }
// }

function bodyheader3() {
    let count3 = 0;
    const Yearexp = document.querySelector("#number3")
    function up() {
        Yearexp.textContent = count3
        count3++
        if (count3 <= 15) {
            setTimeout(() => up(), 200)
        }
    }
    up()
}
function bodyheader2() {
    let count2 = 0;
    const Yearexp = document.querySelector("#number2")
    function up() {
        Yearexp.textContent = count2
        count2++
        if (count2 <= 89) {
            setTimeout(() => up(), 40)
        }
    }
    up()
}
function bodyheader1() {
    let count1 = 0;
    const Yearexp = document.querySelector("#number1")
    function up() {
        Yearexp.textContent = count1
        count1++
        if (count1 <= 3) {
            setTimeout(() => up(), 500)
        }
    }
    up()
}

//  Lưu thông tin vào localStorage


// Lấy form
const myForm = document.getElementById("myForm");

// Thêm sự kiện "submit" cho form
myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn việc tải lại trang

    // Lấy các phần tử từ form
    const nameInput = document.getElementById("your-name");
    const emailInput = document.getElementById("your-email");
    const messageInput = document.getElementById("your-message");

    // Lấy giá trị từ các phần tử
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // Lưu giá trị vào local storage
    localStorage.setItem("name", nameValue);
    localStorage.setItem("email", emailValue);
    localStorage.setItem("message", messageValue);

    // Thông báo cho người dùng rằng dữ liệu đã được lưu thành công vào local storage
    alert("Đăng ký thành công!");
});
