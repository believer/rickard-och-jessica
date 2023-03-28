"use client";

import React from "react";

export function OSA() {
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());

    try {
      await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(body),
      });

      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="text-4xl font-cursive mt-8 md:mt-10">OSA</h2>
      {submitted ? (
        <p className="mt-6">
          Wohoo, nu blir det fest! <span className="text-red-500">♥</span>
        </p>
      ) : (
        <form
          id="osa"
          method="POST"
          action="/api/osa"
          onSubmit={onSubmit}
          className="mt-6 space-y-4"
        >
          <input
            type="checkbox"
            name="buyUsAPresent"
            defaultChecked={false}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          <div>
            <label htmlFor="name" className="font-semibold block mb-2">
              Namn
            </label>
            <input
              className="w-full border border-slate-400 rounded-md px-4 py-2 outline-none transition-all ring-white focus:ring-pink-600 ring-offset-white ring-offset-2 focus:ring-2"
              type="text"
              name="name"
              id="name"
              placeholder="Namn"
              required
            />
          </div>
          <div>
            <label
              htmlFor="numberOfPeople"
              className="font-semibold block mb-2"
            >
              Antal personer
            </label>
            <input
              className="w-full border border-slate-400 rounded-md px-4 py-2 outline-none transition-all ring-white focus:ring-pink-600 ring-offset-white ring-offset-2 focus:ring-2"
              name="numberOfPeople"
              placeholder="Antal personer"
              required
              id="numberOfPeople"
              type="number"
            />
          </div>
          <div>
            <label htmlFor="food" className="font-semibold block mb-2">
              Allergi / matpreferenser
            </label>
            <input
              className="w-full border border-slate-400 rounded-md px-4 py-2 outline-none transition-all ring-white focus:ring-pink-600 ring-offset-white ring-offset-2 focus:ring-2"
              type="text"
              name="food"
              id="food"
              placeholder="Allergi / matpreferenser"
            />
          </div>
          <button
            className="bg-pink-600 w-full py-2 rounded-md text-white font-semibold ring-2 focus:ring-pink-600 ring-offset-2 ring-white transition-all outline-none"
            type="submit"
          >
            Skicka
          </button>
        </form>
      )}
    </>
  );
}
