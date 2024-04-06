'use client'
import { Accordion } from "flowbite-react";

const accordionItems = [
    {
        title: '1. Information We Collect',
        content: `We may collect various types of information when you use our Services, including personal information, usage information, and cookies and similar technologies.`,
    },
    {
        title: '2. How We Use Your Information',
        content: `We may use the information we collect for various purposes, including processing orders, communicating with you, personalizing your experience, improving our Site and Services, and complying with legal obligations.`,
    },
    {
        title: '3. Information Sharing',
        content: `We may share your information with third parties for purposes such as service providers, legal compliance, business transfers, and with your consent.`,
    },
    {
        title: '4. Your Choices',
        content: `You may have certain rights and choices regarding the collection, use, and sharing of your information, such as opting out of marketing communications, updating your personal information, or disabling cookies.`,
    },
    {
        title: '5. Security',
        content: `We take reasonable measures to protect your information from unauthorized access, use, or disclosure.`,
    },
    {
        title: '6. Children\'s Privacy',
        content: `Our Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under the age of 13.`,
    },
    {
        title: '7. Changes to this Policy',
        content: `We may update this Privacy Policy from time to time, and any changes will be posted on this page.`,
    },
    {
        title: '8. Contact Us',
        content: `If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at contact@email.com.`,
    },
];

export default function Privacy() {
    return (
        <div>
            <Accordion>
                {accordionItems.map((item, index) => (
                    <Accordion.Panel key={index}>
                        <Accordion.Title>{item.title}</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                {item.content}
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </div>
    )
}