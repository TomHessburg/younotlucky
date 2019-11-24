import React from "react";

export default function Contact(props) {
  React.useEffect(() => {
    props.setTabActive("contact");
  });
  return (
    <div>
      <h3>ill get back to ya...</h3>
    </div>
  );
}
