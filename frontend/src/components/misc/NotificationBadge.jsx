import { BellIcon } from "@chakra-ui/icons";
import { MenuButton } from "@chakra-ui/react";
import React, { useEffect } from "react";

const NotificationBadge = ({ count }) => {
  useEffect(() => {
    let counter = document.getElementById("badge-count");
    if (counter) {
      counter.style.transform = "scale(1.5, 1.5)";
      counter.style.transition = "all 0.5s";

      setTimeout(() => {
        counter.style.transform = "scale(1, 1)";
        counter.style.transition = "all 0.5s";
      }, 500);
    }
  }, [count]);

  // console.log({ count });

  return (
    <MenuButton p={2} position="relative">
      <BellIcon fontSize="2xl" m={1} />
      {count > 0 && (
        <span
          id="badge-count"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            background: "red",
            width: "25px",
            color: "#fff",
            borderRadius: "50%",
            zIndex: "999",
          }}
        >
          {count <= 9 ? count : "9+"}
        </span>
      )}
    </MenuButton>
  );
};

export default NotificationBadge;
