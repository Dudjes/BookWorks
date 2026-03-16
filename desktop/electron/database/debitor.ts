// import { error } from "node:console";
// import {prisma} from "../database.js";

// export async function createDebitor(
//     companyId: number,
//     companyName: string,
//     contactPerson: string,
//     kvkNumber: string,
//     btwNumber: string,
//     IBAN: string,
//     paymentTerm: number,
//     email: string,
//     phoneNumber: string,
//     address: string,
//     postcode: string,
//     city: string,
//     country: string,
//     type: string,
// ){
//     if(email){
//         const existing = await prisma.relation.findFirst({
//             where: {
//                 email,
//                 companyId,
//             },
//         })

//         if (existing) {
//             throw new Error(`A relation with email "${email}" already exists.`);
//         }
//     }

//     try {
//         return await prisma.relation.create({
//             data: {
//                 companyId,
//                 companyName,
//                 contactPerson,
//                 type: "DEBTOR",
//                 kvkNumber,
//                 btwNumber,
//                 IBAN,
//                 paymentTerm,
//                 email,
//                 phoneNumber,
//                 address,
//                 postcode,
//                 city,
//                 country,
//             },
//         })
//     } catch (error) {
        
//     }
// }