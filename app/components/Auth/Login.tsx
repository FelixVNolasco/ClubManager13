import React, { useState } from "react";
import Link from 'next/link';
// import Swal from "sweetalert2";

export const Login = () => {

    // const login = () => {
    //     try {
    //         if (isFormValid) {

    //         }
    //     } catch (error) {
    //         Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: "No ha sido posible iniciar sesión",
    //             didOpen: () => {
    //                 Navigate("/");
    //             },
    //         });
    //     }
    // };

    return (
        <div className="flex mt-6 justify-center h-screen">
            <div className="flex p-4 flex-col border-2 self-center w-5/6 sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-2/5 rounded-md">
                <h4 className="text-center mt-2 mb-6 sm:mb-4 text-2xl font-semibold">
                    Iniciar Sesión
                </h4>

                <span className="text-md">Nombre de Usuario</span>
                <input
                    className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
                    type="text"
                    name="username"
                    autoComplete="false"
                />

                <span className="text-md">Contraseña</span>
                <input
                    className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500  w-full mb-4"
                    type="password"
                    name="password"
                    autoComplete="false"
                />

                <div className="flex justify-end">
                    <div className="p-3 bg-green-200 transition ease-in-out duration-300 hover:bg-green-300 rounded-md text-sm font-semibold cursor-pointer">
                        Iniciar Sesión
                    </div>
                </div>

                <div className="flex flex-col w-full items-center mt-2">
                    <span className="text-md">¿Aún no tienes una cuenta?</span>
                    <Link className="mt-1" href={"/signup"}>
                        <span className="font-semibold">Crea una cuenta aquí</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};