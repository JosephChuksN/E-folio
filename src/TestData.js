import { v4 as uuidv4 } from 'uuid';
import { randFullName, randCity, randJobTitle, randAvatar } from '@ngneat/falso';
   

var fullName = randFullName()
var avatar = randAvatar()
 
const user = { fullName: fullName, city: randCity(), jobTitle: randJobTitle(), profileImg: avatar };

const AboutText = () => {
    var txt = "A web developer with 3 years of experience in frontend developer  and a graduate of the University of maiduguri, based in Abuja Nigeria,  I am an enthusiast in learning new technologies relating to web development  always curious about solving problems relating to my field.  You will find me watching football matches and spending time with family when not coding."
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