function valid() {
    var usernameip = $('#username').val();/*input type id*/
    if (usernameip == '') {
        $('#userid').text('name must be entered');/*div id*/
    }
    $('#username').keypress(function () {
        $('#userid').text("");
    });

    $('#usernameop').text(usernameip);/*span  id*/

    var userageip = $('#age').val();
    if (userageip == '') {
        $('#userage').text('age should be mentioned');
    }
    $('#age').keypress(function () {
        $('#userage').text("");
    });
    $('#userageop').text(userageip);

    var userphone = $('#numberip').val();
    if (userphone.length != 10) {
        $('#numberdiv').text('not a valid phone');
    }
    $('#numberip').keypress(function(){
        $('#numberdiv').text("");
    });
    $('#userphonespan').text(userphone);


    $('#submitbtn').click(function () {
        alert('Form is submitted');
    })



    return false;
}












// // function btnclk(){
// //     alert('you clicked');
// // }

// // document.getElementById('clickbtn').addEventListener('click',function(){
// //     alert('you clicked');
// })
// document.getElementById('clickbtn').addEventListener('click',btnclk);

// function userinput(){
//     document.getElementById('userop').innerHTML=document.getElementById('username').value
// }
// document.getElementById('username').addEventListener('input',userinput);

// function mouse(){
//     document.getElementById('div1op').innerHTML='mouse enters';
// }
// document.getElementById('div11').addEventListener('mouseover',mouse);

// function mouseout(){
//     document.getElementById('div1op').innerHTML='mouse leaves';
// }
// document.getElementById('div11').addEventListener('mouseleave',mouseout);