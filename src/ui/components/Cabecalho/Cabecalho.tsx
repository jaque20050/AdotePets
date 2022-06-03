import { CabecalhoContainer,
        Logo
 } from "./Cabecalho.style";

 export default function Cabecalho(){
     return(
         <CabecalhoContainer>
             <Logo src = "/img/logo.svg" alt="Adoto um Pet"/>
         </CabecalhoContainer>
     )
 }