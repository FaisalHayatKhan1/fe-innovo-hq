import React from "react";
import RestaurantHeader from "./restaurantHeader/RestaurantHeader";
import RestaurantCard from "./restaurantCard/RestaurantCard";
import { Button } from "@root/components/ui/button";
import { useGetRestaurantsQuery } from "@root/services/restaurant";
import { PATH_DASHBOARD } from "@root/routes/paths";
import LoadingComponent from "@root/components/Loading";
import axios from "axios";
import { useRouter } from "next/router";
const Dashboard = () => {
  const [queryParams, setQueryParams] = React.useState<any>({
    page: "1",
    limit: "10",
  });
  const { push } = useRouter();
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetRestaurantsQuery(queryParams);

  return (
    <>
      {isLoading && <LoadingComponent primaryLoading />}

      <RestaurantHeader>
        {/* restaurant Content Item */}
        <div className="space-y-4">
          {data?.data?.map((item: any) => (
            <RestaurantCard
              key={item?._id}
              id={item?._id}
              name={item?.name}
              status="Active"
              totalOrder="108"
              orderLeft="100"
              FreeOrderReset="20/09/2023"
              onClick={() =>
                push(`${PATH_DASHBOARD?.restaurantDashboard}/${item?._id}`)
              }
            />
          ))}
        </div>
      </RestaurantHeader>
    </>
  );
};

export default Dashboard;
