function maximin(data) {
    let perolehan = [];

    data.forEach(element => {
        perolehan.push(Math.min(...element));
    });

    return Math.max(...perolehan);
}

function minimax(data) {
    let perolehan = [];

    data.forEach(element => {
        perolehan.push(Math.max(...element));
    });

    return Math.min(...perolehan);
}

function likelihood(data,peluang) {
    // Mencari index dari peluang terbesar
    let index;
    for (let i = 0; i < peluang.length; i++) {
        if(peluang[i] == Math.max(...peluang))
            index = i;
    }
    
    // Memasukan data yang akan dihitung maksimalnya
    let temp = []; 
    for (let i = 0; i < data.length; i++) {
        temp.push(data[i][index]);
    }
    
    return Math.max(...temp);
}

function buyes(data,peluang) {
    let expectedValue = [];
    let temp;

    for (let i = 0; i < data.length; i++) {
        temp = 0;
        for (let j = 0; j < data[i].length; j++) {
            temp += peluang[j]*data[i][j];
        }
        expectedValue.push(temp);
    }

    return Math.max(...expectedValue);
}


function getData(){
    let x11 = document.getElementById("x11").value;
    let x12 = document.getElementById("x12").value;
    let x21 = document.getElementById("x21").value;
    let x22 = document.getElementById("x22").value;
    
    let data = [
        [x11,x12],
        [x21,x22]
    ];
    return data;
}

function getPeluang() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    return [p1,p2];
}

function generate() {
    let data = getData();
    let peluang = getPeluang();
    
    // Dummy data
    // let data = [
    //     [1400000, -300000],
    //     [200000, 200000],
    // ];
    
    // let peluang = [0.3,0.7]

    document.getElementById("maximin").value = maximin(data);
    document.getElementById("minimax").value = minimax(data);
    document.getElementById("likelihood").value = likelihood(data,peluang);
    document.getElementById("buyes").value = buyes(data,peluang);
}