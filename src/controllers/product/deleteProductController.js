export const deleteProductController = (req, res) => {
    const id = req.params.id
    res.json({message: 'Produto deletado com sucesso!'})
}