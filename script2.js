var number_Input = document.querySelectorAll(".field input")
var range_value = document.querySelectorAll(".slider input")



number_Input.forEach(input =>{
	input.addEventListener("input", e=>	{
		let scale_input = parseInt(number_Input[0].value)
        rotate_input = parseInt(number_Input[1].value)
        y_input = parseInt(number_Input[2].value)    
        x_input = parseInt(number_Input[3].value)     
        var pic = document.getElementById("pic");
        if(e.target.className === "scale_numbers"){
            pic.style.width=scale_input+"%";
            pic.style.height=scale_input+"%";
           /*attempt to implement an if statement limiting input hasn't worked so far...
            if (minPrice>70){
                minPrice = 70;
            }else{minPrice = minPrice}*/
        }else if(e.target.className === "rotation_numbers"){
            pic.style.transform = `rotate(${rotate_input}deg)`;
        }else if(e.target.className === "y_numbers"){
            pic.style.marginTop = y_input + "px";
        }else if(e.target.className === "x_numbers"){
            pic.style.marginLeft = x_input + "px";}
    });
});

range_value.forEach(input =>{
	input.addEventListener("input", e=>	{
		let scale_value = parseInt(range_value[0].value)
        rotate_value = parseInt(range_value[1].value)
        y_value = parseInt(range_value[2].value)
        x_value = parseInt(range_value[3].value);
        var pic = document.getElementById("pic");
        if (e.target.className === "range_scale"){
            pic.style.width=scale_value+"%";
            pic.style.height=scale_value+"%";
        }else if(e.target.className === "range_rotate"){
            pic.style.transform = `rotate(${rotate_value}deg)`;
        }else if(e.target.className === "range_y"){
            pic.style.marginTop = y_value + "px";
        }else if(e.target.className === "range_x"){
            pic.style.marginLeft = x_value + "px";
        }
    });
});


/*Canvas below this line*/


function previewFile() {
    var preview = document.getElementById("previewimg");
    var preview2 = document.getElementById("pic");
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;
      preview2.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }



  window.onload = function() {
    var c = document.getElementById("imageCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("pic");
    var img2 = document.getElementById("snowback");
    img.onload = function(){
      ctx.clearRect(0, 0, c.width, c.height);
 
      ctx.drawImage(img2, 0, 0, c.width, c.height);
    }
  }


/*Canvas above this line*/

function downloadimage() {
  /*var container = document.getElementById("image-wrap");*/ /*specific element on page*/
  var container = document.getElementById("htmltoimage");; /* full page */
  html2canvas(container, { allowTaint: true }).then(function (canvas) {

      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "html_image.jpg";
      link.href = canvas.toDataURL();
      link.target = '_blank';
      link.click();
  });
}

function myFunction() {
  document.getElementById("output_name").innerText = document.getElementById("speaker_name").value;
}
function myFunction2() {
  document.getElementById("output_text").innerText = document.getElementById("dialogue").value;
}
