resetDet();
function addDetails(){
    var sname   = document.getElementById("sName").value
    var fname   = document.getElementById("fName").value
    var sclass  = document.getElementById("class").value
    var age     = document.getElementById("age").value
    var address = document.getElementById("address").value
    var dob     = document.getElementById("dob").value
    if (dob != "" ){
        var dobN = dob.split("-");
        var yy   = dobN[0];
        var mm   = dobN[1];
        var dd   = dobN[2];
        dob      = dd+'-'+mm+'-'+yy
    }
    var gType = '';
    if (document.getElementById('genTypeM').checked) {
        gType = document.getElementById('genTypeM').value;
    } else if (document.getElementById('genTypeF').checked) {
        gType = document.getElementById('genTypeF').value;
    } else {
        gType = document.getElementById('genTypeO').value;
    }

    var detail  = `<tr  ><td id = 'tdsName' name = 'tdsName' > ${sname} </td><td id = 'tdfName' name = 'tdfName'> ${fname} </td>
                    <td id = 'tdcls' name = 'tdcls'> ${sclass} </td><td id = 'tdage' name = 'tdage'> ${age} </td>
                    <td id = 'tdGen' name = 'tdGen'> ${gType} </td>
                    <td id = 'tdaddr' name = 'tdaddr'> ${address} </td><td id = 'tddob' name = 'tddob'> ${dob} </td>
                    <td> 
                        <button type='button' class='btn1' onclick='getEditDetails(this);' >Edit</button>
                        <button type='button' class='btn1' onclick='deleteRow(this);'>Delete</button> 
                    </td></tr>` 

    document.getElementById("tabDet").innerHTML += detail;
}

function deleteRow(sRow) {
    var i = sRow.parentNode.parentNode.rowIndex;
    document.getElementById("infoTable").deleteRow(i);
}
function resetDet(){
    document.getElementById("addBtn").disabled = false;
    document.getElementById("editBtn").disabled = true;
}

function getEditDetails(sRow){
    var i = sRow.parentNode.parentNode.rowIndex;
    if (i != 0){
        i = i-1;    
        
        document.getElementById("sName").value    = document.getElementsByName("tdsName")[i].innerHTML.trim();
        document.getElementById("fName").value    = document.getElementsByName("tdfName")[i].innerHTML.trim();
        document.getElementById("class").value    = document.getElementsByName("tdcls")[i].innerHTML.trim();
        document.getElementById("age").value      = parseInt(document.getElementsByName("tdage")[i].innerHTML);
        document.getElementById("address").value  = document.getElementsByName("tdaddr")[i].innerHTML.trim();
        var dob      = document.getElementsByName("tddob")[i].innerHTML.trim();
        if (dob != null ){
            var dobN = dob.split("-");
            var yy   = dobN[0];
            var mm   = dobN[1];
            var dd   = dobN[2];
            dob      = dd+'-'+mm+'-'+yy
        }
        document.getElementById("dob").value  = dob;
        
        var gType = document.getElementsByName("tdGen")[i].innerHTML.trim();
        if (gType == 'Male') {
            document.getElementById('genTypeM').checked = true;
        } else if (gType == 'Female') {
            document.getElementById('genTypeF').checked = true;
        } else {
            document.getElementById('genTypeO').checked = true;
        }
        document.getElementById("addBtn").disabled = true;
        document.getElementById("editBtn").disabled = false;
        document.getElementById("rowNum").value = i + 1;
    }
}

function editDetails(){
    var i   = document.getElementById("rowNum").value
    document.getElementById("infoTable").deleteRow(i);
    addDetails();
    document.getElementById("editBtn").disabled = true;
}