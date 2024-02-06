function validation() {
    var customer_nameip = document.getElementById('Customer_name').value;
    if(customer_nameip.trim()==''){
        alert('Enter your name:');
    }
    customer_nameop = document.getElementById('Customer_nameop');
    customer_nameop.innerHTML = customer_nameip;
    var customer_ageip = document.getElementById('Customer_age').value;
    customer_ageop = document.getElementById('Customer_ageop');
    customer_ageop.innerHTML = customer_ageip;

    var customer_dobip = document.getElementById('Customer_DOB').value;
    customer_dobop = document.getElementById('Customer_dobop');
    customer_dobop.innerHTML = customer_dobip.value;
    var customer_addressip = document.getElementById('Customer_Address').value;
    customer_addressop = document.getElementById('Customer_addressop');
    customer_addressop.innerHTML = customer_addressip;
    var customer_phoneip = document.getElementById('PH_NO').value;
    Customer_phoneop = document.getElementById('Customer_phoneop');
    Customer_phoneop.innerHTML =customer_phoneip;
    var customer_emailip = document.getElementById('customer_Email_id').value;
    customer_Email_idop = document.getElementById('customer_emailop');
    customer_Email_idop.innerHTML=customer_emailip;

    var aadhar_numberip = document.getElementById('aadhar_number').value;
    aadhar_numberop = document.getElementById('Customer_aadharop');
    aadhar_numberop.innerHTML = aadhar_numberip;
    var pan_numberip = document.getElementById('pan_number').value;
    pan_numberop = document.getElementById('customer_panop');
    pan_numberop.innerHTML =pan_numberip;
    var gender_ip = document.getElementsByName('gender');
    gender_op = document.getElementById('customer_gender');
    for (let i = 0; i < gender_ip.length; i++) {
        if (gender_ip[i].checked) {
            gender_op.innerHTML = gender_ip[i].value;
        }
    }
    let checkbox_op = document.getElementById("subscribe");
    checkbox_op.innerHTML = document.getElementById("checkboxs").checked;

    var state = document.getElementById('State');
    var selected_Index = state.selectedIndex;

    var selected_State = state.options[selected_Index];
    let state_op = document.getElementById("states");
    state_op.innerHTML = selected_State.value;
    return false;


}
customer_dobop = document.getElementById('Customer_DOB');
var d=new Date();
var dt=d.toISOString();
var dt1=dt.split('T');
customer_dobop.max=dt1[0];
