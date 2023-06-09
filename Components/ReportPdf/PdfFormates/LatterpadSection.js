import LatterPadForm1 from "@/Components/Settings/latterPad/LatterPadForm1"
import LatterPadForm2 from "@/Components/Settings/latterPad/LatterPadForm2"
const LatterpadSection=(id,latterPad)=>{
    if(id == 1 && latterPad){
return LatterPadForm1()
    }else if(id == 2 && latterPad){
return LatterPadForm2()
    }else{
        return ''
    }
}
export default LatterpadSection