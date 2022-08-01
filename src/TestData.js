import { v4 as uuidv4 } from 'uuid';
   
 
const AboutText = () => {
    var txt = "A web developer with 3 years of experience in frontend developer  and a graduate of the University of maiduguri, based in Abuja Nigeria,  I am an enthusiast in learning new technologies relating to web development  always curious about solving problems relating to my field.  You will find me watching football matches and spending time with family when not coding."
    return txt
}


const EducationData = [
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


export const AboutTxt = AboutText;
export {EducationData};