'use client';

import React from 'react';
import { motion } from 'framer-motion';

const withTransition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
                className='slide-out'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
};

export default withTransition;
