import React from "react";
import { FormLogin } from "../../components/FormLogin";

export function Login() {
  return (
    <>
      <div class="bg-image overflow-hidden w-screen h-screen">
        <div class="flex h-screen">
          <div class="hidden bg-cover lg:block lg:w-2/3">
            <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-50">
              <div>
                <h2 class="text-4xl font-bold text-white">
                  Santiago de Píllaro
                </h2>

                <p class="max-w-xl mt-3 text-gray-300">
                  "La ciudad de Píllaro, donde la tradición y la cultura andina
                  se fusionan en una experiencia única para todos sus
                  visitantes".
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white flex items-center w-full max-w-xl px-6 lg:w-2/6">
            <div class="flex-1">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
