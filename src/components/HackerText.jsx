import React, { useState, useEffect, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const HackerText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef(null);

    useEffect(() => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(intervalRef.current);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

export default HackerText;
