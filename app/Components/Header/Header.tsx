"use client"
import Image from "next/image";
import React,{useState, useEffect} from "react";
import bgImg1 from '@/public/bgimg1.jpg'


interface ImageProps {
    image: string[];
}

const Header: React.FC<ImageProps> = ({image})=>{
        const [imageIndex , setImageIndex] = useState<number>(0);

        useEffect(()=>{
             setInterval(()=>{
                setImageIndex(( imageIndex + 1 ) % image.length);
                
            },4000)
        },[imageIndex])
        
       

    return (
        <div className=" relative mt-7 h-screen w-screen">
            <Image src={image[imageIndex]} alt="bg_img" height={200} width={200} className=" h-full w-full" />            
        </div>
    )
}

export default Header;