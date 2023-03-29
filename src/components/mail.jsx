import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { db } from "./../firebase-config";
import { collection, addDoc } from "firebase/firestore";

export default function Mail() {
  const usersCollectionRef = collection(db, "users");

  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(false); //loading i aklıma bişey gelmediği için verdim.load la alakası yok

  const createUser = async (e) => {
    e.preventDefault();
    if (newEmail) {
      try {
        await addDoc(usersCollectionRef, { email: newEmail });
        setNewEmail("");
        setLoading(true);
        //alert("Thanks.You will be keep posted");
        backMain();
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Please enter your email");
    }
  };

  const backMain = () => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <>
      <div className=" flex justify-center align-center border-slate-500 border-t-2 my-0 mx-auto max-w-6xl
       bg-neutral-100  ">
        <div className="text-center w-105 py-16">
          <h1 className="text-lg font-bold tracking-wide pb-8 font-roboto text-gray-800">
            DON'T BE A STRANGER
          </h1>
          {loading ? (
            <div>
              <h1 className="tracking-wide font-semibold font-roboto text-orange-800">
                THANK YOU !
              </h1>
              <p className="tracking-wider  font-roboto text-m  pt-4   ">
                You will get updates regularly.Thank you for joining us.
              </p>
            </div>
          ) : (
            <form>
              <div className=" text-center mb-8 ">
                <label className="font-light tracking-wide w-3/4  text-grey font-roboto sm:text-sm">
                  Stay plugged in to when we add a new spot and a destination to
                  visit
                </label>
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }}
                  placeholder="your email adress"
                  className="text-sm tracking-wide w-96 h-10 rounded-none px-2
             border border-gray-500 outline-0 shadow  text-gray-700 xs:w-80"
                />
              </div>

              <div>
                <button
                  type="submit"
                  onClick={createUser}
                  className="border w-12 h-12 text-center  rounded-full border-slate-600    hover:bg-gray-200 transition duration-200"
                >
                  <FaLongArrowAltRight className="w-full " />{" "}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
