import { format } from "date-fns";
import React from "react";

type DateProps = {
  date: string;
};

export default function __Date__(props: DateProps) {
  return <span>{format(new Date(props.date), "MMMM dd, yyyy")}</span>;
}
