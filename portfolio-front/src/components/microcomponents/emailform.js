import React from 'react';


function EmailForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
            <form className="email-form" onSubmit={handleSubmit}>
                <h2>Send me a message</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required placeholder='enter your name...'/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder='example@gmail.com'/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required placeholder='Hi Esmond, I would like to ...'></textarea>

                <button type="submit">Send</button>
            </form>
     );
}

export default EmailForm;