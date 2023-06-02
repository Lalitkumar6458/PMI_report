import Layout from '@/Components/Layout'
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import css from "../../styles/LatterPad.module.css"
const Latterpad = () => {
  const router  =useRouter()
  var nameColor='#167FDD'
  var FirstLineColor='#187EC7'
  console.log("useRouter router query",router.query.formId )
const intialvalues={
  FirstLinetext1:"श्री गणेशाय नमः",
  FirstLinetext2:"श्री सुभद्रा माताय नमः",
  FirstLinetext3:"श्री भैरवनाथ नमः",
  Agencyname:"Agency Name",
  textP:"PMI TESTING SERVICES",
  mobileNo:"9633219478/9367154189",
  officeNo:"022-67496465",
  email:"your_email_id@gmail.com",
  textContent:"Stailness Steel Duplex Steel, Nickel & Titanium, Brass Alloys, Carbon Steel, Alloy Steel Etc",
  address:"your Address, Mumbai - 400 004.",
  logo:""

}
  const[FormateData,setFormateData]=useState(intialvalues)
  const[inputValue,setInputvalue]=useState({name:"",
text:""})
const getTextAndSettext=(text,name)=>{
  setInputvalue({
    text,name
  })
}
const setTextChange=(e)=>{
const {name,value}=e.target
setFormateData({
  ...FormateData,
  [name]:value
})
setInputvalue({
  ...inputValue,
  text:value
})
}
  return (
    <Layout title="Latterpad">

        <div className={css.LatterpadCon}>
        <div className={css.FormatBox}>
            <div className={css.FirstLine}>
              <p style={{color:FirstLineColor}} onClick={()=>getTextAndSettext(FormateData.FirstLinetext1,'FirstLinetext1')}> || {FormateData.FirstLinetext1}||</p>
              <p style={{color:FirstLineColor}}  onClick={()=>getTextAndSettext(FormateData.FirstLinetext2,'FirstLinetext2')}>|| {FormateData.FirstLinetext2}||</p>
              <p style={{color:FirstLineColor}}  onClick={()=>getTextAndSettext(FormateData.FirstLinetext3,'FirstLinetext3')}>||{FormateData.FirstLinetext3} ||</p>
              </div>
<div className={css.nameLogo}>
  <div className={css.logoBox}>
   <p>Your logo</p>
  </div>
  <div className={css.textname}>
    <h2 style={{color:nameColor}} onClick={()=>getTextAndSettext(FormateData.Agencyname,'Agencyname')}>{FormateData.Agencyname}</h2>
    <h4 onClick={()=>getTextAndSettext(FormateData.textP,'textP')}>{FormateData.textP}
</h4>
  </div>
  <div className={css.infoCon}>
    <h4 onClick={()=>getTextAndSettext(FormateData.officeNo,'officeNo')}>Office: {FormateData.officeNo}</h4>
    <h4 onClick={()=>getTextAndSettext(FormateData.mobileNo,'mobileNo')}>Mob: {FormateData.mobileNo} </h4>

    <h4 onClick={()=>getTextAndSettext(FormateData.email,'email')}>Email:{FormateData.email}
</h4>

  </div>
</div>
<div className={css.textContent}>
  <h5 onClick={()=>getTextAndSettext(FormateData.textContent,'textContent')}>{FormateData.textContent}</h5>
</div>
<div className={css.AddressCon} onClick={()=>getTextAndSettext(FormateData.address,'address')}>
{FormateData.address}
</div>
        </div>

        <div className={css.SetInputField}>

          <input type='text' value={inputValue.text} name={inputValue.name} onChange={setTextChange}/>
          <button >Save</button>
        </div>
        </div>  
    </Layout>
  )
}

export default Latterpad