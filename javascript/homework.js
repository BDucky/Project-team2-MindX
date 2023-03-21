(changeHtml = () => {
  //query
  const ele = document.querySelector("#content > h2");

  //create div container
  const newContainerEle = document.createElement("div");

  //create form
  const newFormTitle = document.createElement("h3");
  newFormTitle.innerHTML = "Đăng nhập";
  const newForm = document.createElement("form");
  const newlabel1 = document.createElement("label");
  newlabel1.innerHTML = "Username";
  const newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("name", "username");
  newInput1.setAttribute("placeholder", "Username");
  const newlabel2 = document.createElement("label");
  newlabel2.innerHTML = "Password";
  const newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "password");
  newInput2.setAttribute("name", "password");
  newInput2.setAttribute("placeholder", "Password");

  //đưa các phần tử vào form
  newForm.appendChild(newlabel1);
  newForm.appendChild(newInput1);
  newForm.appendChild(newlabel2);
  newForm.appendChild(newInput2);

  //đưa form vào container
  newContainerEle.appendChild(newFormTitle);
  newContainerEle.appendChild(newForm);

  //thay thế nội dung của ele bằng container
  ele.innerHTML = "";
  ele.appendChild(newContainerEle);
})();

//bài 2
const iniString = "1245689";
const array = [];
changeArray = (input) => {
  const iniArray = input.split("");
  console.log(iniArray);
  const newArray = iniArray.forEach((item) => {
    //unshift = push ở index [0] 
    array.unshift(item);
  });

  const newString = array.join("");

  console.log("new array", array);
  console.log("new string", newString);
};
