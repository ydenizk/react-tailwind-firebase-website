import React, { useState } from "react";

export default function Contact() {
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  let name, value;
  const postData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };
//firebase le contatc form
  const submitData = async (e) => {
    e.preventDefault();

    const { fullname, email, message } = contactData;
    //asagıdakı linki realtime database den aldık,sonundakı userMessages/json kısmını,
    //ben ekledim.firebase de collection olusturuor



    if (fullname && email && message) {
      const res = fetch(
        "https://ancient-4c4b1-default-rtdb.europe-west1.firebasedatabase.app/userMessages.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            message,
          }),
        }
      );

      if (res) {
        setContactData({
          fullname: "",
          email: "",
          message: "",
        });
        alert("Your mesage sent succesfully.Thank you!");
      } else {
        alert("Please fill the data");
      }
    } else {
      alert("Please fill the data");
    }
  };

  return (
    <div className="bg-white mt-16 flex justify-center align-center pt-32 pb-48 ">
      <div className="w-288 h-145 max-h-145 ">
        <form method="POST" className="bg-white ">
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Your Name"
              className="  w-96 pb-1 mb-3 border-b-2 border-black outline-0 font-light font-roboto text-neutral-900 "
              value={contactData.fullname}
              onChange={postData}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-96 pb-1 mb-3 border-b-2 border-black outline-0 font-light font-roboto text-neutral-900  "
              value={contactData.email}
              onChange={postData}
            />
          </div>
          <div>
            <input
              type="text"
              name="message"
              placeholder="Your Message"
              className="w-96 h-36 pb-1 mb-3 border-b-2 border-black outline-0  font-light font-roboto 
              text-neutral-900 "
              value={contactData.message}
              onChange={postData}
            />
          </div>

          <button type="submit" onClick={submitData} className="border border-neutral-600 
          p-1 px-2 tracking-wide mt-2 w-full cursor-pointer bg-white hover:bg-gray-200 transition duration-200">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}
