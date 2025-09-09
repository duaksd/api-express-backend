import { getById } from "../../models/profileModel";

export const getByIdProfileController = async (req, res) => {
  const id = req.params.id

  const result = await getById(+id)

  res.json({ 
    message: `Usuário com ID ${id} consultado com sucesso!`,
    profile: result});
};
