function get_Para_1(){
    var inupts1=[];
    for(var i = 1; i<=6 ; i++){
        inupts1.push(document.getElementById("para_1_input_box_"+ i).value);
    }
    document.getElementById("show_para_1").innerHTML=inupts1.join(". ");
}
function get_Para_2(){
    var inupts2=[];
    for(var g = 1; g<=6 ; g++){
        inupts2.push(document.getElementById("para_2_input_box_"+ g).value);
    }
    document.getElementById("show_para_2").innerHTML=inupts2.join(". ");
}
