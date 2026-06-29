import { useEffect, useState } from "react";

export const User = ({name, location, contact}) => {
    const [count] = useState(0);
    useEffect(() => {
        console.log(name + ": :" + "Child UseEffect");
        const timer = setInterval(() => {
            console.log("Interval");
        }, 1000);

        // this is the cleanup function which will be called when the component unmounts or before the next useEffect runs
        return () => {
            // clear the interval to prevent memory leaks
            // this return will be called when leaving the component
            console.log(name + ": :" + "Child UseEffect Cleanup");
            clearInterval(timer);
        };
    }, [name]);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 pt-1">User Profile</h1>
            {/* <h1 className="text-xl font-semibold">Count: {count}</h1> */}
            <h2 className="text-sm font-medium"><span className="font-semibold">Name:</span> {name}</h2>
            <h3 className="text-sm font-normal"><span className="font-semibold">Location:</span> {location}</h3>
            <h4 className="text-sm font-light"><span className="font-semibold">Contact:</span> {contact}</h4>
            <p className="text-gray-700 text-sm py-2">Welcome to your user profile! Here you can view and manage your account information, track your orders, and update your preferences. We are committed to providing you with a personalized experience and ensuring that your interactions with us are seamless and enjoyable. Thank you for being a valued member of our community!</p>
        </div>
    );
}