const getMarkerFill = type => {
  if (type === "Crime") {
    return "#cd4545";
  } else if (type === "Safety") {
    return "#f16821";
  } else if (type === "Traffic") {
    return "#f3a333";
  } else {
    return "#4f9da6";
  }
};

const getMarkerBorder = severity => {
  if (severity === "Emergency") {
    return "#CD4545";
  } else if (severity === "High") {
    return "#F16820";
  } else if (severity === "Medium") {
    return "#F3A333";
  } else {
    return "#237146";
  }
};

export { getMarkerFill, getMarkerBorder };
