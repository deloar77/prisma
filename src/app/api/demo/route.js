import { NextResponse } from "next/server"; 
import { PrismaClient } from "@prisma/client";
export async function POST(req,res){

  try {
    //console.log(req)
   const reqBody = await req.json();
   const prisma =  new PrismaClient();
   console.log(reqBody)
   const result = await prisma.User.create({
    data:{
        email:reqBody['email'],
        password:reqBody['password'],
        profile:{
            create:{
                fname:reqBody['fname'],
                lname:reqBody['lname'],
                city:reqBody['city'],
                postcode:reqBody['postcode']
            }

        },
        post:{
            create:{
                title:reqBody['title'],
                desc:reqBody['desc']
            }

        },
        comment:{
            create:{
                des:reqBody['des']
            }

        }
    }
   })
   return NextResponse.json({status:"success",data:result})
    
  } catch (e) {
    return NextResponse.json({status:"fail",data:e.toString()})
    
  }





}
