/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const Icon = (props) => {
    const { id } = props;
    console.log(id);
    const icons = {
        html: <path xmlns="http://www.w3.org/2000/svg" d="M0 0L2.33705 26.5045L12.8237 30L23.3772 26.5045L25.7143 0H0ZM20.6384 8.56473H8.33036L8.60491 11.8728H20.3638L19.4531 21.8103L12.8973 23.6183V23.6384H12.8237L6.21429 21.8103L5.8125 16.7344H9.0067L9.24107 19.2857L12.8237 20.2567L16.4196 19.2857L16.8214 15.1205H5.64509L4.78795 5.37054H20.933L20.6384 8.56473Z" />,
        css: <path xmlns="http://www.w3.org/2000/svg" d="M0 0H25.9459L23.5861 26.9538L12.9446 30L2.36232 26.9525L0 0ZM21.1151 5.51625L4.83089 5.5125L5.09405 8.79L17.6037 8.7925L17.2886 12.1875H9.08479L9.38131 15.4037H17.0193L16.5671 19.8075L12.9717 20.8125L9.31954 19.8L9.08726 17.1625H5.86255L6.22085 21.9812L12.973 24.11L19.6114 22.1975L21.1151 5.5175V5.51625Z" />,
        react: <g transform="scale(0.07, 0.07)"><path xmlns="http://www.w3.org/2000/svg" d="M398.6,186.7c-4.7-1.6-9.5-3.1-14.2-4.5c0.8-3.3,1.5-6.5,2.2-9.8c10.8-52.4,3.7-94.5-20.3-108.4   c-23.1-13.3-60.8,0.5-99,33.8c-3.8,3.3-7.5,6.7-11,10.1c-2.4-2.3-4.8-4.6-7.3-6.8c-40-35.5-80.1-50.4-104.1-36.5   c-23,13.4-29.9,53-20.2,102.6c1,4.9,2,9.8,3.3,14.7c-5.6,1.6-11.2,3.3-16.3,5.2C64.7,203.4,31,229.1,31,255.6   c0,27.4,35.9,54.9,84.6,71.6c4,1.3,7.9,2.6,12,3.8c-1.3,5.3-2.5,10.5-3.5,15.8c-9.2,48.8-2,87.5,21,100.7   c23.7,13.7,63.6-0.4,102.5-34.4c3.1-2.7,6.2-5.5,9.2-8.5c3.9,3.8,7.9,7.4,12,10.9c37.6,32.3,74.8,45.4,97.7,32.2   c23.7-13.7,31.5-55.3,21.4-105.9c-0.8-3.9-1.7-7.8-2.6-11.9c2.8-0.8,5.5-1.7,8.3-2.5c50.7-16.8,87.5-43.9,87.5-71.8   C481,229,446.4,203.2,398.6,186.7L398.6,186.7z M279.6,112.1c32.7-28.5,63.2-39.6,77.1-31.6c14.9,8.5,20.6,43,11.2,88.2   c-0.6,3-1.2,5.9-2,8.8c-19.5-4.4-39.3-7.6-59.2-9.3c-11.4-16.3-23.9-32-37.4-46.7C272.8,118.3,276.1,115.2,279.6,112.1z M178,301.2   c4.5,7.6,9.1,15.3,13.9,22.8c-13.7-1.5-27.3-3.7-40.8-6.6c3.9-12.7,8.7-25.8,14.3-39.1C169.4,286,173.6,293.7,178,301.2L178,301.2z    M151.3,195.5c12.7-2.8,26.1-5.1,40.1-6.9c-4.7,7.3-9.2,14.8-13.5,22.3c-4.3,7.5-8.5,15.1-12.5,22.9   C159.8,220.7,155.2,207.9,151.3,195.5L151.3,195.5z M175.4,256.1c5.8-12.1,12.1-24,18.8-35.7c6.7-11.7,13.9-23,21.4-34.2   c13.2-1,26.6-1.5,40.3-1.5c13.7,0,27.2,0.5,40.3,1.5c7.5,11.1,14.6,22.4,21.4,34c6.8,11.6,13.1,23.5,19.1,35.5   c-5.9,12.1-12.2,24.1-19,35.9c-6.7,11.7-13.8,23-21.3,34.3c-13.1,1-26.7,1.4-40.5,1.4c-13.8,0-27.2-0.4-40.1-1.2   c-7.6-11.2-14.9-22.6-21.6-34.3C187.5,280.1,181.3,268.2,175.4,256.1L175.4,256.1z M334.1,301.1c4.5-7.7,8.7-15.6,12.8-23.5   c5.6,12.7,10.5,25.7,14.9,38.9c-13.6,3.1-27.4,5.4-41.3,7C325.3,316.2,329.7,308.6,334.1,301.1L334.1,301.1z M346.8,233.8   c-4.1-7.7-8.3-15.5-12.7-23c-4.3-7.5-8.8-14.9-13.4-22.1c14.2,1.8,27.7,4.1,40.3,7C356.9,208.7,352.2,221.3,346.8,233.8z    M256.2,135c9.2,10,17.9,20.6,26,31.5c-17.4-0.8-34.9-0.8-52.3,0C238.5,155.1,247.4,144.5,256.2,135z M154.2,81.1   c14.8-8.6,47.5,3.7,82.1,34.3c2.2,1.9,4.4,4,6.7,6.2c-13.6,14.7-26.2,30.3-37.7,46.7c-19.9,1.8-39.6,4.8-59.1,9.1   c-1.1-4.5-2.1-9.1-3.1-13.6C134.9,121.2,140.3,89.1,154.2,81.1L154.2,81.1z M132.7,312.8c-3.7-1.1-7.3-2.2-10.9-3.4   c-18.7-5.9-40-15.2-55.4-27.4c-8.9-6.2-14.9-15.6-16.5-26.3c0-16.1,27.8-36.7,67.9-50.6c5-1.8,10.1-3.3,15.2-4.8   c6,19.1,13.2,37.8,21.5,55.9C146,274.4,138.8,293.4,132.7,312.8z M235.2,398.9c-14.5,13.3-31.3,23.8-49.6,31   c-9.8,4.7-21,5.1-31,1.1c-14-8.1-19.8-39.1-11.9-80.9c1-4.9,2-9.8,3.3-14.7c19.7,4.2,39.6,7.1,59.7,8.6   c11.6,16.4,24.3,32.2,38,46.9C240.8,393.8,238,396.4,235.2,398.9L235.2,398.9z M256.7,377.5c-9-9.7-17.9-20.4-26.6-31.9   c8.4,0.4,17.1,0.5,25.9,0.5c9.1,0,17.9-0.2,26.7-0.6C274.6,356.7,265.9,367.3,256.7,377.5z M371.6,403.9   c-0.8,10.7-6.1,20.7-14.5,27.5c-14,8.1-43.8-2.5-75.9-30.1c-3.7-3.2-7.4-6.6-11.2-10.1c13.4-14.9,25.8-30.6,37.1-47.1   c20.1-1.7,40.2-4.7,59.9-9.2c0.9,3.6,1.7,7.2,2.4,10.7C373.7,364.6,374.4,384.4,371.6,403.9L371.6,403.9z M387.6,309.4   c-2.5,0.8-4.9,1.6-7.5,2.3c-6.2-19.2-13.7-37.9-22.4-56.1c8.4-17.9,15.6-36.4,21.5-55.3c4.6,1.3,9,2.7,13.2,4.1   c41,14.1,69.7,35,69.7,51C462.1,272.7,431.4,294.9,387.6,309.4z M256,296.2c22.2,0,40.3-18,40.3-40.3c0-22.2-18-40.3-40.3-40.3   s-40.3,18-40.3,40.3S233.8,296.2,256,296.2L256,296.2z" /></g>,
        firebase: <path xmlns="http://www.w3.org/2000/svg" d="M0.717494 19.5904L3.67372 0.576775C3.69492 0.435736 3.7601 0.304986 3.85995 0.203153C3.95981 0.101319 4.08926 0.0335959 4.22985 0.00963223C4.37045 -0.0143314 4.51502 0.0066865 4.64297 0.0696917C4.77093 0.132697 4.87573 0.234475 4.94246 0.360527L8.12118 6.32423L0.717494 19.5904ZM21.7098 24.2053L18.8973 6.70547C18.8781 6.5818 18.8248 6.46593 18.7434 6.3708C18.6621 6.27567 18.5559 6.20503 18.4367 6.16677C18.3175 6.12852 18.1901 6.12415 18.0686 6.15416C17.947 6.18418 17.8363 6.24738 17.7486 6.33673L0 24.2066L9.81992 29.7403C10.123 29.9106 10.4648 30 10.8124 30C11.16 30 11.5018 29.9106 11.8049 29.7403L21.7098 24.2053ZM13.7299 8.93421L11.4549 4.58174C11.3975 4.47229 11.3113 4.38062 11.2055 4.31666C11.0997 4.25271 10.9785 4.2189 10.8549 4.2189C10.7313 4.2189 10.6101 4.25271 10.5043 4.31666C10.3986 4.38062 10.3123 4.47229 10.2549 4.58174L0.267498 22.4803L13.7299 8.93421Z" />,
        webpack: <path xmlns="http://www.w3.org/2000/svg" d="M29.0779 25.5333L15.5922 33.1278V27.2131L23.9942 22.6111L29.0779 25.5333ZM30 24.7009V8.81752L25.0653 11.6541V21.863L30 24.7009ZM0.922058 25.5333L14.4078 33.1278V27.2131L6.0058 22.6097L0.922058 25.5319V25.5333ZM0 24.7009V8.81752L4.93466 11.6541V21.863L0 24.7009ZM0.576976 7.79056L14.4078 0V5.71869L5.54753 10.5733L5.47989 10.6119L0.576976 7.79056ZM29.423 7.79056L15.5922 0V5.71869L24.4525 10.5719L24.5201 10.6106L29.423 7.79056ZM14.4065 25.8673L6.1176 21.3302V12.3374L14.4065 17.1036V25.8673ZM15.5908 25.8673L23.8796 21.3302V12.3374L15.5908 17.1036V25.8673ZM6.6794 11.298L15.0028 6.74013L23.3234 11.2966L15.0014 16.0822L6.6794 11.298Z" />,
        github: <path xmlns="http://www.w3.org/2000/svg" d="M15.3794 0C6.88228 0 0 6.88228 0 15.3794C0 22.1848 4.40235 27.9328 10.5157 29.9706C11.2846 30.1052 11.573 29.6438 11.573 29.2401C11.573 28.8748 11.5538 27.6637 11.5538 26.3757C7.6897 27.087 6.69004 25.4337 6.38245 24.5686C6.20944 24.1264 5.45969 22.7615 4.80606 22.3963C4.26779 22.1079 3.49882 21.3966 4.78684 21.3774C5.99797 21.3582 6.86306 22.4924 7.15142 22.9538C8.53557 25.2799 10.7464 24.6263 11.6307 24.2226C11.7652 23.2229 12.169 22.5501 12.6111 22.1656C9.1892 21.7811 5.61348 20.4546 5.61348 14.572C5.61348 12.8995 6.20944 11.5153 7.18987 10.4388C7.03608 10.0543 6.4978 8.4779 7.34367 6.36323C7.34367 6.36323 8.63169 5.95952 11.573 7.93962C12.8034 7.59358 14.1106 7.42056 15.4179 7.42056C16.7251 7.42056 18.0324 7.59358 19.2627 7.93962C22.204 5.9403 23.492 6.36323 23.492 6.36323C24.3379 8.4779 23.7996 10.0543 23.6458 10.4388C24.6263 11.5153 25.2222 12.8803 25.2222 14.572C25.2222 20.4738 21.6273 21.7811 18.2054 22.1656C18.7629 22.6462 19.2435 23.5689 19.2435 25.0108C19.2435 27.0678 19.2243 28.721 19.2243 29.2401C19.2243 29.6438 19.5126 30.1244 20.2816 29.9706C23.3348 28.9402 25.988 26.9781 27.8675 24.3605C29.7471 21.743 30.7583 18.6019 30.7588 15.3794C30.7588 6.88228 23.8765 0 15.3794 0Z" />,
        git: <path xmlns="http://www.w3.org/2000/svg" d="M29.4386 13.662L16.3383 0.564676C15.975 0.203032 15.4832 0 14.9706 0C14.458 0 13.9663 0.203032 13.603 0.564676L10.8887 3.28197L14.3382 6.73298C14.7452 6.59546 15.1826 6.57474 15.6007 6.67318C16.0189 6.77161 16.4011 6.98526 16.704 7.28989C17.0069 7.59452 17.2184 7.97793 17.3145 8.39665C17.4105 8.81536 17.3874 9.25262 17.2475 9.65883L20.5695 12.9853C21.0613 12.8127 21.5972 12.8127 22.0891 12.9851C22.581 13.1576 22.9995 13.4923 23.2759 13.9342C23.5523 14.3761 23.6701 14.8989 23.6099 15.4166C23.5497 15.9344 23.3151 16.4162 22.9447 16.7829C22.0459 17.6832 20.595 17.6832 19.6947 16.7829C19.375 16.4628 19.1565 16.0556 19.0666 15.6122C18.9767 15.1687 19.0193 14.7086 19.1891 14.2892L16.0772 11.1938V19.3517C16.2963 19.4582 16.5063 19.6052 16.6879 19.7868C17.1169 20.2188 17.3576 20.8029 17.3576 21.4118C17.3576 22.0206 17.1169 22.6047 16.6879 23.0367C16.4738 23.2511 16.2196 23.4212 15.9397 23.5373C15.6599 23.6533 15.3599 23.7131 15.0569 23.7131C14.7539 23.7131 14.4539 23.6533 14.1741 23.5373C13.8942 23.4212 13.64 23.2511 13.4259 23.0367C13.2123 22.8238 13.0429 22.5707 12.9272 22.2921C12.8116 22.0136 12.7521 21.7149 12.7521 21.4133C12.7521 21.1116 12.8116 20.813 12.9272 20.5344C13.0429 20.2558 13.2123 20.0028 13.4259 19.7898C13.654 19.5647 13.9091 19.3937 14.1821 19.2811V11.0437C13.9016 10.9289 13.6466 10.7596 13.4319 10.5456C13.2172 10.3316 13.047 10.0771 12.9312 9.79699C12.8154 9.51683 12.7563 9.2165 12.7572 8.91336C12.7582 8.61022 12.8192 8.31027 12.9368 8.03085L9.54579 4.62336L0.562664 13.599C-0.187555 14.3552 -0.187555 15.5796 0.562664 16.3358L13.663 29.4331C13.8422 29.6128 14.0552 29.7554 14.2896 29.8526C14.524 29.9499 14.7753 30 15.0291 30C15.2829 30 15.5343 29.9499 15.7687 29.8526C16.0031 29.7554 16.216 29.6128 16.3953 29.4331L29.4341 16.3958C29.6147 16.217 29.7581 16.0043 29.8561 15.7699C29.9541 15.5354 30.0048 15.2839 30.0052 15.0298C30.0057 14.7757 29.9558 14.5241 29.8586 14.2893C29.7613 14.0546 29.6186 13.8414 29.4386 13.662Z" />,
        javascript: <path xmlns="http://www.w3.org/2000/svg" d="M0 0H30V30H0V0ZM27.5425 22.845C27.3238 21.4762 26.4325 20.3263 23.7887 19.2537C22.8687 18.8225 21.8462 18.5225 21.5425 17.8287C21.4287 17.4163 21.4112 17.1912 21.485 16.9475C21.6725 16.14 22.6287 15.8975 23.3787 16.1225C23.8662 16.2725 24.3163 16.6475 24.5988 17.2475C25.8913 16.4025 25.8913 16.4025 26.7925 15.8413C26.455 15.3163 26.2875 15.09 26.06 14.8662C25.2725 13.985 24.2237 13.535 22.5175 13.5738L21.6362 13.685C20.7913 13.8912 19.9862 14.3413 19.4988 14.9412C18.0737 16.555 18.485 19.3675 20.21 20.53C21.9162 21.805 24.4113 22.085 24.73 23.2862C25.03 24.7487 23.6425 25.2175 22.2725 25.0487C21.2588 24.8237 20.6975 24.3162 20.0788 23.3787L17.7913 24.6925C18.0537 25.2925 18.3538 25.5538 18.8038 26.0788C20.9788 28.2738 26.4163 28.1612 27.3925 24.8237C27.4287 24.7112 27.6925 23.9425 27.485 22.7612L27.5425 22.845ZM16.3137 13.7887H13.5038C13.5038 16.2113 13.4925 18.6188 13.4925 21.045C13.4925 22.585 13.5712 23.9988 13.32 24.4338C12.9075 25.295 11.845 25.185 11.3625 25.0338C10.8675 24.7887 10.6163 24.4513 10.325 23.965C10.2463 23.8338 10.1875 23.72 10.1663 23.72L7.885 25.1262C8.26625 25.9137 8.8225 26.5912 9.54 27.0225C10.6088 27.66 12.045 27.8663 13.5487 27.5288C14.5275 27.2463 15.3712 26.665 15.8125 25.765C16.45 24.6025 16.315 23.1775 16.3088 21.5825C16.3237 19.015 16.3088 16.4462 16.3088 13.8587L16.3137 13.7887Z" />,
        csharp: <path d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z" />,
        tailwind: <g transform="scale(0.6, 0.6)translate(0 8)"><path xmlns="http://www.w3.org/2000/svg" d="M16 12.8C18.133 4.267 23.467 0 32 0c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 32c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z" /></g>,

    };
    const icon = icons[id];
    return (
        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
            {icon}
        </svg>
    );
};

export default Icon;
