// // import { serverTimestamp, addDoc, collection, } from "firebase/firestore"; 
// import { redirect } from "react-router-dom";
// // import { dbase } from "../Firebase";

// export const DrugsRegForm = async ({request}) => {
//     const data = await request.formData()
//     const drugData = {
//       name: data.get('name'),
//       batchNumber: data.get('batch'),
//       expDate: data.get('expDate'),
//       manName: data.get('manName'),
//       manAddress: data.get('manAddress')
//     }
//     console.log(drugData);

//     // try {

//     //   const colRef = collection(dbase, 'customers');
//     //   await addDoc(colRef, {
//     //     name: drugData.name,
//     //     batch: drugData.batchNumber,
//     //     expDate: drugData.expDate,
//     //     manName: drugData.manName,
//     //     manAddress: drugData.manAddress,
//     //     createdAt: serverTimestamp(),
//     //   });
//     // } catch (error) {
//     //   alert(error.message);
//     // }

//     return redirect('/')
// }
