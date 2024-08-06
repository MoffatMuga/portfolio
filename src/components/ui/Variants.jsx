const fadeIn = (direction, delay) => {
    return {
        hidden: {
            Y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            X: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,

        },
        show: {
            Y: 0,
            X: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: '1.2',
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]
            }
        }
    }
}

