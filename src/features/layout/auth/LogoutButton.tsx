"use client"
import { Button } from '@/components/ui/button'
import { LogIn, LogOut } from 'lucide-react'
import React, { useTransition } from 'react'
import {signIn, signOut} from "next-auth/react"
import {DropdownMenuItem} from "@radix-ui/react-dropdown-menu"
import { Loader } from '@/components/ui/loader'

export const DropdownMenuItemLogout = () => {
    const[isPending, startTransition]=useTransition();
  return (
    <DropdownMenuItem onClick={()=>{
        startTransition(() =>signOut());
    }}>
        {isPending ? (
            <Loader className="mr-2 h-4 w-4"/>
        ) :( 
            
            <LogOut className='mr-2 h-4 w-4'/>
        )}
       
        Logout
    </DropdownMenuItem>
  )
}
