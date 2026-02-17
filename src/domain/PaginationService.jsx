export const PaginationService = {
  getSkip(page, limit) {
    return (page - 1) * limit;
  },

  totalPages(total, limit) {
    return Math.ceil(total / limit);
  },
};