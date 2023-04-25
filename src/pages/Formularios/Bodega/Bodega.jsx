import React from "react";

export default function Bodega() {
  return (
    <div>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-full px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
              id="grid-password"
              type="password"
              placeholder="******************"
            />
            <p class="text-grey-dark text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>

          <div class="md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              for="grid-zip"
            >
              Zip
            </label>
            <input
              class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
              id="grid-zip"
              type="text"
              placeholder="90210"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
