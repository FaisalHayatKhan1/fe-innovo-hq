import React from "react";
import BookingsHeader from "./bookingHeader/BookingHeader";
import BookingListView from "./bookingListView/BookingListView";
import BookingTableView from "./bookingTableView/BookingTableView";
const Bookings = () => {
  const [gridType, setGridType] = React.useState("list");

  return (
    <div className="container space-y-2 py-3">
      <h1 className="text-f24 font-bold text-[#262626] tracking-wide">
      Orders
      </h1>
      <BookingsHeader setGridType={setGridType} gridType={gridType} />
      {gridType === "list" ? <BookingListView /> : <BookingTableView />}
    </div>
  );
};

export default Bookings;
