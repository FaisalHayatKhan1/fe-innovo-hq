import { useState, useCallback } from "react";
import { GOOGLE_MAP_TOKEN, GOOGLE_MAP_URL } from "@root/config";
import axios from "axios";

export async function GetGoogleMapLocation(searchParams: string) {
  try {
    const encodedQuery = encodeURIComponent(searchParams);
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodedQuery}&key=${GOOGLE_MAP_TOKEN}`
    );

    if (response?.data?.results) {
      return response?.data?.results.map((result: any) => {
        const { lat, lng } = result.geometry.location;
        const formattedAddress = result.formatted_address;

        return {
          id: result.place_id,
          latitude: lat,
          longitude: lng,
          address: formattedAddress,
        };
      });
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}
