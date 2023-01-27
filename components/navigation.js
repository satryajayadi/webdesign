import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
const Navigation = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="flex items-center md:justify-center md w-full pt-10 flex overflow-x-scroll md:overflow-x-visible  gap-6 item"
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <div className="relative ">
        <svg
          width="308"
          height="97"
          viewBox="0 0 308 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_24_106)">
            <rect
              x="4"
              width="300"
              height="89"
              rx="10"
              fill="#347FA9"
              shape-rendering="crispEdges"
            />
            <rect
              x="236"
              y="37"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
            />
            <rect
              x="259"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_24_106"
              x="0"
              y="0"
              width="308"
              height="97"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_24_106"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_106"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <p className="absolute flex text-center w-full text-white z-10 top-8 left-24">
          Recomendation
        </p>
      </div>
      <div className="relative">
        <svg
          width="308"
          height="97"
          viewBox="0 0 308 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_24_118)">
            <rect
              x="4"
              width="300"
              height="89"
              rx="10"
              fill="#34A9A2"
              shape-rendering="crispEdges"
            />
            <rect
              x="236"
              y="37"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
              //   style="mix-blend-mode:luminosity"
            />
            <rect
              x="259"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
              //   style="mix-blend-mode:luminosity"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_24_118"
              x="0"
              y="0"
              width="308"
              height="97"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_24_118"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_118"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <p className="absolute flex text-center w-full text-white z-10 top-8 left-24">
          Special Discount
        </p>
      </div>
      <div className="relative">
        <svg
          width="308"
          height="97"
          viewBox="0 0 308 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_24_123)">
            <rect
              x="4"
              width="300"
              height="89"
              rx="10"
              fill="#34A971"
              shape-rendering="crispEdges"
            />
            <rect
              x="236"
              y="37"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
              //   style="mix-blend-mode:luminosity"
            />
            <rect
              x="259"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
              //   style="mix-blend-mode:luminosity"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_24_123"
              x="0"
              y="0"
              width="308"
              height="97"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_24_123"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_123"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <p className="absolute flex text-center w-full text-white z-10 top-8 left-28">
          Lifestyle
        </p>
      </div>
      <div className="relative">
        <svg
          width="308"
          height="97"
          viewBox="0 0 308 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_24_128)">
            <rect
              x="4"
              width="300"
              height="89"
              rx="10"
              fill="#3463A9"
              shape-rendering="crispEdges"
            />
            <rect
              x="236"
              y="37"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
              //   style="mix-blend-mode:luminosity"
            />
            <rect
              x="259"
              width="20"
              height="52"
              rx="2"
              fill="#252525"
              fill-opacity="0.3"
              //   style="mix-blend-mode:luminosity"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_24_128"
              x="0"
              y="0"
              width="308"
              height="97"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_24_128"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_24_128"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <p className="absolute flex text-center w-full text-white z-10 top-8 left-24">
          Home & Living
        </p>
      </div>
    </div>
  );
};

export default Navigation;
