number_Input = document.querySelectorAll(".field input")
range_value = document.querySelectorAll(".slider input")


function previewFile() {
    var preview = document.querySelector('img');
    var preview2 = document.querySelector('.test')
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


function updatey(slideAmount) {
    var display = document.getElementById("offsety");
    display.innerHTML=slideAmount;
    var pic = document.getElementById("pic");
    pic.style.marginTop = slideAmount + "px";
    }

function updatex(slideAmount) {
    var display = document.getElementById("offsetx");
    display.innerHTML=slideAmount;
    var pic = document.getElementById("pic");
    pic.style.marginLeft = slideAmount + "px";
    }
