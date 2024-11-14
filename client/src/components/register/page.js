"use client";

import { useState } from "react";
import { User, Lock, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function RegisterForm() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/login-bg.png')" }}
    >
      <main className="w-[250px] h-[500px] border border-white rounded-md backdrop-blur-2xl bg-black/20 grid place-items-center relative overflow-hidden transition-all duration-300">
        <form id="signup" className="w-4/5 flex flex-col gap-2.5 text-center">
          <header className="mb-5">
            <h2 className="text-xl font-bold">Sign Up</h2>
            <p className="text-xs">
              Sign Up here using your username and password
            </p>
          </header>
          <div className="flex rounded overflow-hidden">
            <i className="p-2.5 bg-white text-black border-r border-gray-300">
              <User size={20} aria-hidden="true" />
            </i>
            <input
              type="text"
              placeholder="Username"
              aria-label="Username"
              className="w-full p-2.5 border-none outline-none text-black"
            />
          </div>
          <div className="flex rounded overflow-hidden">
            <i className="p-2.5 bg-white text-black border-r border-gray-300">
              <Mail size={20} aria-hidden="true" />
            </i>
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              className="w-full p-2.5 border-none outline-none text-black"
            />
          </div>
          <div className="flex rounded overflow-hidden">
            <i className="p-2.5 bg-white text-black border-r border-gray-300">
              <Phone size={20} aria-hidden="true" />
            </i>
            <input
              type="tel"
              placeholder="Phone"
              aria-label="Phone"
              className="w-full p-2.5 border-none outline-none text-black"
            />
          </div>
          <div className="flex rounded overflow-hidden">
            <i className="p-2.5 bg-white text-black border-r border-gray-300">
              <Lock size={20} aria-hidden="true" />
            </i>
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              className="w-full p-2.5 border-none outline-none text-black"
            />
          </div>
          <div className="grid grid-cols-[auto_auto] items-center justify-start gap-2.5 text-xs">
            <input id="check1" type="checkbox" />
            <label htmlFor="check1">I agree to terms & conditions.</label>
          </div>
          <button
            type="submit"
            className="border-none py-2.5 bg-[#304221] text-white font-bold cursor-pointer relative rounded hover:before:inset-[-4px] before:absolute before:content-[''] before:inset-0 before:border-2 before:border-[#304221] before:rounded before:transition-all before:duration-200"
          >
            Sign Up
          </button>
          <p className="text-xs mt-5">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-white no-underline text-sm font-bold relative hover:before:scale-x-100 before:absolute before:content-[''] before:bottom-[-3px] before:w-full before:h-0.5 before:bg-white before:transition-transform before:duration-200 before:scale-x-0"
            >
              Login
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
