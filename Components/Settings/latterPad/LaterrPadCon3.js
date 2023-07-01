
import Image from 'next/image'
import css from '../../../styles/LatterPad.module.css'
import React, { useState } from 'react'
import img from "../../../public/Images/pmilogo.png"
const LaterrPadCon3 = () => {
    let formId=2
    var nameColor = formId == 2 ? ' rgb(168, 16, 16)' : '#167FDD'
    var FirstLineColor = formId == 2 ? ' rgb(168, 16, 16)' : '#187EC7'
    const intialvalues = {
        FirstLinetext1: "Shree Ganeshaye namah",
        FirstLinetext2: "Shree Shubhudra Mata namah",
        FirstLinetext3: "Shree BheravNath namah",
        Agencyname: "Agency Name",
        textP: "PMI TESTING SERVICES",
        mobileNo: "9633219478/9367154189",
        officeNo: "022-67496465",
        email: "your_email_id@gmail.com",
        textContent: "Stailness Steel Duplex Steel, Nickel & Titanium, Brass Alloys, Carbon Steel, Alloy Steel Etc",
        address: "your Address, Mumbai - 400 004.",

    }
    const [FormateData, setFormateData] = useState(intialvalues)
  return (
      <div className={css.LatterpadCon}>
          <div className={css.FormatBox}>
              <div className={css.FirstLine}>
                  <p style={{ color: FirstLineColor }} onClick={() => getTextAndSettext(FormateData.FirstLinetext1, 'FirstLinetext1')}> || {FormateData.FirstLinetext1}||</p>
                  <p style={{ color: FirstLineColor }} onClick={() => getTextAndSettext(FormateData.FirstLinetext2, 'FirstLinetext2')}>|| {FormateData.FirstLinetext2}||</p>
                  <p style={{ color: FirstLineColor }} onClick={() => getTextAndSettext(FormateData.FirstLinetext3, 'FirstLinetext3')}>||{FormateData.FirstLinetext3} ||</p>
              </div>


              <div className='row'>
                <div className='col-2'>
                      <Image src={img} alt='' height={100} width={150}/>
                </div>
                  <div className='col-8'>
<div className={css.nameBox3}>
<div className={css.LineBox}>
<div className={css.Line1}></div>
                              <div className={css.Line2}></div>

</div>
<h2>Agency Name</h2>
                          <div className={css.LineBox}>
                              <div className={css.Line1}></div>
                              <div className={css.Line2}></div>
                          </div>
</div>
                  </div>
              </div>
              </div>
              </div>
  )
}

export default LaterrPadCon3