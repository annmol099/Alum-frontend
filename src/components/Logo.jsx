export default function Logo({ size = "small" }) {
  const sizeMap = {
    small: { 
      container: "60px", 
      textSize: "28px",
      sparkleSize: "6px",
      strokeWidth: "3px"
    },
    large: { 
      container: "200px", 
      textSize: "95px",
      sparkleSize: "14px",
      strokeWidth: "8px"
    }
  };

  const dims = sizeMap[size];
  const isSmall = size === "small";
  const containerSize = parseInt(dims.container);

  return (
    <div style={{
      position: "relative",
      width: dims.container,
      height: dims.container,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* SVG Swoosh Design */}
      <svg 
        viewBox="0 0 200 200" 
        style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}
      >
        {/* Outer Blue Swoosh - Left */}
        <path
          d="M 50 100 Q 40 70 70 50 Q 100 30 130 40"
          stroke="#0052cc"
          strokeWidth={dims.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Outer Blue Swoosh - Bottom Left */}
        <path
          d="M 30 120 Q 20 150 50 170"
          stroke="#0052cc"
          strokeWidth={dims.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Green Swoosh - Right Top */}
        <path
          d="M 130 60 Q 150 80 160 120"
          stroke="#22c55e"
          strokeWidth={dims.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Inner Green Swoosh - Right Bottom */}
        <path
          d="M 150 140 Q 160 160 140 175 Q 110 190 80 180"
          stroke="#22c55e"
          strokeWidth={dims.strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Sparkle */}
        <circle cx="145" cy="35" r={dims.sparkleSize} fill="#fbbf24"/>
        <line 
          x1="145" 
          y1={35 - parseInt(dims.sparkleSize) - 5} 
          x2="145" 
          y2={35 + parseInt(dims.sparkleSize) + 5} 
          stroke="#fbbf24" 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line 
          x1={145 - parseInt(dims.sparkleSize) - 5} 
          y1="35" 
          x2={145 + parseInt(dims.sparkleSize) + 5} 
          y2="35" 
          stroke="#fbbf24" 
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* S Letter - Blue */}
      <span style={{
        position: "absolute",
        fontWeight: "900",
        fontSize: dims.textSize,
        color: "#0052cc",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1",
        marginLeft: isSmall ? "-8px" : "-25px"
      }}>
        S
      </span>

      {/* L Letter - Green */}
      <span style={{
        position: "absolute",
        fontWeight: "900",
        fontSize: dims.textSize,
        color: "#22c55e",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1",
        marginLeft: isSmall ? "8px" : "25px"
      }}>
        L
      </span>
    </div>
  );
}
