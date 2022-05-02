var number_Input = document.querySelectorAll(".field input")
var range_value = document.querySelectorAll(".slider input")

/*Function to change between the portrait and background stats tabs*/
function openLayer(evt, Layer) {
  let layer = document.getElementsByClassName("card_stats");
  for (i = 0; i < layer.length; i++) {
    layer[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Layer).style.display = "block";
  evt.currentTarget.className += " active";
}

/*Make the default layer that is opened the portrait layer*/
document.getElementById("Default_Layer").click();

/*Allow for input values in both the portrait and background stats to manipulate the actual image*/
number_Input.forEach(input =>{
	input.addEventListener("input", e=>	{
		let scale_input = parseInt(number_Input[0].value)
        rotate_input = parseInt(number_Input[1].value)
        y_input = parseInt(number_Input[2].value)    
        x_input = parseInt(number_Input[3].value)    
        scale_background_input_grey = parseInt(number_Input[4].value) 
        blur_background_input = parseInt(number_Input[5].value)
        contrast_background_input = parseInt(number_Input[6].value)    
        invert_background_input = parseInt(number_Input[7].value);
        var pic = document.getElementById("pic");
        var back = document.getElementById("background_img");
        if(e.target.className === "scale_portrait_numbers"){
            pic.style.width=scale_input+"%";
            pic.style.height=scale_input+"%";
           /*attempt to implement an if statement limiting input hasn't worked so far...
            if (minPrice>70){
                minPrice = 70;
            }else{minPrice = minPrice}*/
        }else if(e.target.className === "rotation_portrait_numbers"){
            pic.style.transform = `rotate(${rotate_input}deg)`;
        }else if(e.target.className === "y_portrait_numbers"){
            pic.style.marginTop = y_input + "px";
        }else if(e.target.className === "x_portrait_numbers"){
            pic.style.marginLeft = x_input + "px";
        }else if(e.target.className === "scale_background_grey"){
          back.style.filter="sepia(" + scale_background_input_grey + "%) blur(" + blur_background_value + "px) contrast(" + contrast_background_input + "%) invert(" + invert_background_input+ "%)";
        }else if(e.target.className === "blur_background_numbers"){
          back.style.filter = "blur(" + blur_background_value + "px) contrast(" + contrast_background_input + "%) invert(" + invert_background_input+ "%) sepia(" + scale_background_input_grey + "%)";
        }else if(e.target.className === "contrast_background_numbers"){
          back.style.filter = "contrast(" + contrast_background_input + "%) sepia(" + scale_background_input_grey + "%) blur(" + blur_background_value + "px) invert(" + invert_background_input+ "%)";
        }else if(e.target.className === "invert_background_numbers"){
          back.style.filter = "invert(" + invert_background_input+ "%) sepia(" + scale_background_input_grey + "%) blur(" + blur_background_value + "px) contrast(" + contrast_background_input + "%)";}
    });
});


/*Allow for range sliders in both portrait and background to manipulate the relevant image*/
range_value.forEach(input =>{
	input.addEventListener("input", e=>	{
		let scale_value = parseInt(range_value[0].value)
        rotate_value = parseInt(range_value[1].value)
        y_value = parseInt(range_value[2].value)
        x_value = parseInt(range_value[3].value)
        scale_background_value_grey = parseInt(range_value[4].value)
        blur_background_value = parseInt(range_value[5].value)
        contrast_background_value = parseInt(range_value[6].value)
        invert_background_value = parseInt(range_value[7].value);
        var pic = document.getElementById("pic");
        var back = document.getElementById("background_img");
        if (e.target.className === "range_portrait_scale"){
            pic.style.width=scale_value+"%";
            pic.style.height=scale_value+"%";
        }else if(e.target.className === "range_portrait_rotate"){
            pic.style.transform = `rotate(${rotate_value}deg)`;
        }else if(e.target.className === "range_portrait_y"){
            pic.style.marginTop = y_value + "px";
        }else if(e.target.className === "range_portrait_x"){
            pic.style.marginLeft = x_value + "px";
        }else if (e.target.className === "range_background_scale_grey"){
          back.style.filter="sepia(" + scale_background_value_grey + "%) blur(" + blur_background_value + "px) contrast("+ contrast_background_value + "%) invert("+ invert_background_value + "%)";
        }else if(e.target.className === "range_background_blur"){
          back.style.filter = "blur(" + blur_background_value + "px) contrast("+ contrast_background_value + "%) invert("+ invert_background_value + "%) sepia(" + scale_background_value_grey + "%)";
        }else if(e.target.className === "range_background_contrast"){
          back.style.filter= "contrast("+ contrast_background_value + "%) sepia(" + scale_background_value_grey + "%) blur(" + blur_background_value + "px) invert("+ invert_background_value + "%)";
        }else if(e.target.className === "range_background_invert"){
          back.style.filter= "invert("+ invert_background_value + "%) sepia(" + scale_background_value_grey + "%) blur(" + blur_background_value + "px) contrast("+ contrast_background_value + "%)";}
    });
});


/*Canvas below this line*/
/*Uploading the portrait images as both a preview and the actual image that can be manipulated*/
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

/*Uploading the background images as both a preview and an actual background that can be manipulated (???)*/
function myBackground(){
    var background_photo = document.getElementById("background_img");
    var preview_of_background_photo = document.getElementById("preview_background_img");
    var background_file = document.querySelector('input[name=background_select]').files[0];
    var background_reader = new FileReader();

    background_reader.onloadend = function(){
        background_photo.src = background_reader.result;
        preview_of_background_photo.src = background_reader.result;
    }
    if (background_file){
        background_reader.readAsDataURL(background_file);
    }else{
        background_photo.src = "nope"
    }
}



/*Canvas above this line*/

/*Make text that appears in a textbox appear on the image*/
function myFunction() {
  document.getElementById("output_name").innerText = document.getElementById("speaker_name").value;
}
function myFunction2() {
  document.getElementById("output_text").innerText = document.getElementById("dialogue").value;
}

/*Download image of interest. This is currently not working properly??*/
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

