export const onmouseover = (first,second,third,fourth,fifth,sixth,sev,egt) =>{

    // mouse_in= false
    first.onmouseover = () => {
        // mouse_in=true
        second.style.display = "inline-block"

        
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

       
    // mouse_in=false
    }
}