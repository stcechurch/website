import Image from 'next/image';

export const Committee = () => {
    return (
        <div className="min-h-[45vh] md:min-h-[40vh] relative bg-stone-800 text-white">
            <Image
                src={'/assets/committee.jpg'}
                width={1200}
                height={400}
                alt=""
                className="h-[45vh] md:h-[40vh] w-[100vw] object-cover"
            />

            <div className="absolute top-0 h-full w-full flex items-center justify-center">
                <div className="text-center">   
                    <h1 className="font-bold uppercase text-lg sm:text-xl md:text-2xl mb-4">
                        EXECUTIVE COMMITTEE MEMBERS
                    </h1>

                    <p className="text-amber-300 text-sm">President: Tharapatla Joseph</p>
                    <p className="text-gray-200 text-xs">Vice President: Tupelly Damodar Reddy</p>
                    <p className="text-amber-500 text-xs">General Secretary: Namburi Deena</p>
                    <p className="text-gray-200 text-xs">Joint Secretary: Sony Anjula Tigga</p>
                    <p className="text-amber-500 text-xs">Treasurer: Dodium Chandra </p>
                    <p className="text-gray-200 text-xs">EC Member 1: Vijay Jaipal Thumu</p>
                    <p className="text-amber-500 text-xs">EC Member 2: Namburi Lydia</p>
                    {/* <button className="btns">FOLLOW REV. NICHOLAS</button> */}
                </div>
            </div>
        </div>
    );
};