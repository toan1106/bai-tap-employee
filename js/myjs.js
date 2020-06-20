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
    var tennhanvien = $("#tennhanvien").val();
    var ckcArray = [];
    var ngaysinh = $("#ngaysinh").val();
    var tableRows = $("tabledata tr").length;
    $(".ckc:checked").each(function () {
        ckcArray.push($(this).val());
    })
    var language = "";
    var i;
    for (i = 0; i < ckcArray.length; i++) {
        language += ckcArray[i] + "<br>";
    }
    // var radiogender=$("input[name='optradio':checked]").val();
    // var radiogender=function()
    // {
    //     var radio = document.getElementsByName("Gender");
    //     for(var i = 0;i<radio.length;i++)
    //     {
    //         if(radio[i].checked==true)
    //         {
    //             return radio[i].value;
    //         }
    //     }
    // };
    var radiogender
    var radio = document.getElementsByName("Gender");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            radiogender = radio[i].value;
        }
    }
    var chucvu;
    var listchucvu = document.getElementById("danhsachchucvu");
    for (var i = 0; i < listchucvu.length; i++) {
        if (listchucvu[i].selected) {
            chucvu = listchucvu[i].value;
        }
    }
    if (IsEmty(tennhanvien)) {
        Isvalid = false;
        $("nameError").css("color", "red").text("please input name");
    }
    var row = "";
    row += "<tr><td>" + tennhanvien + "</td><td>" + ngaysinh + "</td><td>" + radiogender + "</td><td>" + language + "</td><td>" + chucvu + "</td><td><a href='#' onclick='xoa(this)'>Delete</a></td></tr>";
    $(row).appendTo(".list");
    // if (Isvalid) {
    //     // $(document).ready(function () {
    //     //     $('#tabledata').append('<tr id="row' + tableRows + '">'
    //     //         + '<td>' + tennhanvien + '</td>'
    //     //         + '<td class="">' + chucvu + '</td>'
    //     //         + '<td class="">' + ngaysinh + '</td>'
    //     //         + '<td class="">' + radiogender + '</td>'
    //     //         + '<td class="">'
    //     //         + language
    //     //         + '</td>'
    //     //         + '<td class="">' +
    //     //         '<a  href="#" onclick="deleteEmployee(this)">Delete</a>' +
    //     //         '</td></tr>');
    //     // });   
    //     var row = "";
    //     row += "<tr><td>" + tennhanvien + "</td><td>" + ngaysinh + "</td><td>" + radiogender + "</td><td>" + language + "</td><td>" + chucvu + "</td><td><a href='#' onclick='xoa(this)'>Delete</a></td></tr>";
    //     $(row).appendTo(".list");
    // }
}
function deleteEmployee(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}