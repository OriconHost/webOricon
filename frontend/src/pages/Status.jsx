import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
    ChevronLeft,
  } from "lucide-react";

const Status = () => {


    return(
        <div className="bg-gray-950 min-h-screen text-white">
            <Helmet>
                <title>Статус узлов | PrivateHub</title>
            </Helmet>
            <div className="max-w-screen-2xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        На главную
                    </a>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                        <div>
                        <h1 className="text-2xl md:text-5xl font-bold mb-2">
                            Статус узлов
                        </h1>
                        <p className="text-gray-400 text-base md:text-2xl font-semibold max-w-fit">
                            В разработке
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Status;
