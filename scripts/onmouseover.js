export const onmouseover = (first,second,third,fourth,fifth,sixth) =>{

    first.onmouseover = () => {
        second.style.display = "block"
        third.style.display = "none"
        fourth.style.display = "none"
        fifth.style.display = "none"
        sixth.style.display = "none"
    }
    
    
    second.onmouseout = () => {
        second.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "none"
        fifth.style.display = "none"
        sixth.style.display = "none"
    
    }
}