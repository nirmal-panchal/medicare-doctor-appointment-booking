export const formateDate = (date, config) => {
  const defaultOp = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defaultOp;

  return new Date(date).toLocaleDateString("en-US", options);
};
