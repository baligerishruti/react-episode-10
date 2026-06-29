import React from "react";
import { User } from "./User";


const About = () => {
    return (
        <div className="p-4 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-8">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 text-sm">Welcome to our restaurant! We are passionate about serving delicious food and providing excellent service to our customers. Our team is dedicated to creating a memorable dining experience for you. Whether you're here for a quick bite or a leisurely meal, we strive to make every visit special. Thank you for choosing us, and we look forward to serving you!</p>
            <User name="John Doe" location="New York" contact="Test@tem.com" />
        </div>
    );
}

export default About;
