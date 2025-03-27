"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {

    const link:string = "text-md sm:text-lg md:text-xl cursor-pointer";
    const input:string = "block w-full text-md sm:text-lg py-0.5 px-2 bg-input mt-1 md:mt-1.5 focus:outline-none text-background rounded-md";

    const [nameValue, setNameValue] = useState<string>("");
    const [emailValue, setEmailValue] = useState<string>("");
    const [msgValue, setMsgValue] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<Array<number>>([]);

    const [success, setSuccess] = useState<boolean>(false);

    const regexpName = /^.{1,50}$/;
    const regexpEmail = /^[A-Za-z0-9._%+-]{1,40}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    const regexpMsg = /^.{1,400}$/;

    const NAME_MISSING = 1;
    const EMAIL_MISSING = 2;
    const EMAIL_INVALID = 3;
    const MSG_MISSING = 4;
    const SUBMISSION_ERROR = 5;

    function onSubmit() {
        let errorArray:Array<number> = [];

        if (!regexpName.test(nameValue)) errorArray.push(NAME_MISSING);

        if (emailValue == "") errorArray.push(EMAIL_MISSING);
        else if (!regexpEmail.test(emailValue)) errorArray.push(EMAIL_INVALID);

        if (!regexpMsg.test(msgValue)) errorArray.push(MSG_MISSING);

        setError(errorArray);

        if (errorArray.length == 0) {
            setLoading(true);
            const request = JSON.stringify(Object.fromEntries(new FormData(document.getElementById("contactForm") as HTMLFormElement)));

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: request
            }).then(async (response) => {
                if (response.status == 200) {
                    setSuccess(true);
                    (document.getElementById("contactForm") as HTMLFormElement).reset();
                    setEmailValue(""); setNameValue(""); setMsgValue("");
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                } else {
                    errorArray.push(SUBMISSION_ERROR);
                }
            })
            .catch(error => {
                errorArray.push(SUBMISSION_ERROR);
            })

            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col md:flex-row w-[100%] gap-16 md:gap-32 lg:gap-64 mt-[10%]">

            <div>
                <div className="text-[1.6rem] sm:text-[2.5rem] md:text-[2.6rem] leading-[3.2rem] md:leading-[3.4rem] tracking-wider whitespace-nowrap">Contact Form</div>
                <div className="mt-3 md:mt-6">lillianallison630@gmail.com</div>
            </div>

            <div className="flex flex-col items-center">
                <form action="https://api.web3forms.com/submit" id="contactForm" method="POST" className="flex flex-col gap-8 w-[275px] sm:w-[325px] md:w-[400px] lg:w-[450px] mb-12 md:my-none">
                    <input type="hidden" name="apikey" value="dbf21b68-2350-47bd-a961-887d1e3e3405"/>
                    <div>
                        <label htmlFor="name" className="w-28 text-md sm:text-lg !md:text-left">Name:</label>
                        <input id="name" name="name" className={`${input}`} maxLength={50}
                        onChange={(e) => {setNameValue(e.target.value);
                        if (error.includes(NAME_MISSING)) setError(error.filter(number => number != NAME_MISSING));
                        }}/>
                        <span className="text-[#e0596f] text-sm" hidden={!error.includes(NAME_MISSING)}>Please enter your name.</span>
                    </div>
                    <div>
                        <label htmlFor="email" className="w-28 text-md sm:text-lg">Email address:</label>
                        <input id="email" name="email" className={`${input}`} maxLength={100}
                        onChange={(e) => {setEmailValue(e.target.value);
                            if (error.includes(EMAIL_MISSING)) setError(error.filter(number => number != EMAIL_MISSING));
                            else if (error.includes(EMAIL_INVALID)) setError(error.filter(number => number != EMAIL_INVALID));
                        }}/>
                        <span className="text-[#e0596f] text-sm" hidden={!error.includes(EMAIL_MISSING)}>Please enter your email address.</span>
                        <span className="text-[#e0596f] text-sm" hidden={!error.includes(EMAIL_INVALID)}>Please enter a valid email address.</span>
                    </div>
                    <div>
                        <label htmlFor="message" className="w-28 text-md sm:text-lg">Message:</label>
                        <textarea id="message" name="message" className={`${input} max-h-48 min-h-24 h-24`} maxLength={400}
                        onChange={(e) => {setMsgValue(e.target.value)
                            if (error.includes(MSG_MISSING)) setError(error.filter(number => number != MSG_MISSING));
                        }}></textarea>
                        <span className="text-[#e0596f] text-sm" hidden={!error.includes(MSG_MISSING)}>Please enter a message.</span>
                    </div>
                    <div className="flex justify-center md:justify-start items-center gap-16">
                        <button className={`fade ${link} outline outline-1 outline-offset-2 px-2 outline-sample rounded-sm`}
                        type="button" onClick={onSubmit} disabled={loading}>Submit</button>
                        <Link href="/" className={`fade ${link}`}>Go back</Link>
                    </div>
                    <span className="text-[#5b5883] text-sm" hidden={!success}>Thank you! I have recieved your message.</span>
                    <span className="text-[#e0596f] text-sm" hidden={!error.includes(SUBMISSION_ERROR)}>Sorry, something went wrong. Try again later.</span>
                </form>
            </div>
        </div>
    );
}