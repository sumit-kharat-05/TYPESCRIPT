interface collegeData
{
    name:string
    mobNo:number
    email:string
    college:string
    branch?:string

}

function getCollegeData (collegeData : Partial<collegeData>) 
{
return collegeData;

}
getCollegeData({name:'sumit',mobNo:123,email:'sumit@123',college:'GHRCEMN'})
console.log(getCollegeData({name:'sumit',mobNo:123,email:'sumit@123',college:'GHRCEMN'}));

function getCollegeData1 (collegeData : Required<collegeData>) 
{
return collegeData;

}
getCollegeData1({name:'sumit',mobNo:123,email:'sumit@123',college:'GHRCEMN',branch:'DS'})
console.log(getCollegeData1({name:'sumit',mobNo:123,email:'sumit@123',college:'GHRCEMN',branch:'DS'}));

function getCollegeData2 (collegeData : Readonly <collegeData>) 
{
return collegeData;

}
getCollegeData2({name:'sumit',mobNo:123,email:'sumit@123',college:'GHRCEMN',branch:'DS'})
// getCollegeData2.name:'amit';
console.log(getCollegeData1({name:'sumit',mobNo:123,email:'sumit@123',college:'GHRCEMN',branch:'DS'}));


function getCollegeData3 (collegeData : Pick<collegeData ,'name' | 'email'>) 
{
return collegeData;

}
getCollegeData3({name:'sumit',email:'sumit@123'})
console.log(getCollegeData3({name:'sumit',email:'sumit@123'}));
