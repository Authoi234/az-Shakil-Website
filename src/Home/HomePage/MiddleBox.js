import React from 'react';
import useNumReacher from '../../hooks/useNumReacher';

const MiddleBox = () => {

    return (
        <div
            className="relative translate-y-8 bg-[#3f84f2] -top-10 py-12 px-4 md:px-10"
            style={{ boxShadow: "0px 10px 30px white" }}
        >
            <div className="flex justify-center items-center">
                <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-y-8 gap-x-6 text-white">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center w-40 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                            {useNumReacher(0, 2000, 1, 10)}+
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl">Counselled</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-16 w-px bg-white/50"></div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center w-40 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                            {useNumReacher(0, 200, 5, 1)}+
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl">Happy Students</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-16 w-px bg-white/50"></div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center w-40 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                            ${useNumReacher(0, 20000, 1, 50)}+
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl">Scholarship Awards</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block h-16 w-px bg-white/50"></div>

                    {/* Card 4 */}
                    <div className="flex flex-col items-center w-40 text-center">
                        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                            +{useNumReacher(0, 6, 120, 1)}
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl">Countries</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MiddleBox;