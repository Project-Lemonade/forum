import { format } from "date-fns";
import React from "react";

type DateProps = {
  date: string;
};

export default function __Date__(props: DateProps) {
  return (
    <span>
      {Date.now() - new Date(props.date).valueOf() > 1000 * 60 * 60 * 24
        ? new Date(props.date).toLocaleTimeString().toLowerCase()
        : format(new Date(props.date), "MMMM dd, yyyy")}
    </span>
  );
}
