function ProjectIcon(props) {
  return (
    <svg
      viewBox="0 0 36 36"
      width={30}
      height={30}
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      {...props}
    >
      <path d="M4.667,18.882H3V11.824A3.436,3.436,0,0,1,6.333,8.294H13M4.667,18.882V29.471A3.436,3.436,0,0,0,8,33H28a3.436,3.436,0,0,0,3.333-3.529V18.882m-26.667,0h10m16.667,0H33V11.824a3.436,3.436,0,0,0-3.333-3.529H23m8.333,10.588h-10m0,0V15.353H14.667v3.529m6.667,0v3.529H14.667V18.882M13,8.294V6.529A3.436,3.436,0,0,1,16.333,3h3.333A3.436,3.436,0,0,1,23,6.529V8.294m-10,0H23" />
    </svg>
  );
}

export default ProjectIcon;
