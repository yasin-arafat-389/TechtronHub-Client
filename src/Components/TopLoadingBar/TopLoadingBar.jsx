import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setProgress(100);
    const timer = setTimeout(() => {
      setProgress(0);
    }, 600);
    return () => clearTimeout(timer);
  }, [location]);

  return <LoadingBar color="#FF0000" progress={progress} height={"3px"} />;
};

export default TopLoadingBar;
