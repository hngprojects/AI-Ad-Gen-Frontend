import { JSX, SVGProps } from "react";

const Layout = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.423 15.083q-.63 0-1.069-.438a1.45 1.45 0 0 1-.437-1.069V2.422q0-.63.437-1.068a1.45 1.45 0 0 1 1.07-.438h11.153q.63 0 1.069.438.438.437.437 1.068v11.154q0 .631-.437 1.07a1.45 1.45 0 0 1-1.069.437zm0-1.25h4.952V2.166H2.423a.25.25 0 0 0-.176.08.25.25 0 0 0-.08.176v11.154q0 .096.08.176t.176.08m6.202 0h4.952a.25.25 0 0 0 .176-.08.25.25 0 0 0 .08-.177V8H8.625zm0-7.084h5.208V2.422a.25.25 0 0 0-.08-.176.25.25 0 0 0-.176-.08H8.625z"
      fill="currentColor"
    />
  </svg>
);

const Home = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 13.833h2.5V9.666q0-.354.24-.594t.593-.24h3.334q.354 0 .593.24.24.24.24.594v4.167H12v-7.5l-5-3.75-5 3.75zm-1.667 0v-7.5A1.66 1.66 0 0 1 1 4.999l5-3.75a1.6 1.6 0 0 1 1-.333q.562 0 1 .333L13 5q.312.23.49.584.177.354.177.75v7.5q0 .687-.49 1.177T12 15.5H8.667a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.594v-4.167H6.167v4.167q0 .354-.24.594a.8.8 0 0 1-.594.24H2q-.687 0-1.177-.49a1.6 1.6 0 0 1-.49-1.177"
      fill="currentColor"
    />
  </svg>
);

const Plus = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 15.5a.8.8 0 0 1-.594-.24.8.8 0 0 1-.24-.593V8.833H1.334a.8.8 0 0 1-.593-.24A.8.8 0 0 1 .5 8q0-.354.24-.594t.593-.24h5.834V1.334q0-.354.24-.593Q7.645.5 8 .5t.594.24.24.593v5.834h5.833q.354 0 .593.24.24.239.24.593t-.24.594a.8.8 0 0 1-.593.24H8.833v5.833q0 .354-.24.593A.8.8 0 0 1 8 15.5"
      fill="currentColor"
    />
  </svg>
);

const StarFall = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2768 16.5168C10.2815 16.407 10.4634 16.3633 10.5174 16.4591C10.7707 16.9088 11.2029 17.5702 11.6932 17.8709C12.1836 18.1716 12.969 18.2569 13.4847 18.2788C13.5945 18.2835 13.6381 18.4654 13.5423 18.5194C13.0926 18.7727 12.4313 19.2049 12.1306 19.6952C11.8299 20.1856 11.7446 20.971 11.7227 21.4867C11.718 21.5965 11.536 21.6401 11.4821 21.5443C11.2287 21.0946 10.7966 20.4333 10.3062 20.1326C9.81588 19.8319 9.03048 19.7466 8.51481 19.7247C8.40495 19.72 8.36133 19.538 8.45713 19.4841C8.90682 19.2307 9.56818 18.7986 9.86889 18.3082C10.1696 17.8179 10.2549 17.0325 10.2768 16.5168Z"
      fill="#520052"
    />
    <path
      opacity="0.5"
      d="M18.4919 15.5186C18.4834 15.409 18.2916 15.363 18.2343 15.4569C18.062 15.7394 17.8135 16.0803 17.5374 16.2497C17.2612 16.4191 16.8446 16.4859 16.5147 16.5114C16.4051 16.5199 16.3591 16.7117 16.453 16.769C16.7355 16.9413 17.0764 17.1897 17.2458 17.4659C17.4152 17.7421 17.482 18.1587 17.5075 18.4886C17.516 18.5982 17.7078 18.6442 17.7651 18.5503C17.9374 18.2678 18.1858 17.9269 18.462 17.7575C18.7382 17.5881 19.1548 17.5213 19.4847 17.4958C19.5943 17.4873 19.6403 17.2955 19.5464 17.2382C19.2639 17.0659 18.923 16.8174 18.7536 16.5413C18.5842 16.2651 18.5174 15.8485 18.4919 15.5186Z"
      fill="#520052"
    />
    <path
      d="M14.7034 4.00181L14.4611 3.69574C13.5245 2.51266 13.0561 1.92112 12.5113 2.00845C11.9665 2.09577 11.7059 2.80412 11.1849 4.22083L11.0501 4.58735C10.902 4.98993 10.828 5.19122 10.686 5.33897C10.544 5.48671 10.3501 5.56417 9.96242 5.71911L9.60942 5.86016L9.36156 5.95933C8.16204 6.4406 7.55761 6.71331 7.48044 7.24324C7.39813 7.80849 7.97023 8.29205 9.11443 9.25915L9.41045 9.50935C9.7356 9.78417 9.89817 9.92158 9.99137 10.1089C10.0846 10.2962 10.0978 10.5121 10.1244 10.9441L10.1485 11.3373C10.2419 12.8574 10.2886 13.6174 10.7826 13.8794C11.2765 14.1414 11.8906 13.7319 13.1188 12.9129L13.4366 12.701C13.7856 12.4683 13.9601 12.3519 14.1597 12.32C14.3593 12.288 14.5613 12.344 14.9655 12.456L15.3334 12.558C16.7555 12.9522 17.4666 13.1493 17.8542 12.746C18.2418 12.3427 18.0493 11.6061 17.6641 10.1328L17.5645 9.75163C17.4551 9.33297 17.4003 9.12364 17.4305 8.91657C17.4606 8.70951 17.5723 8.52816 17.7955 8.16546L17.9987 7.83522C18.7843 6.55883 19.1771 5.92063 18.9227 5.40935C18.6682 4.89806 17.9351 4.85229 16.4689 4.76076L16.0896 4.73708C15.6729 4.71107 15.4646 4.69807 15.2836 4.60208C15.1027 4.5061 14.9696 4.338 14.7034 4.00181Z"
      fill="#520052"
    />
    <path
      opacity="0.5"
      d="M8.835 13.3221C6.69772 14.3663 4.91931 16.0201 4.24844 17.9963C3.49589 13.2887 4.53976 10.2487 6.21308 8.35938C6.35728 8.65409 6.54466 8.8981 6.71297 9.08879C7.06286 9.48521 7.56518 9.90957 8.07523 10.3405L8.44225 10.6506C8.51184 10.7095 8.56597 10.7553 8.61197 10.795C8.61665 10.8593 8.62129 10.9344 8.62727 11.0318L8.65708 11.5173C8.69717 12.1722 8.7363 12.8116 8.835 13.3221Z"
      fill="#520052"
    />
  </svg>
);

const History = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.984 15.083q-2.513 0-4.43-1.534A6.8 6.8 0 0 1 .099 9.624a.52.52 0 0 1 .08-.456.58.58 0 0 1 .42-.242.65.65 0 0 1 .459.1q.203.135.283.396a5.65 5.65 0 0 0 2.05 3.171 5.65 5.65 0 0 0 3.594 1.24q2.437 0 4.135-1.698t1.698-4.136-1.698-4.135-4.135-1.698a5.6 5.6 0 0 0-2.56.607 6.3 6.3 0 0 0-2.056 1.669h1.555q.266 0 .445.18.18.18.18.445t-.18.445a.6.6 0 0 1-.445.18H1.071a.73.73 0 0 1-.537-.217.73.73 0 0 1-.217-.537V2.086q0-.266.18-.445.18-.18.446-.18.265 0 .445.18t.18.445v1.35a7.1 7.1 0 0 1 2.429-1.859A7 7 0 0 1 6.984.916q1.475 0 2.763.558a7.2 7.2 0 0 1 2.246 1.516 7.2 7.2 0 0 1 1.516 2.246q.558 1.289.558 2.763a6.9 6.9 0 0 1-.558 2.763 7.2 7.2 0 0 1-1.516 2.247 7.2 7.2 0 0 1-2.246 1.516 6.9 6.9 0 0 1-2.763.558m.649-7.337 2.292 2.292q.172.172.177.435a.6.6 0 0 1-.177.443.6.6 0 0 1-.44.181.6.6 0 0 1-.439-.181L6.61 8.479a.75.75 0 0 1-.226-.54V4.458q0-.266.18-.446t.445-.18.445.18.18.446z"
      fill="currentColor"
    />
  </svg>
);

const Toggle = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.423 15.083q-.63 0-1.069-.438a1.45 1.45 0 0 1-.437-1.069V2.422q0-.63.437-1.068a1.45 1.45 0 0 1 1.07-.438h11.153q.63 0 1.069.438.438.437.437 1.068v11.154q0 .631-.437 1.07a1.45 1.45 0 0 1-1.069.437zM8 13.833h5.577a.25.25 0 0 0 .176-.08.25.25 0 0 0 .08-.177V2.422a.25.25 0 0 0-.08-.176.25.25 0 0 0-.176-.08H8z"
      fill="#667185"
    />
  </svg>
);

const Lens = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13 13-2.333-2.333m1.666-4A5.667 5.667 0 1 1 1 6.667a5.667 5.667 0 0 1 11.333 0"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Arrowdown = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={14}
    height={8}
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L7 7L13 1"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Gear = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.077 15.917q-.426 0-.736-.283a1.17 1.17 0 0 1-.378-.696l-.203-1.56a4.4 4.4 0 0 1-1.316-.747L3 13.247a1.04 1.04 0 0 1-.79.033 1.14 1.14 0 0 1-.615-.506l-.94-1.628a1.02 1.02 0 0 1-.126-.777q.093-.41.426-.675l1.249-.938a4 4 0 0 1-.041-.373 6 6 0 0 1 0-.735q.012-.183.04-.401L.956 6.308a1.16 1.16 0 0 1-.422-.68 1.04 1.04 0 0 1 .13-.78l.932-1.604q.219-.36.616-.502.396-.144.789.03l1.436.605a5 5 0 0 1 .643-.436q.343-.198.673-.318l.211-1.56Q6.03.65 6.341.367q.31-.283.736-.283h1.846q.427 0 .736.283.31.282.378.696l.203 1.567q.376.136.679.319.303.181.613.428l1.476-.606q.393-.173.79-.03.397.144.615.503l.932 1.612q.219.368.126.777a1.18 1.18 0 0 1-.426.675l-1.28.962q.045.201.048.377t.004.354q0 .17-.008.345t-.057.402l1.256.945q.333.265.43.675t-.122.777l-.944 1.62a1.14 1.14 0 0 1-.62.506 1.05 1.05 0 0 1-.794-.033l-1.426-.614q-.31.247-.631.437-.323.19-.66.31l-.204 1.567q-.067.414-.378.696a1.06 1.06 0 0 1-.736.283zm.09-1.25h1.638l.3-2.232a4.6 4.6 0 0 0 1.165-.474 5.2 5.2 0 0 0 1.019-.789l2.07.87.82-1.416-1.807-1.362q.105-.324.142-.635a5.2 5.2 0 0 0 0-1.256 3.3 3.3 0 0 0-.142-.62l1.823-1.377-.82-1.417-2.095.883a4.4 4.4 0 0 0-1.002-.79 4.3 4.3 0 0 0-1.182-.486l-.263-2.232H7.18l-.276 2.224a4.4 4.4 0 0 0-1.178.462q-.54.31-1.03.801L2.624 3.96l-.82 1.417 1.8 1.34q-.105.298-.147.618a5.2 5.2 0 0 0 0 1.312q.042.313.138.618l-1.791 1.362.82 1.416 2.063-.875q.474.487 1.014.798t1.194.478zm.843-4.166a2.4 2.4 0 0 0 1.77-.73A2.4 2.4 0 0 0 10.51 8a2.4 2.4 0 0 0-.73-1.77 2.4 2.4 0 0 0-1.77-.73q-1.053 0-1.777.73A2.42 2.42 0 0 0 5.51 8q0 1.04.723 1.77.724.73 1.777.73"
      fill="currentColor"
    />
  </svg>
);

const Headphone = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.423 14.25q-.63 0-1.069-.437a1.45 1.45 0 0 1-.437-1.069V7.167q0-1.46.557-2.75.558-1.289 1.523-2.253A7.2 7.2 0 0 1 5.25.642 6.85 6.85 0 0 1 8 .084q1.461 0 2.75.558 1.29.558 2.253 1.522a7.2 7.2 0 0 1 1.523 2.253q.557 1.29.557 2.75v7.82q0 .633-.437 1.07a1.45 1.45 0 0 1-1.069.437H8.625a.6.6 0 0 1-.445-.18.6.6 0 0 1-.18-.445q0-.266.18-.445.18-.18.445-.18h4.952a.25.25 0 0 0 .184-.072.25.25 0 0 0 .072-.184v-.737h-1.442q-.623 0-1.065-.442a1.45 1.45 0 0 1-.441-1.065V9.86q0-.623.441-1.065a1.45 1.45 0 0 1 1.065-.442h1.442V7.167q0-2.416-1.708-4.125Q10.417 1.334 8 1.334T3.875 3.042q-1.708 1.71-1.708 4.125v1.186h1.442q.623 0 1.065.442t.441 1.065v2.884q0 .623-.441 1.065-.442.442-1.065.442zm0-1.25H3.61a.25.25 0 0 0 .184-.071.25.25 0 0 0 .072-.185V9.86a.25.25 0 0 0-.072-.185.25.25 0 0 0-.184-.072H2.167v3.141a.25.25 0 0 0 .072.185.25.25 0 0 0 .184.072m9.968 0h1.442V9.604h-1.442a.25.25 0 0 0-.184.072.25.25 0 0 0-.072.185v2.884a.25.25 0 0 0 .072.185.25.25 0 0 0 .184.072M2.423 9.604h-.256 1.699zm9.968 0h-.256 1.698z"
      fill="currentColor"
    />
  </svg>
);

const Logout = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.423 15.083q-.63 0-1.069-.438a1.45 1.45 0 0 1-.437-1.069V2.422q0-.63.437-1.068a1.45 1.45 0 0 1 1.07-.438h4.96q.264 0 .445.18.18.18.179.445 0 .266-.18.445a.6.6 0 0 1-.445.18h-4.96a.25.25 0 0 0-.176.08.25.25 0 0 0-.08.176v11.154q0 .096.08.176t.176.08h4.96q.266 0 .446.18t.179.446-.18.445a.6.6 0 0 1-.445.18zm10.258-6.459H6.205a.6.6 0 0 1-.445-.18A.6.6 0 0 1 5.58 8q0-.265.18-.445t.445-.18h6.476L11.08 5.772a.616.616 0 0 1 0-.865.6.6 0 0 1 .439-.201.6.6 0 0 1 .452.188l2.578 2.578q.226.226.226.527t-.226.528l-2.578 2.578a.6.6 0 0 1-.442.184.63.63 0 0 1-.45-.197.6.6 0 0 1-.174-.445.6.6 0 0 1 .188-.433z"
      fill="currentColor"
    />
  </svg>
);

const Rocket = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91A2.18 2.18 0 0 0 5 16.5m7.5-1.5-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22.5 2c0 2.72-.78 7.5-6 11a22.3 22.3 0 0 1-4 2"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 12h-5s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Tick = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={13}
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 1 6 12 1 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Mail = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.667 5 5.76 3.264c2.125 1.204 3.022 1.204 5.146 0L18.333 5"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
    <path
      d="M1.68 11.229c.055 2.555.082 3.832 1.024 4.778s2.255.98 4.879 1.045c1.617.04 3.218.04 4.835 0 2.624-.066 3.936-.099 4.878-1.045s.97-2.223 1.024-4.778a56 56 0 0 0 0-2.46c-.054-2.554-.081-3.831-1.024-4.777-.942-.947-2.254-.98-4.878-1.046a96 96 0 0 0-4.835 0c-2.624.066-3.936.1-4.879 1.046S1.734 6.215 1.68 8.77a58 58 0 0 0 0 2.459Z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
  </svg>
);

const Phone = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.148 9.953c-.79-1.377-1.171-2.502-1.401-3.642-.34-1.687.438-3.334 1.728-4.385.545-.444 1.17-.293 1.492.286l.728 1.305c.576 1.035.865 1.552.808 2.1-.058.55-.447.996-1.224 1.89zm0 0c1.6 2.789 4.109 5.3 6.9 6.9m0 0c1.378.79 2.503 1.172 3.643 1.402 1.686.34 3.334-.438 4.385-1.728.444-.545.292-1.17-.286-1.492l-1.305-.728c-1.035-.577-1.553-.865-2.101-.808-.549.057-.995.446-1.889 1.224z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);

const Location = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.348 17.805a1.97 1.97 0 0 1-1.347.528c-.503 0-.986-.19-1.347-.528-3.31-3.117-7.745-6.6-5.582-11.656C4.242 3.415 7.049 1.666 10 1.666s5.76 1.75 6.929 4.483c2.16 5.05-2.264 8.55-5.582 11.656Z"
      stroke="currentColor"
      strokeWidth={1.25}
    />
    <path
      d="M12.916 9.167a2.917 2.917 0 1 1-5.833 0 2.917 2.917 0 0 1 5.833 0Z"
      stroke="currentColor"
      strokeWidth={1.25}
    />
  </svg>
);

const Linkedin = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.833 8.334v5.833m3.334-3.333v3.333m0-3.333a2.5 2.5 0 1 1 5 0v3.333m-5-3.333v-2.5"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.84 5.834h-.008"
      stroke="currentColor"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.083 10c0-3.731 0-5.597 1.16-6.757S6.267 2.084 10 2.084s5.598 0 6.757 1.16c1.16 1.159 1.16 3.025 1.16 6.757s0 5.598-1.16 6.757c-1.16 1.16-3.025 1.16-6.757 1.16s-5.598 0-6.758-1.16c-1.159-1.16-1.159-3.025-1.159-6.757Z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
  </svg>
);

const Facebook = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.086 9.999c0-3.732 0-5.598 1.16-6.758 1.159-1.159 3.025-1.159 6.757-1.159s5.598 0 6.757 1.16c1.16 1.159 1.16 3.025 1.16 6.757s0 5.598-1.16 6.757c-1.16 1.16-3.026 1.16-6.757 1.16-3.732 0-5.598 0-6.758-1.16s-1.16-3.025-1.16-6.757Z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
    <path
      d="M14.102 6.688h-2.454c-.87 0-1.577.701-1.583 1.571l-.071 9.596m-1.596-6.188h4.003"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Twitter = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.078 9.999c0-3.732 0-5.598 1.16-6.758 1.159-1.159 3.025-1.159 6.757-1.159s5.598 0 6.757 1.16c1.16 1.159 1.16 3.025 1.16 6.757s0 5.598-1.16 6.757c-1.16 1.16-3.025 1.16-6.757 1.16s-5.598 0-6.758-1.16c-1.159-1.16-1.159-3.025-1.159-6.757"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m5.828 14.165 3.495-3.494m0 0L5.828 5.832h2.315l2.524 3.495M9.323 10.67l2.524 3.494h2.314l-3.494-4.838m3.494-3.495-3.494 3.495"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Instagram = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.086 9.999c0-3.732 0-5.598 1.16-6.758 1.159-1.159 3.025-1.159 6.757-1.159s5.598 0 6.757 1.16c1.16 1.159 1.16 3.025 1.16 6.757s0 5.598-1.16 6.757c-1.16 1.16-3.026 1.16-6.757 1.16-3.732 0-5.598 0-6.758-1.16s-1.16-3.025-1.16-6.757Z"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinejoin="round"
    />
    <path
      d="M13.75 10a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      stroke="currentColor"
      strokeWidth={1.25}
    />
    <path
      d="M14.593 5.418h-.007"
      stroke="currentColor"
      strokeWidth={1.667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Arrowsoliddown = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={15}
    height={7}
    viewBox="0 0 15 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M.766 0h14L8.473 6.293a1 1 0 0 1-1.414 0z" fill="currentColor" />
  </svg>
);

const Arrowright = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={41}
    height={40}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.834 20h23.333M20.5 8.334l11.667 11.667L20.5 31.667"
      stroke="#4D004D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Magicwand = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m13.647 7.565-.136.126-10.48 10.488a2.27 2.27 0 0 0 3.211 3.208L16.722 10.9a2.25 2.25 0 0 0-.002-3.182l-.157-.146a2.25 2.25 0 0 0-2.916-.007m-.848 2.961 1.088 1.088-8.706 8.713a.769.769 0 0 1-1.33-.54.77.77 0 0 1 .241-.548zM17.083 15a.75.75 0 0 0-.743.648l-.007.102v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.694.648.743l.102.007h.75v.75c0 .38.282.694.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V18h.75a.75.75 0 0 0 .743-.648l.007-.102a.75.75 0 0 0-.648-.743l-.102-.007h-.75v-.75a.75.75 0 0 0-.648-.743zm-1.45-6.248.026.027a.75.75 0 0 1 0 1.061l-.71.713-1.09-1.089.73-.73a.75.75 0 0 1 1.043.018M7.184 5.007 7.083 5a.75.75 0 0 0-.743.648l-.007.102v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743L5.583 8h.75v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V8h.75a.75.75 0 0 0 .743-.648l.007-.102a.75.75 0 0 0-.648-.743L8.583 6.5h-.75v-.75a.75.75 0 0 0-.648-.743m12-2L19.083 3a.75.75 0 0 0-.743.648l-.007.102v.75h-.75a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743l.102.007h.75v.75c0 .38.282.693.648.743l.102.007a.75.75 0 0 0 .743-.648l.007-.102V6h.75a.75.75 0 0 0 .743-.648l.007-.102a.75.75 0 0 0-.648-.743l-.102-.007h-.75v-.75a.75.75 0 0 0-.648-.743"
      fill="#B800B8"
    />
  </svg>
);

const Edit = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.667 4h-7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      stroke="#CF54CF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.167 2.5a2.121 2.121 0 0 1 3 3l-9.5 9.5-4 1 1-4z"
      stroke="#CF54CF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Imageicon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.167 3.5H5.833A2.333 2.333 0 0 0 3.5 5.833v16.334A2.333 2.333 0 0 0 5.833 24.5h16.334a2.333 2.333 0 0 0 2.333-2.333V5.833A2.333 2.333 0 0 0 22.167 3.5"
      fill="#F8E6F8"
      stroke="#650065"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 12.833a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667m14 4.667-3.6-3.6a2.333 2.333 0 0 0-3.3 0L7 24.5"
      stroke="#650065"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Videoicon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m25.667 9.334-7 4.666 7 4.667z"
      fill="#D1EAFF"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.333 7H4.667a2.333 2.333 0 0 0-2.334 2.333v9.334A2.333 2.333 0 0 0 4.667 21h11.666a2.333 2.333 0 0 0 2.334-2.333V9.333A2.333 2.333 0 0 0 16.333 7"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Ai = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={20}
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.467 7.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319A4.37 4.37 0 0 1 18.724.931l-.253-.61a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.326l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M3.8 15h2.154l.6-1.5h2.892l.6 1.5H12.2L9 7H7zM8 9.885l.646 1.615H7.354zM13 15V7h2v8zM1 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9h-2v8H2V4h10V2z"
      fill="#667185"
    />
  </svg>
);

const Document = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={34}
    viewBox="0 0 27 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.5 18.667h10q.708 0 1.187-.48.48-.479.48-1.187t-.48-1.187q-.48-.48-1.187-.48h-10q-.708 0-1.188.48T6.833 17t.48 1.188 1.187.479m0 5h10q.708 0 1.187-.48.48-.479.48-1.187t-.48-1.187q-.48-.48-1.187-.48h-10q-.708 0-1.188.48T6.833 22t.48 1.188 1.187.479m0 5h5q.708 0 1.187-.48.48-.479.48-1.187t-.48-1.187q-.48-.48-1.187-.48h-5q-.708 0-1.188.48T6.833 27t.48 1.188 1.187.479m-5 5a3.2 3.2 0 0 1-2.354-.98 3.2 3.2 0 0 1-.98-2.353V3.666q0-1.376.98-2.354A3.2 3.2 0 0 1 3.5.333h11.958a3.3 3.3 0 0 1 2.333.959l8.084 8.083q.457.459.708 1.063t.25 1.27v18.626a3.2 3.2 0 0 1-.979 2.354 3.2 3.2 0 0 1-2.354.979zm11.667-23.333q0 .708.479 1.187.48.48 1.187.48H23.5l-8.333-8.334z"
      fill="#CCC"
    />
  </svg>
);

const Eye = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.75 12.5s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7"
      stroke="#7D7D7D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 15.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      stroke="#7D7D7D"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Download = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 9.98a.9.9 0 0 1-.313-.053.7.7 0 0 1-.27-.177l-3-3a.76.76 0 0 1-.24-.583.85.85 0 0 1 .833-.844.78.78 0 0 1 .594.24l1.562 1.562V1.167q0-.354.24-.594T7 .333t.593.24.24.594v5.958l1.563-1.562a.78.78 0 0 1 .593-.24.85.85 0 0 1 .834.844.76.76 0 0 1-.24.583l-3 3a.7.7 0 0 1-.27.177A.9.9 0 0 1 7 9.98m-5 3.687q-.688 0-1.177-.49A1.6 1.6 0 0 1 .333 12v-1.666q0-.355.24-.594.24-.24.593-.24.354 0 .594.24t.24.594V12h10v-1.666q0-.355.24-.594.239-.24.593-.24t.594.24.24.594V12q0 .688-.49 1.177t-1.177.49z"
      fill="#7D7D7D"
    />
  </svg>
);

export {
  Layout,
  Home,
  Plus,
  StarFall,
  History,
  Toggle,
  Arrowdown,
  Gear,
  Headphone,
  Logout,
  Rocket,
  Tick,
  Mail,
  Phone,
  Location,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Arrowsoliddown,
  Arrowright,
  Magicwand,
  Edit,
  Imageicon,
  Videoicon,
  Ai,
  Document,
  Eye,
  Download,
  Lens,
};
