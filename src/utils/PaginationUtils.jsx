export const getSkip = (page, limit) => {
    return (page * limit) - limit;
  };
