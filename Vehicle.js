function valids() {
  var vehiclenameip = $('#id1').val();
  var uppervehicle= vehiclenameip.trim().toUpperCase().replaceAll(" ","");
  var statecode = uppervehicle.substr(0, 2);
  var statenum = uppervehicle.substr(2, 2);
  var statealpha = uppervehicle.substr(4, 2);
  var fournum = uppervehicle.substr(6);
  if (uppervehicle.length == 10) {
    if (statecode == 'TN' || statecode == "KA" || statecode == "TS" || statecode == "KL") {
      if (!isNaN(statenum)) {
        if ((statealpha[0]>='A'&&statealpha[0] <='Z'&&statealpha[1]>="A"&&statealpha[1]<='Z')) {
          if (!isNaN(fournum)&&fournum!="0000") {
            $('#thi').text(uppervehicle + "->"+" It's a Valid Vehicle Number");
            $('#thi').css('color','GREEN');

          }
          else {
            $('#thi').text(fournum +"->"+ " CHECK THE LAST FOUR DIGITS!!!");
            $('#thi').css('color','RED');

          }
        }
        else {
          $('#thi').text(statealpha+"->"+ " CHECK THE ALPHA NUMERIC CHARACTERS!!!");
          $('#thi').css('color','RED');
        }
      }
      else {
        $('#thi').text( statenum+"->"+ " CHECK THE NUMBER!!!");
        $('#thi').css('color','RED');

        
      }
    }
    else {
      $('#thi').text(statecode +"->"+" CHECK THE STATE CODES!!!");
      $('#thi').css('color','RED');

    }


  }
  else {
    $("#thi").text(uppervehicle +" CHECK THE LENGTH!!!");
    $('#thi').css('color','blue');

  }

}
