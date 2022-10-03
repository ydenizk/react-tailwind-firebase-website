import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { db } from "./../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function Mail() {
  const usersCollectionRef = collection(db, "users");

  const [newEmail, setNewEmail] = useState("");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { email: newEmail });
  };

  return (
    <>
      <div className=" flex justify-center align-center border-slate-500 border-t-2 my-0 mx-auto max-w-6xl bg-neutral-100  ">
        <div className="text-center w-105 py-16">
          <h1 className="text-lg font-bold tracking-wide pb-8 font-roboto text-gray-800">
            DON'T BE A STRANGER
          </h1>

          <form>
            <div className=" text-center mb-8 ">
              <label
                htmlFor=""
                className="font-light tracking-wide w-3/4  text-grey font-roboto sm:text-sm"
              >
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
                onClick={createUser}
                className="border w-12 h-12 text-center  rounded-full border-slate-600    hover:bg-gray-200 transition duration-200"
              >
                {" "}
                <FaLongArrowAltRight className="w-full " />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
