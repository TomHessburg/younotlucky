import React from "react";

export default function Contact(props) {
  React.useEffect(() => {
    props.setTabActive("contact");
  });
  return (
    <div>
      <h3>no. :)</h3>
    </div>
  );
}
