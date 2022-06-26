import { React } from 'react'



function EducationLayout({details}){


    return(
      <>
          <div className='flex justify-between'>
          <div className='flex lg:gap-10 gap-3'>
            <span>{details.institution}</span>
            <span>{details.Degree}</span>
            <span>{`${details.startDate} - ${details.endDate}`}</span>
          </div>
          <div className='flex gap-5'>
            <span><ion-icon name="trash"></ion-icon></span>
            <span><ion-icon name="create"></ion-icon></span>
          </div>
          </div>
      
      
      </>
    )
}

export default EducationLayout;