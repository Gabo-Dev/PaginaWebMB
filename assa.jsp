
*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}
.blanco{
    color: white;
}
.azul{
    color: deepskyblue;
}

body{
    font-family: Arial;
}
/* Nav */
.nav{
    background-color: black;
    /* custom property */
    --img1: scale(1);
    --img2: scale(0);
}
/* Si nav tiene elementos apuntados por links */
.nav:has(.dropdown:target){
    --img1: scale(0);
    --img2: scale(1);
}
.nav_container{
    width: 90%;
    margin: 0 auto;
    height: 70px;
    
    /* Empleamos grid para especificar columns and areas */
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-areas: "title img";
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.nav_title{
    /* Asginamos el area */
    grid-area: title;
}
.nav_menu{
    grid-area: img;
    position: relative;
    /* Evitar elementos sobreexpuestos*/
    z-index: 10;
    
    transform: var(--img1);
}
.nav_menu--second{
    /*  Referencia para ocultar close */
    transform: var(--img2);
}
.nav_icon{
    width: 30px;
    display: block;
}
/*Estilos del pie de página*/
footer{
    background-color: rgb(230,230,230);
    position: absolute;
    bottom: 0;
    width: 100%;
}
footer p{
    margin: 0;
    padding: 12px;
    color: rgb(100, 100, 100);
    display: flex;
    justify-content: center;
}
