declare var google: any;

export const maps = google.maps;

export const initMap = () => {
  const myLatlng = { lat: -25.4834, lng: 28.1068 };
  const map = new google.maps.Map(document.getElementById("google-maps"), {
    zoom: 10,
    center: myLatlng,
  });

  return { map, myLatlng };
};

export const initAutoComplete = (input: string, cb: Function) => {
  const startAutoComplete = new google.maps.places.Autocomplete(input, {
    types: ["geocode"],
    componentRestrictions: {
      country: "ZA",
    },
  });

  google.maps.event.addListener(startAutoComplete, "place_changed", () => {
    const place = startAutoComplete.getPlace();

    // if (!place.geometry) TODO: show err

    const { lat, lng } = place.geometry.location;

    cb(`${lat()},${lng()}`);
  });
};
