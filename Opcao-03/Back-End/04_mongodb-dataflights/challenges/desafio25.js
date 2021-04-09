// 25 - Remova todos os voos da empresa AZUL em que a quantidade de combustível
//  seja menor do que 400. Informe a quantidade de documentos removidos
db.voos.deleteMany({ litrosCombustivel: { $lt: 400 }, "empresa.nome": "AZUL" });
