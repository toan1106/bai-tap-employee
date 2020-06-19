function themchucvu() {
    var chucvu = document.getElementById("themchucvu").value;
    if (!IsEmty(chucvu)) {
        var listchucvu = document.getElementById("danhsachchucvu");
        var option = document.createElement("OPTION");
        option.innerHTML = chucvu;
        option.value = chucvu;
        listchucvu.options.add(option);
    }
    $('#myModal').modal('toggle');
}

function IsEmty(val) {
    return (val == undefined || val == null || val.length <= 0) ? true : false;
}

function resetError() {
    $("#nameError").empty();
}

function themnhanvien() {
    resetError();
    var Isvalid = true;
    var tennhanvien = $("#ten").val();
    var ckcArray = [];
    var ngaysinh = $("#ngay sinh")
    var tableRows = $("#table tr").length;
    $(".ckc:checked").each(function () {
        ckcArray.push($(this).val());
    })
    var language = "";
    var i;
    for (i = 0; i < ckcArray.length; i++) {
        language += ckcArray[i] + "<br>";
    }
    var radiogender=$("input[name='optradio':checked]").val();
    var chucvu = $("#danhsachchucvu option:selected").text();
    if(IsEmty(name))
    {
        Isvalid=false;
        $("nameError").css("color","red").text("please input name");
    }
    if(Isvalid)
    {
        $(document).ready(function(){
            $('table').append('<tr id="row'+tableRows+'">'
            +'<td>'+tennhanvien+'</td>'
            +'<td class="">'+chucvu+'</td>'
            +'<td class="">'+ngaysinh+'</td>'
            +'<td class="">'+radiogender+'</td>'
            +'<td class="">'
            +language
            +'</td>'
            +'<td class="">'+
            '<a  href="#" onclick="deleteEmployee(this)">Delete</a>'+
            '</td></tr>');
        });
    }
}
function deleteEmployee(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}