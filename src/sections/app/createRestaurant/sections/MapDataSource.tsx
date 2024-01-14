import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@root/components/CommonTabs";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import LoadingComponent from "@root/components/Loading";
import { Input } from "@root/components/ui/input";

const MapDataSource = ({ setValue, errors, trigger, watch }: any) => {
  const [address, setAddress] = React.useState<any>("");
  const [optionSelected, setOptionSelected] = React.useState(false);

  const handleChange = (newAddress: any) => {
    setAddress(newAddress);
    setOptionSelected(false);
    setValue("address", null);
  };
  React.useEffect(() => {
    watch("address") && trigger("address");
  }, [watch("address")]);

  const handleSelect = async (selectedAddress: any) => {
    setAddress(selectedAddress);
    setOptionSelected(true);
    const result = await geocodeByAddress(selectedAddress);
    const li = await getLatLng(result[0]);

    setValue("address", {
      address: selectedAddress,
      lat: li?.lat,
      lng: li?.lng,
    });
  };

  const mouseDownHandler = () => {
    if (!optionSelected) {
      setAddress("");
    }
  };
  return (
    <div>
      <div className={`text-f14 font-medium  pb-2 `}>Map Data Source</div>
      <Tabs
        id="map_tab"
        defaultValue="googleMap"
        onValueChange={() => {
          setValue("address", null);
          setAddress("");
          setOptionSelected(false);
        }}
      >
        <TabsList className="p-0">
          <TabsTrigger value="googleMap">Google Maps</TabsTrigger>
          <TabsTrigger value="none">None</TabsTrigger>
        </TabsList>
        <div className="pt-4">
          <label htmlFor="map_tab" className="text-f14">
            We recommend using Open Street Maps. If you cannot find you store
            address, try use Google Maps instead. Selecting 'None' will allow
            you to enter any address but certain delivery related features will
            be disabled.
          </label>
          <div className="pt-4">
            <hr className=" border-dashed border-customGray" />
          </div>
        </div>
        <div
          className={`text-f14 font-medium pt-4 ${
            errors?.address ? "text-error" : ""
          }`}
        >
          Store Address
        </div>
        <TabsContent className="py-3" value="googleMap">
          <div className=" space-y-3">
            <PlacesAutocomplete
              value={address}
              onChange={handleChange}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }: any) => (
                <div className="relative">
                  <div onBlur={mouseDownHandler}>
                    <Input
                      {...getInputProps()}
                      name="google_location"
                      placeholder="Start typing to search..."
                      className={`pl:2 border h-[43px] pr-10 border-customGray ring-transparent  rounded-[3px] focus-visible:ring-transparent shadow-[0 4px 50px 0 rgba(0, 0, 0, 0.1)] placeholder:text-f14 
                      ${
                        errors?.address
                          ? "focus:border-error border-error"
                          : "focus:border-primary border-customGray"
                      }`}
                      type="text"
                    />
                    {loading && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <LoadingComponent secondaryLoading />
                      </div>
                    )}
                  </div>
                  {suggestions?.length > 0 && (
                    <div className=" absolute w-full z-10">
                      {
                        <ul className="max-h-[250px] min-w-full overflow-y-auto max-w-md py-1 rounded-[5px] my-2 bg-white dark:bg-customGray-secondary ">
                          {suggestions?.map((item: any) => (
                            <li
                              key={item?.description}
                              {...getSuggestionItemProps(item, {})}
                              value={item?.value}
                              className={` cursor-pointer hover:bg-grayScale dark:bg-customGray-secondary hover:opacity-3 px-2 py-2  rounded-md`}
                            >
                              <h1 className="font-normal text-f14 ">
                                {item?.description ?? "No Data available"}
                              </h1>
                            </li>
                          ))}
                        </ul>
                      }
                    </div>
                  )}
                </div>
              )}
            </PlacesAutocomplete>
            {errors?.address && (
              <h3 className="text-f12 text-error">
                {errors?.address?.message}
              </h3>
            )}
            <div>
              <label className="text-f14 ">
                Search for your address and select from the dropdown
              </label>
            </div>
          </div>
        </TabsContent>
        <TabsContent className="py-2" value="none">
          <div className=" space-y-3">
            <input
              className={` pl:2 border bg-transparent min-w-full rounded-[3px] py-[12px]  focus-visible:outline-none text-f12 px-[20px] font-normal ${
                errors?.address
                  ? "focus:border-error border-error"
                  : "focus:border-primary border-customGray"
              }`}
              type="text"
              onChange={(e) => {
                e?.target?.value
                  ? setValue("address", {
                      address: e?.target?.value,
                      lat: "00",
                      lng: "00",
                    })
                  : setValue("address", null);
              }}
            />
            {errors?.address && (
              <h3 className="text-f12 text-error">
                {errors?.address?.message}
              </h3>
            )}
            <div>
              <label htmlFor="name" className="text-f14">
                Enter your complete store address
              </label>
            </div>
          </div>
        </TabsContent>

        <div className="py-2">
          <hr className=" border-dashed border-customGray" />
        </div>
      </Tabs>
    </div>
  );
};

export default MapDataSource;
