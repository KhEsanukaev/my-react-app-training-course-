import React from "react";
import PropTypes from "prop-types";
import "./JournalItem.css";

function JournalItem({ title, post, date }) {
  const formatedDate = new Intl.DateTimeFormat("ru-RU").format(date);
  return (
    <>
      <h2 className="journal-item__header">{title}</h2>
      <div className="journal-item__body">
        <div className="journal-item__date">{formatedDate}</div>
        <div className="journal-item__text">{post}</div>
      </div>
    </>
  );
}

JournalItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};

export default JournalItem;
