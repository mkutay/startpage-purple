import * as React from "react";
import { Icons } from "next/dist/lib/metadata/types/metadata-types";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const GithubSvg = (({ width, height}: { width: number, height: number }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className="dark:fill-[#cdd6f4] fill-[#4c4f69] hover:fill-[#1e66f5] hover:dark:fill-[#89b4fa]"
    >
      <path
        d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
      ></path>
    </svg>
  );
});

export const RssSvg = (({ width, height}: { width: number, height: number }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox={`-4 -4 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className="dark:fill-[#cdd6f4] fill-[#4c4f69] hover:fill-[#1e66f5] hover:dark:fill-[#89b4fa]"
    >
      <path d='M1.996 15.97a1.996 1.996 0 1 1 0-3.992 1.996 1.996 0 0 1 0 3.992zM1.12 7.977a.998.998 0 0 1-.247-1.98 8.103 8.103 0 0 1 9.108 8.04v.935a.998.998 0 1 1-1.996 0v-.934a6.108 6.108 0 0 0-6.865-6.06zM0 1.065A.998.998 0 0 1 .93.002C8.717-.517 15.448 5.374 15.967 13.16c.042.626.042 1.254 0 1.88a.998.998 0 1 1-1.992-.133c.036-.538.036-1.077 0-1.614C13.53 6.607 7.75 1.548 1.065 1.994A.998.998 0 0 1 0 1.064z'/>
    </svg>
  );
});

export const DarkLogo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="286 300 1400 1400"
    width={size || width}
    {...props}
  >
    <g clipPath="url(#ArtboardFrame)">
      <path d="M1949.61 48.7391L1949.61 1950.77L1293.66 1950.77L1293.66 48.7391L1949.61 48.7391Z" fill="none" opacity="1" stroke="#cba6f7" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="120"/>
      <path d="M678.17 48.7391L678.17 1950.77L50.2695 1950.77L50.2695 48.7391L678.17 48.7391Z" fill="none" opacity="1" stroke="#cba6f7" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="120"/>
        <path d="M999.997 1176.75L648.478 822.756" fill="none" opacity="1" stroke="#cba6f7" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M356.343 1169.82L714.94 822.99" fill="none" opacity="1" stroke="#cba6f7" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M971.827 823.375L1324.59 1176.14" fill="none" opacity="1" stroke="#cba6f7" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M1615.5 828.052L1258.13 1176.14" fill="none" opacity="1" stroke="#cba6f7" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
    </g>
  </svg>
);

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="286 300 1400 1400"
    width={size || width}
    {...props}
  >
    <g clipPath="url(#ArtboardFrame)">
      <path d="M1949.61 48.7391L1949.61 1950.77L1293.66 1950.77L1293.66 48.7391L1949.61 48.7391Z" fill="none" opacity="1" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="120"/>
      <path d="M678.17 48.7391L678.17 1950.77L50.2695 1950.77L50.2695 48.7391L678.17 48.7391Z" fill="none" opacity="1" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="120"/>
        <path d="M999.997 1176.75L648.478 822.756" fill="none" opacity="1" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M356.343 1169.82L714.94 822.99" fill="none" opacity="1" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M971.827 823.375L1324.59 1176.14" fill="none" opacity="1" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M1615.5 828.052L1258.13 1176.14" fill="none" opacity="1" stroke="currentColor" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
    </g>
  </svg>
);

export const LightLogo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="286 300 1400 1400"
    width={size || width}
    {...props}
  >
    <g clipPath="url(#ArtboardFrame)">
      <path d="M1949.61 48.7391L1949.61 1950.77L1293.66 1950.77L1293.66 48.7391L1949.61 48.7391Z" fill="none" opacity="1" stroke="#8839ef" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="120"/>
      <path d="M678.17 48.7391L678.17 1950.77L50.2695 1950.77L50.2695 48.7391L678.17 48.7391Z" fill="none" opacity="1" stroke="#8839ef" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="120"/>
        <path d="M999.997 1176.75L648.478 822.756" fill="none" opacity="1" stroke="#8839ef" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M356.343 1169.82L714.94 822.99" fill="none" opacity="1" stroke="#8839ef" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M971.827 823.375L1324.59 1176.14" fill="none" opacity="1" stroke="#8839ef" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
        <path d="M1615.5 828.052L1258.13 1176.14" fill="none" opacity="1" stroke="#8839ef" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="120"/>
    </g>
  </svg>
);

export const ChevronDownIcon: React.FC<IconSvgProps> = ({
  size = 16,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const RedditIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 -1.5 20 20"
      width={size || width}
      {...props}
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -7561.000000)" fill="currentColor">
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path d="M57.029,7412.24746 C56.267,7412.24746 55.628,7411.6217 55.628,7410.8499 C55.628,7410.07708 56.267,7409.43103 57.029,7409.43103 C57.79,7409.43103 58.407,7410.07708 58.407,7410.8499 C58.407,7411.6217 57.791,7412.24746 57.029,7412.24746 M57.223,7414.82961 C56.55,7415.51116 55.495,7415.8428 53.999,7415.8428 C52.502,7415.8428 51.448,7415.51116 50.776,7414.82961 C50.63,7414.68154 50.63,7414.44219 50.776,7414.2931 C50.921,7414.14503 51.158,7414.14503 51.304,7414.2931 C51.829,7414.82556 52.71,7415.08519 53.999,7415.08519 C55.287,7415.08519 56.169,7414.82556 56.695,7414.2931 C56.84,7414.14503 57.077,7414.14503 57.223,7414.2931 C57.369,7414.44219 57.369,7414.68154 57.223,7414.82961 M49.592,7410.8499 C49.592,7410.07809 50.23,7409.43103 50.991,7409.43103 C51.752,7409.43103 52.369,7410.07809 52.369,7410.8499 C52.369,7411.6217 51.752,7412.24746 50.991,7412.24746 C50.23,7412.24746 49.592,7411.6217 49.592,7410.8499 M64,7409.31339 C64,7408.04665 62.984,7407.01623 61.735,7407.01623 C61.159,7407.01623 60.616,7407.23428 60.2,7407.62475 C58.705,7406.63793 56.703,7406 54.486,7405.91278 L55.709,7402.12677 L58.921,7402.89351 C58.922,7403.93611 59.758,7404.78296 60.786,7404.78296 C61.814,7404.78296 62.651,7403.93408 62.651,7402.89148 C62.651,7401.84888 61.814,7401 60.786,7401 C60.016,7401 59.355,7401.47465 59.07,7402.15112 C58.378,7401.9858 55.904,7401.39452 55.212,7401.22921 L53.702,7405.90467 C51.401,7405.94828 49.316,7406.58316 47.765,7407.59331 C47.354,7407.22312 46.822,7407.01623 46.264,7407.01623 C45.016,7407.01623 44,7408.04665 44,7409.31339 C44,7410.11765 44.414,7410.85497 45.076,7411.26876 C44.473,7414.88134 48.67,7418 53.958,7418 C59.224,7418 63.407,7414.90872 62.849,7411.3144 C63.557,7410.91176 64,7410.1572 64,7409.31339"/>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const FacebookIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LinkedinIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <circle
        cx="4.983"
        cy="5.009"
        r="2.188"
        fill="currentColor"
      />
      <path
        d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
        fill="currentColor"
      />
    </svg>
  );
};

export const YoutubeIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 4 32 24"
      width={size || width}
      {...props}
    >
      <path 
        d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-0.354-1.301-1.354-2.307-2.625-2.663l-0.027-0.006c-3.193-0.406-6.886-0.638-10.634-0.638-0.381 0-0.761 0.002-1.14 0.007l0.058-0.001c-0.322-0.004-0.701-0.007-1.082-0.007-3.748 0-7.443 0.232-11.070 0.681l0.434-0.044c-1.297 0.363-2.297 1.368-2.644 2.643l-0.006 0.026c-0.4 2.109-0.628 4.536-0.628 7.016 0 0.088 0 0.176 0.001 0.263l-0-0.014c-0 0.074-0.001 0.162-0.001 0.25 0 2.48 0.229 4.906 0.666 7.259l-0.038-0.244c0.354 1.301 1.354 2.307 2.625 2.663l0.027 0.006c3.193 0.406 6.886 0.638 10.634 0.638 0.38 0 0.76-0.002 1.14-0.007l-0.058 0.001c0.322 0.004 0.702 0.007 1.082 0.007 3.749 0 7.443-0.232 11.070-0.681l-0.434 0.044c1.298-0.362 2.298-1.368 2.646-2.643l0.006-0.026c0.399-2.109 0.627-4.536 0.627-7.015 0-0.088-0-0.176-0.001-0.263l0 0.013c0-0.074 0.001-0.162 0.001-0.25 0-2.48-0.229-4.906-0.666-7.259l0.038 0.244z"
        fill="currentColor"
      />
    </svg>
  );
};

export const InstagramIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        fill="currentColor"
      />
      <path
        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);