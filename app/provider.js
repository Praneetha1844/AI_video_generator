"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { db } from '../configs/db';
import { users } from '../configs/schema';
import { eq } from 'drizzle-orm';

function Provider({children}) {

  const {user}=useUser();

  useEffect(  ()=>{
    
      user&&isNewUser();
    
  },[user]);




  
  const isNewUser=async()=>{
    const result= await db.select().from(users).where(eq(Users.email,user?.primaryEmailAddress?.emailAddress));
    if(!result[0]){
      await db.insert(users).values({
        email:user?.primaryEmailAddress?.emailAddress,
        name:user?.fullName,
        clerkId:user?.id,
        profileImageUrl:user?.profileImageUrl
      })
    }
  }
  return (
    <div>
        {children}
    </div>
  )
}

export default Provider