import React, { useRef } from 'react';
import Card from './Card';


function Foreground() {
    
    const ref = useRef(null);

    const data =[
        {
            desc: "What you think, you become. What you feel, you attract. What you imagine, you create.",
            filesize :"9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"yellow"},
        },
        {
            desc: "Believe you can and you're halfway there.",
            filesize :".9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"magenta"},
        },
        {
            desc: "The future belongs to those who believe in the beauty of their dreams.",
            filesize :".9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"green"},
        },
        {
            desc: "It always seems impossible until it's done.",
            filesize :".9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"green"},
        },
        {
            desc: "You miss 100% of the shots you don't take.",
            filesize :".9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"green"},
        },
        {
            desc:"Success is not final, failure is not fatal: It is the courage to continue that counts." ,
            filesize :".9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"green"},
        },
        {
            desc: "The best way to predict the future is to create it.",
            filesize :".9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"green"},
        },
        {
            desc: "Your time is limited, don’t waste it living someone else’s life.",
            filesize :".9mb",
            close:true,
            tag:{isOpen : true, tagTitle: "Download now", tagcolor:"green"},
        },

    ];
  return (
    <div  ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground