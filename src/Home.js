import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Home() {
    return (
        <div>
            <Typewriter
                options={{
                strings: "Tyler Valkavich",
                autoStart: true,
                loop: false,
            }}
            />
        </div>

        
    )
}
