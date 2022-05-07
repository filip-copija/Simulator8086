//#046307

function checkRegisterInput()
{
    var e = event || window.event;
    var key = e.keyCode || e.which;
    if(key==8 || key == 9 || key==46|| key==17 || key==91 || key==18 || 
        key==116 || key==89 || key==67 || key==88 || key==35 || key==36)
    return true;
    if(key>=37 && key<=40) return;
    if(key>=48 && key<=57) return;
    if(key>=96 && key<=105) return;
    if ((key > 64 && key < 71)) return;
    e.preventDefault();
}

function GetValues()
{
    firstRegister = document.getElementById("1st-register-select").value;
    secondRegister = document.getElementById("2st-register-select").value;
    selection = document.getElementById("command-select").value;
    switch(selection)
    {
        case "MOV":
        {
            mov(firstRegister, secondRegister);
            break;
        }
        case "XCHG":
        {
            xcgh(firstRegister, secondRegister);
            break;
        }
        default:
        {
            alert("Not implemented case!");
            break;
        }    
    }
}

function mov(a, b)
{
    document.getElementById(a+"value").value = document.getElementById(b+"value").value;
}

function xcgh(a, b)
{
    var bufor = document.getElementById(a+"value").value;
    document.getElementById(a+"value").value = document.getElementById(b+"value").value;
    document.getElementById(b+"value").value = bufor;
}
function Clear()
{
    document.getElementById("axvalue").value = "";
    document.getElementById("bxvalue").value = "";
    document.getElementById("cxvalue").value = "";
    document.getElementById("dxvalue").value = "";
}
function Random()
{
    document.getElementById("axvalue").value = (Math.floor(Math.random() * 6553) + 4096).toString(16);
    document.getElementById("bxvalue").value = (Math.floor(Math.random() * 6553) + 4096).toString(16);
    document.getElementById("cxvalue").value = (Math.floor(Math.random() * 6553) + 4096).toString(16);
    document.getElementById("dxvalue").value = (Math.floor(Math.random() * 6553) + 4096).toString(16);
}