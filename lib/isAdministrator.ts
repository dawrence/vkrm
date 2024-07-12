export const isAdministrator = (userId: string | null | undefined) => {
  const administrators = [
    process.env.NEXT_PUBLIC_ADMINISTRATOR_ID1, 
    process.env.NEXT_PUBLIC_ADMINISTRATOR_ID2,
  ];

  return administrators.includes(userId as string);
};