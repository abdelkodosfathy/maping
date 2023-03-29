const place = document.querySelectorAll("svg path"),
btnBack = document.querySelectorAll("button");
window.addEventListener("click",(e) => {
    // console.log(place[0]);
    // if(e.target == place[0]){
    // }
    // if(e.target === place[1]){
    //     console.log(place[1]);
    // }
    let arr = Array.from(place),
    tar = e.target;

    if(arr.includes(tar)){
        console.log("its place from egypt");
        for(let i = 0; i < arr.length; i++){
            if(arr[i] !== arr[arr.indexOf(tar)] ){
                arr[i].classList.add("op-zero");
            }
            else{
                arr[arr.indexOf(tar)].classList.remove("op-zero");
            }
        }
    }
    else {
        for(let i = 0; i < arr.length; i++){
            arr[i].classList.remove("op-zero");
        }
        console.log("its not place");
    }
});

