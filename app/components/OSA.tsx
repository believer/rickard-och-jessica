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
        <p className="mt-6 bg-green-100 border border-green-400 rounded-md text-center p-5">
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
              Namn <span className="text-pink-600 text-sm">*</span>
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
              Antal personer <span className="text-pink-600 text-sm">*</span>
            </label>
            <input
              className="w-full border border-slate-400 rounded-md px-4 py-2 outline-none transition-all ring-white focus:ring-pink-600 ring-offset-white ring-offset-2 focus:ring-2 invalid:border-red-500"
              defaultValue={1}
              name="numberOfPeople"
              placeholder="Antal personer"
              max={2}
              min={0}
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
          <div className="md:flex gap-10 items-center">
            <div>
              <h3 className="font-semibold block mb-1">
                Vi funderar på att hyra buss till festen
              </h3>
              <p>Skulle ni vara intresserade av att åka med?</p>
            </div>
            <fieldset className="flex gap-4 mt-2">
              <div className="flex gap-2">
                <input
                  className="accent-pink-600 ring-2 outline-none rounded-full ring-offset-2 focus:ring-pink-600 ring-white"
                  defaultChecked
                  type="radio"
                  name="bus"
                  id="bus-yes"
                  required
                  value="yes"
                />
                <label htmlFor="bus-yes">Ja</label>
              </div>
              <div className="flex gap-2">
                <input
                  className="accent-pink-600 ring-2 outline-none rounded-full ring-offset-2 focus:ring-pink-600 ring-white"
                  type="radio"
                  name="bus"
                  id="bus-no"
                  required
                  value="no"
                />
                <label htmlFor="bus-no">Nej</label>
              </div>
            </fieldset>
          </div>
          <label htmlFor="misc" className="font-semibold block mb-2">
            Frågor och funderingar
          </label>
          <textarea
            className="w-full border border-slate-400 rounded-md px-4 py-2 outline-none transition-all ring-white focus:ring-pink-600 ring-offset-white ring-offset-2 focus:ring-2"
            rows={4}
            name="misc"
            id="misc"
          />
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
