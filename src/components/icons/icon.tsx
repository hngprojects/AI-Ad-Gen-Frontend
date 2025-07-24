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

const GeneratedVisual = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      x="0.273438"
      width="35.9193"
      height="35.9193"
      fill="url(#pattern0_3563_19668)"
    />
    <defs>
      <pattern
        id="pattern0_3563_19668"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_3563_19668" transform="scale(0.0208333)" />
      </pattern>
      <image
        id="image0_3563_19668"
        width="48"
        height="48"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
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

const AiAnalytics2 = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width="37"
    height="36"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      x="0.242188"
      width="35.9193"
      height="35.9193"
      fill="url(#pattern0_3563_19674)"
    />
    <defs>
      <pattern
        id="pattern0_3563_19674"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_3563_19674" transform="scale(0.0208333)" />
      </pattern>
      <image
        id="image0_3563_19674"
        width="48"
        height="48"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

const AiAnalytics = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    width="37"
    height="36"
    viewBox="0 0 37 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect
      x="0.757812"
      width="35.9193"
      height="35.9193"
      fill="url(#pattern0_3563_19671)"
    />
    <defs>
      <pattern
        id="pattern0_3563_19671"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_3563_19671" transform="scale(0.0208333)" />
      </pattern>
      <image
        id="image0_3563_19671"
        width="48"
        height="48"
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
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

const Google = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.20454Z"
      fill="#4285F4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5614C11.2416 14.1014 10.2107 14.4205 8.99976 14.4205C6.65567 14.4205 4.67158 12.8373 3.96385 10.71H0.957031V13.0418C2.43794 15.9832 5.48158 18 8.99976 18Z"
      fill="#34A853"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z"
      fill="#FBBC05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z"
      fill="#EA4335"
    />
  </svg>
);

const CheckCircle = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_3726_18787)">
      <path
        d="M16.0001 1.34216C17.1271 1.34216 18.1334 1.62392 19.0189 2.18745C19.9045 2.75097 20.6089 3.49562 21.1321 4.42141C22.1384 4.13965 23.1648 4.11952 24.2114 4.36103C25.2177 4.56229 26.1233 5.06543 26.9284 5.87046C27.7334 6.6755 28.2365 7.60128 28.4378 8.64782C28.6793 9.65411 28.6592 10.6604 28.3774 11.6667C29.3032 12.19 30.0479 12.8944 30.6114 13.7799C31.1749 14.6654 31.4567 15.6717 31.4567 16.7988C31.4567 17.9258 31.1749 18.9321 30.6114 19.8176C30.0479 20.7032 29.3032 21.4076 28.3774 21.9308C28.6592 22.9371 28.6793 23.9635 28.4378 25.0101C28.2365 26.0164 27.7334 26.922 26.9284 27.7271C26.1233 28.5321 25.2177 29.0352 24.2114 29.2365C23.1648 29.478 22.1384 29.4579 21.1321 29.1761C20.6089 30.1019 19.9045 30.8466 19.0189 31.4101C18.1334 31.9736 17.1271 32.2554 16.0001 32.2554C14.873 32.2554 13.8667 31.9736 12.9812 31.4101C12.0957 30.8466 11.3913 30.1019 10.868 29.1761C9.8617 29.4579 8.83528 29.478 7.78874 29.2365C6.78245 29.0352 5.87679 28.5321 5.07176 27.7271C4.26673 26.922 3.76358 26.0164 3.56233 25.0101C3.32082 23.9635 3.34094 22.9371 3.6227 21.9308C2.69692 21.4076 1.95226 20.7032 1.38874 19.8176C0.825218 18.9321 0.543457 17.9258 0.543457 16.7988C0.543457 15.6717 0.825218 14.6654 1.38874 13.7799C1.95226 12.8944 2.69692 12.19 3.6227 11.6667C3.34094 10.6604 3.32082 9.63399 3.56233 8.58745C3.76358 7.58116 4.26673 6.6755 5.07176 5.87046C5.87679 5.06543 6.80258 4.56229 7.84912 4.36103C8.85541 4.11952 9.8617 4.13965 10.868 4.42141C11.3913 3.49562 12.0957 2.75097 12.9812 2.18745C13.8667 1.62392 14.873 1.34216 16.0001 1.34216ZM22.8227 13.961C23.3862 13.2768 23.3862 12.5925 22.8227 11.9082C22.1384 11.3447 21.4541 11.3447 20.7699 11.9082L14.068 18.6101L11.2302 15.7724C10.546 15.2088 9.8617 15.2088 9.17742 15.7724C8.6139 16.4566 8.6139 17.1409 9.17742 17.8252L13.0416 21.6893C13.7258 22.2529 14.4101 22.2529 15.0944 21.6893L22.8227 13.961Z"
        fill="#EC802E"
      />
    </g>
    <defs>
      <clipPath id="clip0_3726_18787">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="matrix(1 0 0 -1 0 32.9194)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Logo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="165"
    height="48"
    viewBox="0 0 165 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="14.1179" cy="18.1176" r="14.1176" fill="#B800B8" />
    <circle
      cx="21.1767"
      cy="29.8823"
      r="13.1176"
      fill="#520052"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M60.8723 22.5V35.1719C60.8723 38.2135 60.0025 40.5312 58.2629 42.125C56.5338 43.7188 54.1588 44.5156 51.1379 44.5156C49.8879 44.5156 48.8984 44.4219 48.1692 44.2344C47.44 44.0573 46.8879 43.8854 46.5129 43.7188C46.2734 43.6042 46.1171 43.4844 46.0442 43.3594C45.94 43.1927 45.8202 42.9479 45.6848 42.625C45.5598 42.3021 45.44 41.9479 45.3254 41.5625C45.2942 41.4167 45.289 41.3073 45.3098 41.2344C45.3515 41.1302 45.4296 41.0208 45.5442 40.9062C45.7317 40.7188 45.9973 40.5 46.3411 40.25C46.6952 40 46.9661 39.8385 47.1536 39.7656C47.3515 39.6927 47.5338 39.7031 47.7004 39.7969C47.9713 39.9427 48.3567 40.1042 48.8567 40.2812C49.3671 40.4688 50.0806 40.5625 50.9973 40.5625C52.4556 40.5625 53.6431 40.1875 54.5598 39.4375C55.4765 38.6875 55.9348 37.5312 55.9348 35.9688V35.4062H55.8723C55.6431 35.6979 55.3463 35.9948 54.9817 36.2969C54.6171 36.599 54.1431 36.8542 53.5598 37.0625C52.9869 37.2708 52.2473 37.375 51.3411 37.375C49.7681 37.375 48.4765 37.0365 47.4661 36.3594C46.4661 35.6719 45.7265 34.7292 45.2473 33.5312C44.7786 32.3333 44.5442 30.9688 44.5442 29.4375C44.5442 27.7604 44.8202 26.2552 45.3723 24.9219C45.9244 23.5885 46.8515 22.5365 48.1536 21.7656C49.4556 20.9844 51.2369 20.5938 53.4973 20.5938C54.8515 20.5938 55.9869 20.6927 56.9036 20.8906C57.8306 21.0885 58.6067 21.3333 59.2317 21.625C59.8567 21.9167 60.4036 22.2083 60.8723 22.5ZM53.3254 24.375C52.1171 24.375 51.1952 24.7812 50.5598 25.5938C49.9244 26.4062 49.6067 27.6667 49.6067 29.375C49.6067 32.0521 50.7109 33.3906 52.9192 33.3906C53.7838 33.3906 54.4452 33.2135 54.9036 32.8594C55.3619 32.5052 55.7056 32.0573 55.9348 31.5156V25.0625C55.7056 24.8958 55.3827 24.7396 54.9661 24.5938C54.5494 24.4479 54.0025 24.375 53.3254 24.375ZM72.9348 37.3906C71.1744 37.3906 69.6431 37.1094 68.3411 36.5469C67.039 35.974 66.0286 35.0885 65.3098 33.8906C64.5911 32.6927 64.2317 31.1458 64.2317 29.25C64.2317 26.4062 64.9609 24.2552 66.4192 22.7969C67.8775 21.3385 69.815 20.6094 72.2317 20.6094C73.8046 20.6094 75.1327 20.8906 76.2161 21.4531C77.3098 22.0156 78.1379 22.7917 78.7004 23.7812C79.2734 24.7708 79.5598 25.901 79.5598 27.1719C79.5598 28.4115 79.2421 29.276 78.6067 29.7656C77.9713 30.2552 77.0442 30.5 75.8254 30.5H69.1223C69.2056 31.5729 69.5963 32.3906 70.2942 32.9531C71.0025 33.5156 71.9609 33.7969 73.1692 33.7969C74.1275 33.7969 74.8931 33.6562 75.4661 33.375C76.0494 33.0833 76.4556 32.8542 76.6848 32.6875C76.8827 32.5417 77.1067 32.474 77.3567 32.4844C77.5546 32.4844 77.8359 32.526 78.2004 32.6094C78.5754 32.6823 78.9452 32.8229 79.3098 33.0312C79.5702 33.1667 79.7004 33.3542 79.7004 33.5938C79.7004 33.7292 79.6744 33.9219 79.6223 34.1719C79.5911 34.3177 79.539 34.5312 79.4661 34.8125C79.3931 35.0833 79.2994 35.3385 79.1848 35.5781C79.1223 35.6927 79.0234 35.8021 78.8879 35.9062C78.6796 36.0521 78.3411 36.2448 77.8723 36.4844C77.414 36.724 76.7838 36.9323 75.9817 37.1094C75.1796 37.2969 74.164 37.3906 72.9348 37.3906ZM69.0911 27.2969H74.1848C74.7161 27.2969 74.9817 27.0521 74.9817 26.5625C74.9817 25.8229 74.7473 25.2031 74.2786 24.7031C73.8202 24.1927 73.1275 23.9375 72.2004 23.9375C71.19 23.9375 70.4452 24.2604 69.9661 24.9062C69.4973 25.5521 69.2056 26.349 69.0911 27.2969ZM98.4661 27.0469V36.1719C98.4661 36.4844 98.3984 36.7031 98.2629 36.8281C98.1379 36.9427 97.9192 37 97.6067 37H94.3879C94.0754 37 93.8515 36.9427 93.7161 36.8281C93.5911 36.7031 93.5286 36.4844 93.5286 36.1719V27.8594C93.5286 26.724 93.289 25.8958 92.8098 25.375C92.3306 24.8542 91.6796 24.5938 90.8567 24.5938C90.0338 24.5938 89.3984 24.7708 88.9504 25.125C88.5129 25.4792 88.1744 25.9271 87.9348 26.4688V36.1719C87.9348 36.4844 87.8671 36.7031 87.7317 36.8281C87.6067 36.9427 87.3879 37 87.0754 37H83.8567C83.5442 37 83.3202 36.9427 83.1848 36.8281C83.0598 36.7031 82.9973 36.4844 82.9973 36.1719V23.0781C82.9973 22.8281 83.0494 22.6354 83.1536 22.5C83.3723 22.2083 83.6327 21.9115 83.9348 21.6094C84.2473 21.3073 84.6275 20.9844 85.0754 20.6406C85.2109 20.5365 85.3411 20.4844 85.4661 20.4844C85.5806 20.4844 85.7109 20.5365 85.8567 20.6406C86.2942 20.9844 86.6692 21.3125 86.9817 21.625C87.2942 21.9375 87.5702 22.2604 87.8098 22.5938H87.8879C88.065 22.3646 88.3306 22.099 88.6848 21.7969C89.039 21.4844 89.5338 21.2083 90.1692 20.9688C90.815 20.7292 91.6379 20.6094 92.6379 20.6094C93.6171 20.6094 94.5494 20.8073 95.4348 21.2031C96.3202 21.599 97.0442 22.2656 97.6067 23.2031C98.1796 24.1406 98.4661 25.4219 98.4661 27.0469ZM103.154 37C102.633 37 102.19 36.8594 101.825 36.5781C101.461 36.2865 101.263 35.8958 101.232 35.4062C101.211 34.9062 101.445 34.3438 101.935 33.7188L109.013 24.6406H103.029C102.841 24.6406 102.695 24.6042 102.591 24.5312C102.164 24.1875 101.716 23.7135 101.247 23.1094C101.164 22.974 101.122 22.875 101.122 22.8125C101.122 22.7396 101.164 22.6458 101.247 22.5312C101.716 21.9271 102.164 21.4531 102.591 21.1094C102.716 21.0365 102.862 21 103.029 21H113.2C114.242 21 114.904 21.3385 115.185 22.0156C115.466 22.6823 115.284 23.4323 114.638 24.2656L107.669 33.3594H114.091C114.279 33.3594 114.424 33.3958 114.529 33.4688C114.956 33.8125 115.404 34.2865 115.872 34.8906C115.956 35.026 115.997 35.125 115.997 35.1875C115.997 35.2604 115.956 35.3542 115.872 35.4688C115.404 36.0729 114.956 36.5469 114.529 36.8906C114.404 36.9635 114.258 37 114.091 37H103.154ZM118.029 34.1719C118.029 34.026 118.075 33.901 118.169 33.7969C118.263 33.6823 118.383 33.5312 118.529 33.3438C118.851 32.9792 119.221 32.599 119.638 32.2031C120.065 31.7969 120.492 31.4062 120.919 31.0312C121.19 30.8125 121.393 30.7031 121.529 30.7031C121.654 30.7031 121.862 30.8125 122.154 31.0312C123.06 31.8021 123.846 32.5729 124.513 33.3438C124.659 33.5208 124.779 33.6667 124.872 33.7812C124.966 33.8958 125.013 34.026 125.013 34.1719C125.013 34.3177 124.961 34.4479 124.857 34.5625C124.763 34.6771 124.643 34.8333 124.497 35.0312C124.185 35.3854 123.82 35.7604 123.404 36.1562C122.997 36.5521 122.581 36.9375 122.154 37.3125C121.883 37.5312 121.674 37.6406 121.529 37.6406C121.404 37.6406 121.19 37.5312 120.888 37.3125C120.43 36.9375 120.003 36.5521 119.607 36.1562C119.211 35.75 118.851 35.3594 118.529 34.9844C118.383 34.8073 118.263 34.6667 118.169 34.5625C118.075 34.4479 118.029 34.3177 118.029 34.1719ZM132.294 37.3906C130.763 37.3906 129.544 36.9635 128.638 36.1094C127.742 35.2448 127.294 34.0573 127.294 32.5469C127.294 31.7656 127.435 31.0417 127.716 30.375C128.008 29.6979 128.508 29.1042 129.216 28.5938C129.935 28.0729 130.935 27.6562 132.216 27.3438C133.508 27.0312 135.154 26.849 137.154 26.7969C137.154 25.849 136.914 25.1667 136.435 24.75C135.966 24.3333 135.258 24.125 134.31 24.125C133.456 24.125 132.758 24.2708 132.216 24.5625C131.674 24.8542 131.336 25.0521 131.2 25.1562C131.055 25.2812 130.878 25.3281 130.669 25.2969C130.388 25.2552 130.086 25.1823 129.763 25.0781C129.45 24.974 129.112 24.8542 128.747 24.7188C128.695 24.6979 128.638 24.6667 128.575 24.625C128.513 24.5729 128.476 24.5 128.466 24.4062C128.466 24.3542 128.471 24.2917 128.482 24.2188C128.492 24.1354 128.518 23.9896 128.56 23.7812C128.601 23.5729 128.664 23.3177 128.747 23.0156C128.831 22.7031 128.909 22.4635 128.982 22.2969C129.075 22.1198 129.232 21.9531 129.45 21.7969C129.628 21.651 130.164 21.4167 131.06 21.0938C131.956 20.7708 133.253 20.6094 134.95 20.6094C139.628 20.6094 141.966 22.8854 141.966 27.4375V36.2812C141.966 36.4792 141.909 36.651 141.794 36.7969C141.69 36.9323 141.508 37 141.247 37H138.904C138.737 37 138.586 36.9792 138.45 36.9375C138.325 36.8854 138.206 36.7917 138.091 36.6562L137.122 35.4062H137.013C136.534 36.1042 135.888 36.6094 135.075 36.9219C134.273 37.2344 133.346 37.3906 132.294 37.3906ZM134.013 33.7656C134.971 33.7656 135.695 33.5208 136.185 33.0312C136.674 32.5417 136.987 32.0365 137.122 31.5156V29.7812C135.674 29.7812 134.586 29.8958 133.857 30.125C133.138 30.3438 132.659 30.6354 132.419 31C132.18 31.3542 132.06 31.7396 132.06 32.1562C132.06 32.7604 132.247 33.1823 132.622 33.4219C132.997 33.651 133.461 33.7656 134.013 33.7656ZM151.841 37.3906C150.456 37.3906 149.273 37.0521 148.294 36.375C147.325 35.6875 146.586 34.7448 146.075 33.5469C145.575 32.3385 145.325 30.9479 145.325 29.375C145.325 27.3021 145.69 25.625 146.419 24.3438C147.159 23.0521 148.195 22.1042 149.529 21.5C150.872 20.8958 152.456 20.5938 154.279 20.5938C154.904 20.5938 155.419 20.625 155.825 20.6875C156.242 20.75 156.539 20.8073 156.716 20.8594V15.0312C156.716 14.7812 156.768 14.5885 156.872 14.4531C157.31 13.8802 157.95 13.2604 158.794 12.5938C158.94 12.4896 159.07 12.4375 159.185 12.4375C159.32 12.4375 159.45 12.4896 159.575 12.5938C160.023 12.9375 160.398 13.2604 160.7 13.5625C161.013 13.8646 161.279 14.1615 161.497 14.4531C161.601 14.5885 161.654 14.7812 161.654 15.0312V36.2812C161.654 36.4792 161.586 36.651 161.45 36.7969C161.315 36.9323 161.143 37 160.935 37H158.607C158.44 37 158.289 36.9792 158.154 36.9375C158.029 36.8854 157.909 36.7917 157.794 36.6562L156.825 35.4062H156.716C156.581 35.6146 156.336 35.8802 155.982 36.2031C155.638 36.5156 155.133 36.7917 154.466 37.0312C153.81 37.2708 152.935 37.3906 151.841 37.3906ZM153.357 33.3906C154.294 33.3906 155.029 33.2135 155.56 32.8594C156.101 32.5052 156.487 32.0573 156.716 31.5156V24.9688C156.549 24.8646 156.273 24.7396 155.888 24.5938C155.503 24.4479 154.961 24.375 154.263 24.375C152.971 24.375 152.003 24.7969 151.357 25.6406C150.711 26.4844 150.388 27.6198 150.388 29.0469C150.388 30.526 150.659 31.6198 151.2 32.3281C151.742 33.0365 152.461 33.3906 153.357 33.3906Z"
      fill="currentColor"
    />
  </svg>
);

const Facebook2 = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      d="M6.90097 14.0175V9.16813H5.04497C4.94861 9.16813 4.8562 9.12985 4.78806 9.06171C4.71992 8.99357 4.68164 8.90116 4.68164 8.8048V6.8868C4.68164 6.79043 4.71992 6.69802 4.78806 6.62988C4.8562 6.56174 4.94861 6.52346 5.04497 6.52346H6.89364V4.6668C6.84942 4.2265 6.90213 3.78185 7.04807 3.3641C7.19402 2.94635 7.42965 2.56561 7.73843 2.24863C8.04721 1.93166 8.42165 1.68613 8.83544 1.52929C9.24923 1.37246 9.69233 1.30812 10.1336 1.3408H11.6803C11.7776 1.34061 11.871 1.37866 11.9405 1.44676C12.01 1.51486 12.0499 1.60753 12.0516 1.7048V3.3288C12.0495 3.42589 12.0095 3.51829 11.9401 3.58621C11.8707 3.65413 11.7774 3.69215 11.6803 3.69213H10.7136C9.66964 3.69213 9.46897 4.1868 9.46897 4.91413V6.5228H11.951C12.0026 6.52109 12.0539 6.53063 12.1014 6.55078C12.1489 6.57092 12.1915 6.60117 12.2261 6.63943C12.2608 6.67769 12.2867 6.72304 12.302 6.77232C12.3174 6.8216 12.3218 6.87363 12.315 6.9248L12.0903 8.85013C12.0791 8.93831 12.0359 9.01931 11.9689 9.07779C11.9019 9.13627 11.8159 9.16818 11.727 9.16746H9.48431V14.0168C9.48557 14.1025 9.46961 14.1875 9.43738 14.2669C9.40515 14.3463 9.35731 14.4184 9.29669 14.479C9.23607 14.5395 9.16391 14.5873 9.08448 14.6195C9.00506 14.6516 8.91998 14.6675 8.83431 14.6661H7.54297C7.45797 14.6664 7.37376 14.6497 7.29526 14.6171C7.21677 14.5845 7.14556 14.5366 7.08579 14.4761C7.02603 14.4157 6.9789 14.3439 6.94717 14.265C6.91544 14.1862 6.89973 14.1025 6.90097 14.0175Z"
      fill="#1671D9"
    />
  </svg>
);
const X = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      d="M0.601333 0H5.31333L9.50667 5.99733L14.54 0H16.0453L10.08 6.81867L16.5 16H11.7907L7.41067 9.73733L2.004 16H0.5L6.83733 8.91733L0.601333 0Z"
      fill="black"
    />
  </svg>
);
const Insta = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      d="M12.75 0H4.25C2.17893 0 0.5 1.67893 0.5 3.75V12.25C0.5 14.3211 2.17893 16 4.25 16H12.75C14.8211 16 16.5 14.3211 16.5 12.25V3.75C16.5 1.67893 14.8211 0 12.75 0Z"
      fill="url(#paint0_radial_9001_18644)"
    />
    <path
      d="M12.75 0H4.25C2.17893 0 0.5 1.67893 0.5 3.75V12.25C0.5 14.3211 2.17893 16 4.25 16H12.75C14.8211 16 16.5 14.3211 16.5 12.25V3.75C16.5 1.67893 14.8211 0 12.75 0Z"
      fill="url(#paint1_radial_9001_18644)"
    />
    <path
      d="M8.50056 1.75C6.80319 1.75 6.59013 1.75744 5.9235 1.78775C5.25813 1.81825 4.80394 1.92356 4.40656 2.07812C3.99544 2.23775 3.64675 2.45131 3.29938 2.79881C2.95169 3.14625 2.73813 3.49494 2.578 3.90587C2.423 4.30338 2.31756 4.75775 2.28762 5.42281C2.25781 6.0895 2.25 6.30263 2.25 8.00006C2.25 9.6975 2.2575 9.90987 2.28775 10.5765C2.31838 11.2419 2.42369 11.6961 2.57812 12.0934C2.73787 12.5046 2.95144 12.8533 3.29894 13.2006C3.64625 13.5483 3.99494 13.7624 4.40575 13.922C4.80344 14.0766 5.25769 14.1819 5.92294 14.2124C6.58962 14.2427 6.8025 14.2501 8.49981 14.2501C10.1974 14.2501 10.4097 14.2427 11.0764 14.2124C11.7417 14.1819 12.1964 14.0766 12.5941 13.922C13.0051 13.7624 13.3532 13.5483 13.7005 13.2006C14.0482 12.8533 14.2617 12.5046 14.4219 12.0936C14.5755 11.6961 14.681 11.2417 14.7122 10.5766C14.7422 9.91 14.75 9.6975 14.75 8.00006C14.75 6.30263 14.7422 6.08962 14.7122 5.42294C14.681 4.75756 14.5755 4.30344 14.4219 3.90606C14.2617 3.49494 14.0482 3.14625 13.7005 2.79881C13.3529 2.45119 13.0052 2.23762 12.5938 2.07819C12.1953 1.92356 11.7409 1.81819 11.0755 1.78775C10.4088 1.75744 10.1966 1.75 8.49862 1.75H8.50056ZM7.93988 2.87631C8.10631 2.87606 8.292 2.87631 8.50056 2.87631C10.1694 2.87631 10.3671 2.88231 11.0261 2.91225C11.6355 2.94012 11.9663 3.04194 12.1866 3.1275C12.4783 3.24075 12.6862 3.37619 12.9048 3.595C13.1236 3.81375 13.2589 4.02206 13.3725 4.31375C13.4581 4.53375 13.56 4.8645 13.5878 5.47388C13.6177 6.13275 13.6242 6.33062 13.6242 7.99862C13.6242 9.66663 13.6177 9.86456 13.5878 10.5234C13.5599 11.1327 13.4581 11.4635 13.3725 11.6836C13.2593 11.9753 13.1236 12.1829 12.9048 12.4016C12.6861 12.6203 12.4784 12.7557 12.1866 12.869C11.9665 12.9549 11.6355 13.0565 11.0261 13.0844C10.3673 13.1143 10.1694 13.1208 8.50056 13.1208C6.83169 13.1208 6.63387 13.1143 5.97506 13.0844C5.36569 13.0563 5.03494 12.9544 4.81444 12.8689C4.52281 12.7556 4.31444 12.6202 4.09569 12.4014C3.87694 12.1827 3.74156 11.9749 3.628 11.6831C3.54244 11.463 3.4405 11.1322 3.41275 10.5229C3.38281 9.864 3.37681 9.66613 3.37681 7.99706C3.37681 6.328 3.38281 6.13119 3.41275 5.47231C3.44062 4.86294 3.54244 4.53219 3.628 4.31187C3.74131 4.02019 3.87694 3.81188 4.09575 3.59313C4.31456 3.37438 4.52281 3.23894 4.8145 3.12544C5.03481 3.0395 5.36569 2.93794 5.97506 2.90994C6.55162 2.88387 6.77506 2.87606 7.93988 2.87475V2.87631ZM11.8368 3.91406C11.4228 3.91406 11.0868 4.24969 11.0868 4.66381C11.0868 5.07788 11.4228 5.41381 11.8368 5.41381C12.2509 5.41381 12.5868 5.07788 12.5868 4.66381C12.5868 4.24975 12.2509 3.91381 11.8368 3.91381V3.91406ZM8.50056 4.79038C6.72806 4.79038 5.29094 6.2275 5.29094 8.00006C5.29094 9.77262 6.72806 11.2091 8.50056 11.2091C10.2731 11.2091 11.7098 9.77262 11.7098 8.00006C11.7098 6.22756 10.273 4.79038 8.50044 4.79038H8.50056ZM8.50056 5.91669C9.65112 5.91669 10.5839 6.84938 10.5839 8.00006C10.5839 9.15063 9.65112 10.0834 8.50056 10.0834C7.35 10.0834 6.41725 9.15063 6.41725 8.00006C6.41725 6.84938 7.34994 5.91669 8.50056 5.91669Z"
      fill="white"
    />
    <defs>
      <radialGradient
        id="paint0_radial_9001_18644"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.75 17.2323) rotate(-90) scale(15.8572 14.7484)"
      >
        <stop stopColor="#FFDD55" />
        <stop offset="0.1" stopColor="#FFDD55" />
        <stop offset="0.5" stopColor="#FF543E" />
        <stop offset="1" stopColor="#C837AB" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_9001_18644"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-2.18006 1.15256) rotate(78.681) scale(7.08825 29.218)"
      >
        <stop stopColor="#3771C8" />
        <stop offset="0.128" stopColor="#3771C8" />
        <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const Whatsapp = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      d="M0.841719 7.90403C0.841344 9.24834 1.19534 10.561 1.86847 11.7179L0.777344 15.6709L4.85434 14.6102C5.98199 15.2193 7.24543 15.5385 8.52934 15.5386H8.53272C12.7712 15.5386 16.2213 12.1164 16.2232 7.91005C16.224 5.87179 15.4247 3.95513 13.9726 2.51315C12.5207 1.07129 10.5898 0.276809 8.53241 0.275879C4.29347 0.275879 0.843531 3.69789 0.841781 7.90403"
      fill="url(#paint0_linear_7165_4406)"
    />
    <path
      d="M0.566875 7.90177C0.566438 9.29445 0.933125 10.654 1.63025 11.8524L0.5 15.9471L4.72319 14.8484C5.88681 15.4779 7.19694 15.8098 8.53006 15.8103H8.5335C12.924 15.8103 16.4981 12.265 16.5 7.90809C16.5007 5.79659 15.6727 3.81104 14.1687 2.3174C12.6646 0.823938 10.6646 0.000868217 8.5335 0C4.14225 0 0.568625 3.54481 0.566875 7.90177ZM3.08194 11.646L2.92425 11.3976C2.26137 10.3518 1.9115 9.14326 1.912 7.90226C1.91337 4.28087 4.88363 1.33457 8.536 1.33457C10.3048 1.33532 11.967 2.01947 13.2172 3.26078C14.4674 4.5022 15.1554 6.15243 15.1549 7.9076C15.1533 11.529 12.183 14.4757 8.5335 14.4757H8.53088C7.34256 14.475 6.17712 14.1584 5.16075 13.56L4.91888 13.4177L2.41275 14.0696L3.08194 11.646Z"
      fill="url(#paint1_linear_7165_4406)"
    />
    <path
      d="M6.54223 4.59831C6.3931 4.26944 6.23616 4.2628 6.09435 4.25704C5.97823 4.25208 5.84548 4.25245 5.71285 4.25245C5.5801 4.25245 5.36441 4.302 5.1821 4.49952C4.9996 4.69722 4.48535 5.17499 4.48535 6.14671C4.48535 7.11843 5.19866 8.0576 5.2981 8.1895C5.39766 8.32116 6.67516 10.3791 8.69841 11.1708C10.3799 11.8287 10.7221 11.6978 11.087 11.6649C11.452 11.632 12.2648 11.1872 12.4306 10.726C12.5965 10.2649 12.5965 9.86956 12.5468 9.78696C12.497 9.70466 12.3643 9.65524 12.1652 9.55651C11.9662 9.45778 10.9875 8.97989 10.805 8.91397C10.6225 8.84811 10.4899 8.81524 10.3571 9.01301C10.2244 9.21046 9.84316 9.65524 9.72698 9.78696C9.61091 9.91899 9.49473 9.93542 9.29573 9.83663C9.09654 9.73753 8.45548 9.52922 7.69491 8.85642C7.10316 8.33288 6.70366 7.68637 6.58754 7.4886C6.47141 7.29115 6.5751 7.18411 6.67491 7.08569C6.76435 6.99719 6.87404 6.85505 6.97366 6.73977C7.07291 6.62442 7.10604 6.54212 7.17241 6.4104C7.23885 6.27856 7.2056 6.16321 7.15591 6.06442C7.10604 5.96563 6.71923 4.98882 6.54223 4.59831Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7165_4406"
        x1="773.068"
        y1="1539.78"
        x2="773.068"
        y2="0.275879"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1FAF38" />
        <stop offset="1" stopColor="#60D669" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_7165_4406"
        x1="800.5"
        y1="1594.71"
        x2="800.5"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9F9F9" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
);

const LinkedIn = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    {...props}
  >
    <path
      d="M10.6002 5.60012C10.0892 5.59837 9.58293 5.69738 9.11028 5.8915C8.63762 6.08563 8.20788 6.37104 7.84564 6.73142C7.48341 7.0918 7.19578 7.52007 6.99924 7.99172C6.80269 8.46337 6.70107 8.96915 6.7002 9.48012V13.4001C6.7002 13.5593 6.76341 13.7119 6.87593 13.8244C6.98845 13.9369 7.14107 14.0001 7.3002 14.0001H8.7002C8.85933 14.0001 9.01194 13.9369 9.12446 13.8244C9.23698 13.7119 9.30019 13.5593 9.30019 13.4001V9.48012C9.30006 9.29839 9.33823 9.11867 9.41222 8.95268C9.4862 8.78668 9.59433 8.63815 9.72957 8.51675C9.86481 8.39535 10.0241 8.30381 10.1971 8.24811C10.3701 8.1924 10.5529 8.17378 10.7335 8.19345C11.0575 8.23426 11.3553 8.39256 11.5703 8.63833C11.7854 8.88409 11.9028 9.20023 11.9002 9.52679V13.4001C11.9002 13.5593 11.9634 13.7119 12.0759 13.8244C12.1885 13.9369 12.3411 14.0001 12.5002 14.0001H13.9002C14.0593 14.0001 14.2119 13.9369 14.3245 13.8244C14.437 13.7119 14.5002 13.5593 14.5002 13.4001V9.48012C14.4993 8.96915 14.3977 8.46337 14.2012 7.99172C14.0046 7.52007 13.717 7.0918 13.3547 6.73142C12.9925 6.37104 12.5628 6.08563 12.0901 5.8915C11.6175 5.69738 11.1112 5.59837 10.6002 5.60012Z"
      fill="#10509A"
    />
    <path
      d="M4.9 6.2002H3.1C2.76863 6.2002 2.5 6.46882 2.5 6.8002V13.4002C2.5 13.7316 2.76863 14.0002 3.1 14.0002H4.9C5.23137 14.0002 5.5 13.7316 5.5 13.4002V6.8002C5.5 6.46882 5.23137 6.2002 4.9 6.2002Z"
      fill="#10509A"
    />
    <path
      d="M4 5C4.82843 5 5.5 4.32843 5.5 3.5C5.5 2.67157 4.82843 2 4 2C3.17157 2 2.5 2.67157 2.5 3.5C2.5 4.32843 3.17157 5 4 5Z"
      fill="#10509A"
    />
  </svg>
);

const Tiktok = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.83301 2C10.0098 2 10.1794 2.07024 10.3044 2.19526C10.4294 2.32029 10.4997 2.48986 10.4997 2.66667C10.5001 3.28128 10.7125 3.87694 11.1012 4.35306C11.4898 4.82918 12.0309 5.15659 12.633 5.28C12.8063 5.31536 12.9584 5.41811 13.0559 5.56564C13.1535 5.71317 13.1884 5.89339 13.153 6.06667C13.1176 6.23994 13.0149 6.39207 12.8674 6.48959C12.7198 6.58711 12.5396 6.62203 12.3663 6.58667C11.6718 6.4443 11.0276 6.11989 10.4997 5.64667V11.3333C10.4997 11.9926 10.3042 12.6371 9.93791 13.1852C9.57164 13.7334 9.05104 14.1606 8.44195 14.4129C7.83287 14.6652 7.16264 14.7312 6.51604 14.6026C5.86944 14.474 5.2755 14.1565 4.80932 13.6904C4.34314 13.2242 4.02568 12.6302 3.89706 11.9836C3.76844 11.337 3.83445 10.6668 4.08674 10.0577C4.33904 9.44864 4.76628 8.92804 5.31444 8.56177C5.86261 8.1955 6.50707 8 7.16634 8C7.34315 8 7.51272 8.07024 7.63775 8.19526C7.76277 8.32029 7.83301 8.48986 7.83301 8.66667C7.83301 8.84348 7.76277 9.01305 7.63775 9.13807C7.51272 9.2631 7.34315 9.33333 7.16634 9.33333C6.77078 9.33333 6.3841 9.45063 6.0552 9.67039C5.7263 9.89016 5.46996 10.2025 5.31858 10.568C5.16721 10.9334 5.1276 11.3356 5.20477 11.7235C5.28194 12.1115 5.47242 12.4678 5.75213 12.7475C6.03183 13.0273 6.3882 13.2177 6.77616 13.2949C7.16412 13.3721 7.56626 13.3325 7.93171 13.1811C8.29716 13.0297 8.60952 12.7734 8.82928 12.4445C9.04904 12.1156 9.16634 11.7289 9.16634 11.3333V2.66667C9.16634 2.48986 9.23658 2.32029 9.3616 2.19526C9.48663 2.07024 9.6562 2 9.83301 2Z"
      fill="black"
    />
  </svg>
);

const Copy = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_7165_4421)">
      <path
        d="M16.6667 7.5H9.16667C8.24619 7.5 7.5 8.24619 7.5 9.16667V16.6667C7.5 17.5871 8.24619 18.3333 9.16667 18.3333H16.6667C17.5871 18.3333 18.3333 17.5871 18.3333 16.6667V9.16667C18.3333 8.24619 17.5871 7.5 16.6667 7.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16699 12.4998H3.33366C2.89163 12.4998 2.46771 12.3242 2.15515 12.0117C1.84259 11.6991 1.66699 11.2752 1.66699 10.8332V3.33317C1.66699 2.89114 1.84259 2.46722 2.15515 2.15466C2.46771 1.8421 2.89163 1.6665 3.33366 1.6665H10.8337C11.2757 1.6665 11.6996 1.8421 12.0122 2.15466C12.3247 2.46722 12.5003 2.89114 12.5003 3.33317V4.1665"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_7165_4421">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Close = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M18 6L6 18"
      stroke="#001311"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FooterIg = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0_13001_433)">
      <path
        d="M12.75 1.5H5.25C3.17893 1.5 1.5 3.17893 1.5 5.25V12.75C1.5 14.8211 3.17893 16.5 5.25 16.5H12.75C14.8211 16.5 16.5 14.8211 16.5 12.75V5.25C16.5 3.17893 14.8211 1.5 12.75 1.5Z"
        stroke="#7D7D7D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9998 8.52773C12.0923 9.15191 11.9857 9.78939 11.6951 10.3495C11.4045 10.9096 10.9446 11.3638 10.381 11.6475C9.81736 11.9312 9.17862 12.0299 8.55562 11.9297C7.93262 11.8294 7.3571 11.5353 6.91091 11.0891C6.46472 10.6429 6.17058 10.0674 6.07033 9.44439C5.97008 8.82139 6.06883 8.18265 6.35253 7.61901C6.63622 7.05537 7.09042 6.59553 7.65052 6.30491C8.21062 6.01428 8.8481 5.90767 9.47228 6.00023C10.109 6.09464 10.6984 6.39132 11.1536 6.84646C11.6087 7.30159 11.9054 7.89103 11.9998 8.52773Z"
        stroke="#7D7D7D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.125 4.875H13.1325"
        stroke="#7D7D7D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_13001_433">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const FooterFb = ({
  className,
  ...props
}: JSX.IntrinsicAttributes &
  SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className={className}
    {...props}
  >
    <path
      d="M13.5 1.5H11.25C10.2554 1.5 9.30161 1.89509 8.59835 2.59835C7.89509 3.30161 7.5 4.25544 7.5 5.25V7.5H5.25V10.5H7.5V16.5H10.5V10.5H12.75L13.5 7.5H10.5V5.25C10.5 5.05109 10.579 4.86032 10.7197 4.71967C10.8603 4.57902 11.0511 4.5 11.25 4.5H13.5V1.5Z"
      stroke="#7D7D7D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FooterX = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      d="M1.77539 2.25L7.09717 9.85547L2.05518 15.75H4.03564L7.9834 11.1226L11.2207 15.75H16.4033L10.8369 7.78125L15.5552 2.25H13.6055L9.95361 6.51562L6.97412 2.25H1.77539ZM4.65527 3.75H6.19189L13.5249 14.25H12.0015L4.65527 3.75Z"
      fill="#7D7D7D"
    />
  </svg>
);

const FooterEmail = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      d="M15 3H3C2.17157 3 1.5 3.67157 1.5 4.5V13.5C1.5 14.3284 2.17157 15 3 15H15C15.8284 15 16.5 14.3284 16.5 13.5V4.5C16.5 3.67157 15.8284 3 15 3Z"
      stroke="#7D7D7D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 5.25L9.7725 9.525C9.54095 9.67007 9.27324 9.74701 9 9.74701C8.72676 9.74701 8.45905 9.67007 8.2275 9.525L1.5 5.25"
      stroke="#7D7D7D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  FooterEmail,
  FooterX,
  FooterFb,
  FooterIg,
  Tiktok,
  Whatsapp,
  X,
  Close,
  Copy,
  LinkedIn,
  Facebook2,
  Insta,
  Layout,
  Home,
  Plus,
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
  Logo,
  Ai,
  AiAnalytics,
  AiAnalytics2,
  Document,
  GeneratedVisual,
  Eye,
  Download,
  Google,
  Lens,
  CheckCircle,
};
