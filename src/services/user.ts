export const getUser = async (id: number) => {
  return { id };
};

export const updateUser = async (id: number, { bio }: { bio?: string }) => {
  return { id, bio };
};
