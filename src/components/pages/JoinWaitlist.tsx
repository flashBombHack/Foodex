import React, { useState } from 'react';

const JoinWaitlist: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`Email submitted: ${email}`);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">Join Waitlist</h1>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="email"
                    value={email}
                    onChange={handleChange}
                    className="px-4 py-2 border rounded-lg"
                    placeholder="Enter your email"
                />
                <button
                    type="submit"
                    className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                    Join Now
                </button>
            </form>
        </div>
    );
};

export default JoinWaitlist;
