import React from 'react';

const Icon = ({ name }) => {
  switch (name) {
    case 'logo':
      return (
        <svg
          width="147"
          height="40"
          viewBox="0 0 147 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M67.46 31H63.29L62.96 22.51C62.84 20.35 62.78 18.25 62.78 16.21C62.78 15.25 62.79 14.55 62.81 14.11L59.81 28.78H55.73L52.58 14.08C52.64 15.34 52.67 16.58 52.67 17.8C52.67 18.82 52.63 20.43 52.55 22.63L52.22 31H48.08L49.52 10.24H54.95L57.86 24.61L60.53 10.24H66.02L67.46 31ZM81.5832 26.8C81.5832 27.36 81.6532 27.77 81.7932 28.03C81.9532 28.29 82.2132 28.5 82.5732 28.66L81.7032 31.42C80.8232 31.32 80.1032 31.1 79.5432 30.76C79.0032 30.42 78.5832 29.89 78.2832 29.17C77.3032 30.71 75.8732 31.48 73.9932 31.48C72.5732 31.48 71.4332 31.03 70.5732 30.13C69.7332 29.21 69.3132 28.02 69.3132 26.56C69.3132 24.84 69.8932 23.52 71.0532 22.6C72.2132 21.68 73.8832 21.22 76.0632 21.22H77.4732V20.32C77.4732 19.34 77.2832 18.66 76.9032 18.28C76.5432 17.88 75.9332 17.68 75.0732 17.68C74.0332 17.68 72.7632 17.96 71.2632 18.52L70.3332 15.79C71.2132 15.41 72.1232 15.12 73.0632 14.92C74.0232 14.72 74.9232 14.62 75.7632 14.62C77.7432 14.62 79.2032 15.08 80.1432 16C81.1032 16.92 81.5832 18.29 81.5832 20.11V26.8ZM75.1932 28.48C76.1732 28.48 76.9332 27.9 77.4732 26.74V23.59H76.4832C75.4632 23.59 74.7032 23.81 74.2032 24.25C73.7032 24.67 73.4532 25.32 73.4532 26.2C73.4532 26.94 73.6032 27.51 73.9032 27.91C74.2032 28.29 74.6332 28.48 75.1932 28.48ZM91.156 9.76C92.516 9.76 93.706 9.98 94.726 10.42C95.766 10.86 96.716 11.51 97.576 12.37L95.566 14.68C94.906 14.1 94.246 13.68 93.586 13.42C92.926 13.14 92.236 13 91.516 13C90.696 13 90.046 13.21 89.566 13.63C89.106 14.03 88.876 14.59 88.876 15.31C88.876 15.79 88.976 16.2 89.176 16.54C89.396 16.86 89.766 17.17 90.286 17.47C90.806 17.77 91.566 18.1 92.566 18.46C93.806 18.92 94.816 19.42 95.596 19.96C96.396 20.5 97.006 21.18 97.426 22C97.866 22.82 98.086 23.83 98.086 25.03C98.086 26.27 97.786 27.38 97.186 28.36C96.606 29.32 95.756 30.08 94.636 30.64C93.516 31.2 92.206 31.48 90.706 31.48C87.886 31.48 85.536 30.52 83.656 28.6L85.816 26.2C86.576 26.86 87.326 27.36 88.066 27.7C88.826 28.04 89.636 28.21 90.496 28.21C91.476 28.21 92.236 27.95 92.776 27.43C93.316 26.91 93.586 26.2 93.586 25.3C93.586 24.5 93.336 23.86 92.836 23.38C92.356 22.88 91.456 22.39 90.136 21.91C88.096 21.15 86.636 20.29 85.756 19.33C84.876 18.37 84.436 17.13 84.436 15.61C84.436 14.47 84.726 13.46 85.306 12.58C85.886 11.68 86.686 10.99 87.706 10.51C88.726 10.01 89.876 9.76 91.156 9.76ZM108.847 14.62C110.087 14.62 111.067 15.04 111.787 15.88C112.507 16.72 112.867 17.85 112.867 19.27V31H108.697V19.84C108.697 19.1 108.577 18.57 108.337 18.25C108.117 17.93 107.777 17.77 107.317 17.77C106.437 17.77 105.577 18.5 104.737 19.96V31H100.567V8.77L104.737 8.35V16.93C105.317 16.15 105.937 15.57 106.597 15.19C107.257 14.81 108.007 14.62 108.847 14.62ZM122.539 14.62C124.719 14.62 126.419 15.35 127.639 16.81C128.879 18.25 129.499 20.33 129.499 23.05C129.499 25.67 128.879 27.73 127.639 29.23C126.399 30.73 124.689 31.48 122.509 31.48C120.329 31.48 118.619 30.75 117.379 29.29C116.159 27.83 115.549 25.75 115.549 23.05C115.549 20.39 116.159 18.32 117.379 16.84C118.619 15.36 120.339 14.62 122.539 14.62ZM122.539 17.74C121.639 17.74 120.969 18.16 120.529 19C120.089 19.84 119.869 21.19 119.869 23.05C119.869 24.95 120.079 26.31 120.499 27.13C120.939 27.95 121.609 28.36 122.509 28.36C123.409 28.36 124.079 27.94 124.519 27.1C124.959 26.26 125.179 24.91 125.179 23.05C125.179 21.17 124.959 19.82 124.519 19C124.099 18.16 123.439 17.74 122.539 17.74ZM140.365 14.62C142.125 14.62 143.445 15.35 144.325 16.81C145.225 18.25 145.675 20.32 145.675 23.02C145.675 24.7 145.445 26.18 144.985 27.46C144.525 28.72 143.865 29.71 143.005 30.43C142.145 31.13 141.135 31.48 139.975 31.48C138.535 31.48 137.365 30.92 136.465 29.8V37.12L132.295 37.57V15.1H135.985L136.195 16.93C137.275 15.39 138.665 14.62 140.365 14.62ZM138.775 28.36C140.495 28.36 141.355 26.59 141.355 23.05C141.355 21.09 141.155 19.72 140.755 18.94C140.375 18.14 139.805 17.74 139.045 17.74C138.045 17.74 137.185 18.39 136.465 19.69V26.89C137.105 27.87 137.875 28.36 138.775 28.36Z"
            fill="#2E2E2E"
          />
          <path
            d="M29.5724 14.2078C31.0924 14.2078 32.4971 13.7324 33.6395 12.9286C33.6418 12.9344 33.6432 12.9379 33.6432 12.9379C34.0597 15.7612 32.2652 18.4625 29.442 19.2661C29.442 19.2661 29.324 19.1699 29.1201 19.002C28.6408 18.0619 28.2136 17.0952 27.8412 16.1058L26.9367 13.7032L26.9273 13.6991C27.7424 14.0259 28.6352 14.2078 29.5724 14.2078Z"
            fill="#C40000"
          />
          <path
            d="M13.3794 27.2964H20.6281L14.6555 21.5105L19.6579 17.2819L25.3847 22.8297L23.4351 16.2275L26.9366 13.7031L27.8411 16.1056C29.3318 20.0653 31.6983 23.6611 34.7747 26.6414L38.6762 30.421C39.3676 31.0908 39.3676 32.1767 38.6762 32.8465L32.6167 38.7166C31.9254 39.3864 30.8044 39.3864 30.1129 38.7166L27.9517 36.623C24.357 33.1406 19.6804 30.8993 14.642 30.2441L13.3794 27.2964Z"
            fill="#E56F54"
          />
          <path
            d="M4.13626 25.068C2.19133 24.3618 0.806641 22.545 0.806641 20.4143C0.806641 18.5868 1.82576 16.9907 3.34279 16.1277C2.25625 14.5858 1.6206 12.7221 1.6206 10.7142C1.6206 5.4047 6.06369 1.10039 11.5446 1.10039C13.5398 1.10039 15.3971 1.67125 16.953 2.65282C17.7579 1.5225 19.1034 0.78125 20.6282 0.78125C22.2764 0.78125 23.7149 1.6475 24.4877 2.935C25.7535 1.61094 27.5626 0.78125 29.5724 0.78125C33.3996 0.78125 36.5021 3.78688 36.5021 7.49447C36.5021 11.2021 33.3996 14.2077 29.5724 14.2077C28.4601 14.2077 27.41 13.9524 26.4785 13.5013C25.2491 15.3744 23.0892 16.6183 20.6282 16.6183C20.2278 16.6183 19.8361 16.5836 19.4542 16.5204C18.6151 17.5915 17.5497 18.4868 16.3267 19.1397C16.5434 19.7901 16.6618 20.4832 16.6618 21.2035C16.6618 23.6143 15.3492 25.7273 13.3794 26.9112C14.1885 28.0096 14.666 29.3529 14.666 30.8051C14.666 34.5127 11.5635 37.5184 7.73629 37.5184C3.90908 37.5184 0.806561 34.5128 0.806561 30.8051C0.806641 28.3747 2.13979 26.2462 4.13626 25.068Z"
            fill="#C40000"
          />
          <path
            d="M2.61889 25.1811C1.01267 24.1265 8.01086e-05 22.3423 8.01086e-05 20.4143C8.01086e-05 18.6546 0.844925 16.992 2.24889 15.9097C1.30791 14.3342 0.814037 12.5535 0.814037 10.7142C0.814037 4.98235 5.6277 0.319063 11.5445 0.319063C13.3842 0.319063 15.1752 0.771095 16.7671 1.63196C17.7571 0.599376 19.1529 0 20.6281 0C22.1605 0 23.61 0.654611 24.6013 1.7543C25.9865 0.63047 27.7515 0 29.5724 0C33.8381 0 37.3087 3.36196 37.3087 7.49447C37.3087 9.81932 36.2103 11.9003 34.4898 13.276C34.5951 14.6807 34.2286 16.0877 33.4357 17.2818C32.7065 18.38 31.6587 19.2348 30.435 19.7461C31.7563 22.0705 33.4156 24.2198 35.3449 26.0889L39.2465 29.8684C40.2512 30.8418 40.2512 32.4254 39.2465 33.3987L33.1869 39.2689C32.7002 39.7404 32.053 40 31.3647 40C30.6765 40 30.0293 39.7404 29.5426 39.2689L27.3814 37.1752C24.1537 34.0484 19.9516 31.9332 15.4637 31.159C15.2721 35.1277 11.8795 38.2994 7.73626 38.2994C3.47042 38.2994 0 34.9375 0 30.805C0.000160217 28.6141 0.959362 26.5907 2.61889 25.1811ZM32.8645 14.2754C31.865 14.7327 30.7491 14.9889 29.5724 14.9889C29.1196 14.9889 28.6742 14.9503 28.2369 14.8765L28.5988 15.8379C28.9204 16.6919 29.2866 17.5318 29.6942 18.3535C31.4505 17.6617 32.6617 16.0692 32.8645 14.2754ZM28.5221 36.0704L30.6833 38.1641C31.0591 38.528 31.6706 38.5282 32.0464 38.1641L36.3307 34.0137L32.2592 30.0693C31.9443 29.7642 31.9443 29.2695 32.2592 28.9644C32.5742 28.6594 33.0847 28.6594 33.3998 28.9644L37.4713 32.9087L38.106 32.2939C38.4818 31.9298 38.4818 31.3374 38.106 30.9733L34.2044 27.1938C31.0665 24.1538 28.6042 20.4121 27.0836 16.3732L26.4895 14.7953C25.8792 15.484 25.1532 16.0516 24.3483 16.4794L26.1602 22.6147C26.2613 22.957 26.1107 23.3222 25.794 23.5029C25.6666 23.5754 25.5253 23.6108 25.3851 23.6108C25.1765 23.6108 24.9701 23.5325 24.8146 23.382L19.2286 17.9707C18.6402 18.5564 17.9849 19.0707 17.2683 19.5082C17.4012 20.063 17.4683 20.6308 17.4683 21.2032C17.4683 21.794 17.398 22.373 17.263 22.9314L21.1985 26.7438C21.429 26.9672 21.4981 27.3033 21.3733 27.5952C21.2485 27.8871 20.9544 28.0775 20.6282 28.0775H16.6937C16.2484 28.0775 15.8873 27.7276 15.8873 27.2962C15.8873 26.8648 16.2484 26.515 16.6937 26.515H18.6813L16.6578 24.5547C16.1462 25.5476 15.406 26.4267 14.4752 27.1242C14.9183 27.8821 15.218 28.7033 15.3658 29.5588C17.9189 29.9577 20.3917 30.761 22.6749 31.9173C22.7556 31.5561 22.941 31.2242 23.2173 30.9566L24.2007 30.0039C24.5803 29.6362 25.0849 29.4337 25.6216 29.4337C26.1582 29.4337 26.6628 29.6362 27.0424 30.0039L29.3779 32.2664C29.6929 32.5715 29.6929 33.0662 29.3779 33.3713C29.063 33.6763 28.5525 33.6764 28.2374 33.3713L25.9018 31.1088C25.8007 31.0109 25.6828 30.9963 25.6215 30.9963C25.5601 30.9963 25.4422 31.011 25.3411 31.1088L24.3577 32.0615C24.2031 32.2112 24.2031 32.4549 24.3577 32.6047L24.9433 33.1721C24.9806 33.2082 25.0132 33.2472 25.0416 33.288C26.2866 34.1056 27.4543 35.036 28.5221 36.0704ZM22.8499 17.0865C22.2287 17.266 21.5792 17.3704 20.9141 17.3939L23.7528 20.1439L22.8499 17.0865ZM7.86247 36.7358C11.1352 36.6716 13.8031 34.0791 13.8587 30.9085C13.8811 29.6365 13.4911 28.4146 12.7343 27.3804C12.6623 27.282 12.6073 27.1715 12.5857 27.0528C12.5259 26.7245 12.6803 26.4118 12.9543 26.2473C14.2374 25.4761 15.1547 24.3085 15.5831 22.9611C15.5883 22.9421 15.5945 22.9233 15.6012 22.9047C15.7678 22.3615 15.8554 21.7897 15.8554 21.2034C15.8554 20.5871 15.757 19.9775 15.5632 19.3915C15.4441 19.0318 15.596 18.6377 15.9375 18.4553C17.0488 17.8621 18.0428 17.0297 18.8118 16.048C18.9658 15.8514 19.2046 15.7391 19.4542 15.7391C19.4992 15.7391 19.5447 15.7428 19.5901 15.7503C19.9379 15.8078 20.2872 15.837 20.6281 15.837C22.7331 15.837 24.6657 14.8071 25.7979 13.082C26.0197 12.744 26.4692 12.6234 26.8391 12.8024C27.694 13.2164 28.6135 13.4264 29.5724 13.4264C32.9488 13.4264 35.6957 10.7653 35.6957 7.49439C35.6957 4.22352 32.9488 1.5625 29.5724 1.5625C27.8999 1.5625 26.2869 2.23477 25.1338 3.40969C25.08 3.46266 25.0232 3.51391 24.9724 3.56962C23.987 4.6497 23.4431 6.03001 23.4386 7.47619C23.4372 7.90072 23.0927 8.26384 22.6546 8.27541C22.1989 8.28744 21.8256 7.93314 21.8256 7.49447C21.8256 5.80907 22.4055 4.19298 23.4682 2.87868C22.7795 2.0568 21.7356 1.5625 20.6281 1.5625C19.4266 1.5625 18.3009 2.13594 17.6167 3.09649C17.3685 3.44493 16.8791 3.53868 16.5129 3.30751C14.9275 2.30727 13.0669 1.81274 11.1598 1.88938C6.31512 2.08414 2.44808 5.97798 2.42711 10.6753C2.41913 12.4576 2.9572 14.176 3.98108 15.6462C4.00874 15.6739 4.03519 15.7033 4.05898 15.7357C5.78053 18.0819 8.51893 19.5048 11.3897 19.5464C11.8175 19.5526 12.1894 19.8627 12.2168 20.2763C12.2469 20.7325 11.874 21.1093 11.4122 21.1093C11.4091 21.1093 11.406 21.1093 11.4029 21.1092C8.23925 21.0745 5.21439 19.6221 3.1776 17.192C2.19905 17.9811 1.61299 19.1641 1.61299 20.4143C1.61299 22.1508 2.74066 23.7269 4.41922 24.3364C4.70818 24.4414 4.91003 24.6968 4.93907 24.9944C4.96802 25.2921 4.81931 25.5796 4.55576 25.7351C2.713 26.8226 1.61299 28.7179 1.61299 30.8051C1.61308 34.1166 4.42866 36.803 7.86247 36.7358Z"
            fill="#2E2E2E"
          />
          <path
            d="M11.5445 5.64075L11.5187 5.64083C11.5167 5.64083 11.5146 5.64083 11.5126 5.64083C11.0701 5.64083 10.7096 5.29482 10.7063 4.86536C10.703 4.43395 11.0614 4.08153 11.5068 4.07833L11.5446 4.07825C11.9899 4.07825 12.3511 4.42809 12.3511 4.8595C12.3511 5.29091 11.9899 5.64075 11.5445 5.64075Z"
            fill="#2E2E2E"
          />
          <path
            d="M8.86892 6.35218C7.28907 7.26375 6.30761 8.93523 6.30761 10.7143C6.30761 11.1457 5.94648 11.4956 5.50116 11.4956C5.05583 11.4956 4.6947 11.1457 4.6947 10.7143C4.6947 8.3875 5.97785 6.20164 8.04351 5.00968C8.42601 4.78905 8.92118 4.91054 9.14908 5.28116C9.37707 5.65187 9.25158 6.13132 8.86892 6.35218Z"
            fill="#2E2E2E"
          />
          <path
            d="M30.5919 26.5671C30.804 26.5671 31.0121 26.6507 31.1621 26.7961C31.312 26.9413 31.3984 27.1429 31.3984 27.3491C31.3984 27.5547 31.3121 27.7563 31.1621 27.9015C31.0121 28.0468 30.804 28.1296 30.5919 28.1296C30.379 28.1296 30.1718 28.0468 30.0218 27.9015C29.871 27.7554 29.7855 27.5547 29.7855 27.3491C29.7855 27.1429 29.871 26.9421 30.0218 26.7961C30.1718 26.6507 30.379 26.5671 30.5919 26.5671Z"
            fill="#2E2E2E"
          />
        </svg>
      );
    case 'close':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.38461 18L0 16.6154L7.61538 9L0 1.38461L1.38461 0L9 7.61538L16.6154 0L18 1.38461L10.3846 9L18 16.6154L16.6154 18L9 10.3846L1.38461 18Z" />
        </svg>
      );
    case 'cart':
      return (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.29326 4.49994C6.29326 3.00879 7.5052 1.79998 9.0002 1.79998C10.4952 1.79998 11.7071 3.00879 11.7071 4.49994H13.5118C13.5118 2.01469 11.4919 0 9.0002 0C6.50853 0 4.48864 2.01469 4.48864 4.49994H6.29326Z"
            fill="white"
          />
          <path
            d="M1.75841 5.19779L0 5.60253L2.86834 18H15.1317L18 5.60253L16.2416 5.19779L13.6961 16.2H4.30394L1.75841 5.19779Z"
            fill="white"
          />
        </svg>
      );
    case 'sort-open':
      return (
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6.56298L0 0.562981H12L6 6.56298Z" fill="#424242" />
        </svg>
      );
    case 'sort-close':
      return (
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 6L6 0L12 6H0Z" fill="#424242" />
        </svg>
      );
    case 'arrow-left':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M6.78873 14L0 7L6.78873 0L8 1.24896L2.42253 7L8 12.751L6.78873 14Z" />
        </svg>
      );
    case 'arrow-right':
      return (
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1.21127 14L0 12.751L5.57747 7L0 1.24896L1.21127 0L8 7L1.21127 14Z" />
        </svg>
      );
    case 'delete-all':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M3.7875 24C3.1875 24 2.6625 23.8 2.2125 23.4C1.7625 23 1.5375 22.5333 1.5375 22V3H0V1H7.05V0H16.95V1H24V3H22.4625V22C22.4625 22.5333 22.2375 23 21.7875 23.4C21.3375 23.8 20.8125 24 20.2125 24H3.7875ZM20.2125 3H3.7875V22H20.2125V3ZM7.7625 19.1333H10.0125V5.83333H7.7625V19.1333ZM13.9875 19.1333H16.2375V5.83333H13.9875V19.1333ZM3.7875 3V22V3Z" />
        </svg>
      );
    case 'delete-single':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5 17.76L12 13.26L16.5 17.76L17.76 16.5L13.26 12L17.76 7.5L16.5 6.24L12 10.74L7.5 6.24L6.24 7.5L10.74 12L6.24 16.5L7.5 17.76ZM12 24C10.36 24 8.81 23.685 7.35 23.055C5.89 22.425 4.615 21.565 3.525 20.475C2.435 19.385 1.575 18.11 0.945 16.65C0.315 15.19 0 13.64 0 12C0 10.34 0.315 8.78 0.945 7.32C1.575 5.86 2.435 4.59 3.525 3.51C4.615 2.43 5.89 1.575 7.35 0.945C8.81 0.315 10.36 0 12 0C13.66 0 15.22 0.315 16.68 0.945C18.14 1.575 19.41 2.43 20.49 3.51C21.57 4.59 22.425 5.86 23.055 7.32C23.685 8.78 24 10.34 24 12C24 13.64 23.685 15.19 23.055 16.65C22.425 18.11 21.57 19.385 20.49 20.475C19.41 21.565 18.14 22.425 16.68 23.055C15.22 23.685 13.66 24 12 24ZM12 22.2C14.84 22.2 17.25 21.205 19.23 19.215C21.21 17.225 22.2 14.82 22.2 12C22.2 9.16 21.21 6.75 19.23 4.77C17.25 2.79 14.84 1.8 12 1.8C9.18 1.8 6.775 2.79 4.785 4.77C2.795 6.75 1.8 9.16 1.8 12C1.8 14.82 2.795 17.225 4.785 19.215C6.775 21.205 9.18 22.2 12 22.2Z" />
        </svg>
      );
    case 'plus':
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M7.14286 16V8.85714H0V7.14286H7.14286V0H8.85714V7.14286H16V8.85714H8.85714V16H7.14286Z" />
        </svg>
      );
    case 'minus':
      return (
        <svg
          width="16"
          height="2"
          viewBox="0 0 16 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 2V0H16V2H0Z" />
        </svg>
      );
    case 'arrow-back':
      return (
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M6.14035 12L0 6L6.14035 0L7 0.855L1.73465 6L7 11.145L6.14035 12Z" />
        </svg>
      );
    case 'empty-cart':
      return (
        <svg
          width="166"
          height="200"
          viewBox="0 0 166 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.8333 200C10.1444 200 6.91667 198.571 4.15 195.714C1.38333 192.857 0 189.524 0 185.714V59.5238C0 55.7143 1.38333 52.381 4.15 49.5238C6.91667 46.6667 10.1444 45.2381 13.8333 45.2381H39.1944C39.1944 32.6984 43.2676 22.0238 51.4139 13.2143C59.5602 4.40476 69.7046 0 81.8472 0C93.9898 0 104.519 4.40476 113.433 13.2143C122.348 22.0238 126.806 32.6984 126.806 45.2381H152.167C155.856 45.2381 159.083 46.6667 161.85 49.5238C164.617 52.381 166 55.7143 166 59.5238V185.714C166 189.524 164.617 192.857 161.85 195.714C159.083 198.571 155.856 200 152.167 200H13.8333ZM13.8333 185.714H152.167V59.5238H13.8333V185.714ZM83 116.667C95.1426 116.667 105.671 112.063 114.586 102.857C123.501 93.6508 127.958 82.7778 127.958 70.2381H114.125C114.125 78.9683 111.051 86.5079 104.903 92.8571C98.7546 99.2063 91.4537 102.381 83 102.381C74.5463 102.381 67.2454 99.2063 61.0972 92.8571C54.9491 86.5079 51.875 78.9683 51.875 70.2381H38.0417C38.0417 82.7778 42.4991 93.6508 51.4139 102.857C60.3287 112.063 70.8574 116.667 83 116.667ZM53.0278 45.2381H112.972C112.972 36.5079 110.09 29.1667 104.326 23.2143C98.5625 17.2619 91.4537 14.2857 83 14.2857C74.5463 14.2857 67.4375 17.2619 61.6736 23.2143C55.9097 29.1667 53.0278 36.5079 53.0278 45.2381ZM13.8333 185.714V59.5238V185.714Z"
            fill="#424242"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

export default Icon;
