// 19 - Retorne o vooId do primeiro voo em que o campo litrosCombustivel exista.
db.voos.findOne({ litrosCombustivel: { $exists: 1 } }, { vooId: 1, _id: 0 });
