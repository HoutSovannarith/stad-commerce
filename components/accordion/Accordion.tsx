// components/Accordion.tsx

import { useState } from 'react';

type AccordionProps = {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="accordion">
            <div className="accordion-header flex" onClick={onClick}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;
