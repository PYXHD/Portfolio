function HomeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={30}
      height={30}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g transform="scale(0.8) translate(0.3 0.3)">
        <path d="M6.333,14.263v11c0,2.878,0,4.317.545,5.416a5.071,5.071,0,0,0,2.185,2.245c1.07.56,2.47.56,5.27.56h7.333c2.8,0,4.2,0,5.27-.56a5.07,5.07,0,0,0,2.185-2.245c.545-1.1.545-2.538.545-5.416V6.08M33,18.07,23.945,7.731c-2.06-2.351-3.089-3.527-4.3-3.961a4.873,4.873,0,0,0-3.29,0c-1.213.434-2.242,1.61-4.3,3.962L3,18.07M21.333,33.485V23.208H14.667V33.485" />
      </g>
    </svg>
  );
}

export default HomeIcon;
