import React from 'react';
const page = () => {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
  ]
  return (
    <>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>
      <div className="w-full h-auto md:py-4 md:px-4 flex flex-col gap-3 p-2 md:gap-6">
        {
          images.map((image,index) => {
            return (
              <div className="w-full h-full rounded-md overflow-hidden bg-black">
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt=""
                />
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default page;
