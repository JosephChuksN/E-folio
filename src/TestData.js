import { v4 as uuidv4 } from 'uuid';
import { randFullName, randCity, randJobTitle, randAvatar } from '@ngneat/falso';
   

var fullName = randFullName()
var avatar = randAvatar()
 
const user = { fullName: fullName, city: randCity(), jobTitle: randJobTitle(), profileImg: avatar };

const AboutText = () => {
    var txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a est lacus. In at aliquet odio. Proin quis mi pulvinar, pharetra lorem   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a est lacus. In at aliquet odio. Proin quis mi pulvinar, pharetra lorem placerat ultrices eget nec metus. In est nibh, facilisis accumsan tincidunt id, cursus condimentum nunc"
    return txt
}


const educationData = [
   { id: uuidv4(),
    institution: "UNIMAID",
    Degree: "ANATOMY",
    startDate: "2019-05",
    endDate: "2020-05",
  },
  
  {
    id: uuidv4(),
    institution: "UMUDIKE",
    Degree: "BIOLOGY",
    startDate: "2021-08",
    endDate: "2021-11",
  },

]


const experienceData = [
    {id:uuidv4(), company:"Openfinance", Role:"Front-end & UI Developer", jobDescription:"Development of corporate websites, newsletters,landings, pure HTML layout, CSS and Javascript", startDate:"2021-07", endDate:"2021-11"},
    {id:uuidv4(), company:"UNIR, Universidad Internacional de la Rioja", Role:"Front-end designer & Web designer", jobDescription:"Development and testing of corporate mailings, landings, and corporate banners design.", startDate:"2021-07", endDate:"2021-11",}
   ]

export const AboutTxt = AboutText;
export {educationData, experienceData, user};