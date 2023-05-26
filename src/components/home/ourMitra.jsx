import { ourMitra } from "../../data/ourMitra";

const OurMitra = () => {
    return (
        <div className="my-16">
            <h1 className="text-center text-4xl font-bold uppercase">
                Mitra Kami
            </h1>

            <div className="mx-auto mt-6 w-1/2 border-b-2 border-green-700/80 lg:w-1/6"></div>

            <div className="mx-auto max-w-2xl py-14 px-4 sm:py-16 sm:px-6 md:max-w-full lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-1 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
                    {ourMitra.map((mitra) => (
                        <div
                            className="box-mitra flex h-24 items-center justify-center rounded-md bg-green-800 py-3 px-3 sm:h-28"
                            key={mitra.id}
                        >
                            <div className="">
                                <div className="mb-1 flex justify-center">
                                    <p className="text-center text-sm font-semibold text-white sm:text-lg md:text-lg">
                                        {mitra.name}
                                    </p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="sm:text-md text-center text-xs text-gray-100 md:text-sm lg:text-base">
                                        {mitra.Mitraname}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default OurMitra;
