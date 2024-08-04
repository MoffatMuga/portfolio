"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stairs from './Stairs';

export default function StairEffect() {

    const pathname = usePathname();
    return (
        <>
            <AnimatePresence>
                <div key={pathname}>
                    <div className='right-0 left-0 top-0 fixed w-screen h-screen pointer-events-none z-40 flex '>
                        <Stairs />
                    </div>
                    <motion.div
                        className="h-screen w-screen bg-bg-1 fixed pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: 0,
                            transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                        }}
                    />
                </div>
            </AnimatePresence>
        </>


    )
}
