export const isAdministrator = (userId: string | null | undefined) => {
  // Lista de IDs de administradores permitidos
  const administrators = [
    process.env.NEXT_PUBLIC_ADMINISTRATOR_ID1, // Asegúrate de definir estas variables de entorno
    process.env.NEXT_PUBLIC_ADMINISTRATOR_ID2,
  ];

  // Comprueba si el userId está en la lista de administradores
  return administrators.includes(userId as string);
};