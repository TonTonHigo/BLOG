// function boucle(){
//     for(let i = 1; i <= 10; i++){
//         carte();
//     }
// }

function carte(){
    let input_un = document.getElementById('input1').value;
    console.log(input_un);
    let input_deux = document.getElementById('input2').value;
    let input_trois = document.getElementById('input3').value;

    const para = document.createElement("img");
    para.setAttribute('id','image');
    const para2 = document.createElement("h2");
    const para3 = document.createElement("p");


    para.src = "../images/" + input_un;
    para2.innerHTML = input_deux;
    para3.innerHTML = input_trois;

    document.getElementById("fond").appendChild(para);
    document.getElementById("fond").appendChild(para2);
    document.getElementById("fond").appendChild(para3);
}