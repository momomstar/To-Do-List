const inputbox = document.getElementById("input-box")
const listContainer = document.getElementById("Tasklist")

function addTask(){
    const task = inputbox.value.trim();
    if (!task){
        alert("กรุณาเขียน Task ของคุณ");
        console.log("ไม่มี Task ที่เพิ่ม");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <label>
          <input type="checkbox">
          <spam>${task}</spam>
        </label>
        <spam class="delete-btn">Delete</spam>
    `;
    listContainer.appendChild(li);

    inputbox.value = ""; /* กดเพิ่มเเล้ว กล่อง inputจะเป็นค่าว่าง*/ 

    const deleteBtn = li.querySelector(".delete-btn");
    const taskspam = li.querySelector("spam");

    deleteBtn.addEventListener("click", function (){
        if (confirm("Are you sure you want to delete")){
            li.remove();

        }})
 
}