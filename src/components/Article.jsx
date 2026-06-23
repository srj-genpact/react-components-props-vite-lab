import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Calculate minutes to read emojis
  let minutesToRead = "";
  if (minutes) {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      minutesToRead = " • " + "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      minutesToRead = " • " + "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}{minutesToRead}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
