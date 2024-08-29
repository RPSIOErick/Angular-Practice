const { app, db } = require('./config/imports/config.js');
const { cors } = require('./config/imports/imports.js');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors()); // Configura CORS

// Rota para cadastrar produto
app.post('/api/cadastrar', async (req, res) => {
    try {
        await db.collection('produtos').add({
            nome: req.body['item-nome'],
            preco: req.body['item-preco'],
            descricao: req.body['item-descricao']
        });
        res.redirect('http://localhost:4200/read'); // Redireciona após cadastro
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar o produto' });
    }
});

// Rota para listar produtos
app.get('/api/listar', async (req, res) => {
    try {
        let dataProd = await db.collection('produtos').get();
        let lista = [];
        dataProd.forEach((doc) => {
            lista.push({
                id: doc.id,
                nome: doc.get('nome'),
                descricao: doc.get('descricao'),
                preco: doc.get('preco')
            });
        });
        console.log('Dados enviados:', lista); // Log dos dados
        res.json(lista);
    } catch (error) {
        console.error('Erro ao listar produtos:', error); // Log de erro
        res.status(500).json({ error: 'Erro ao listar os produtos' });
    }
});

// Rota para excluir produto
app.delete('/api/delete/:id', async (req, res) => {
    try {
        await db.collection('produtos').doc(req.params.id).delete(); // Deleta produto
        res.status(200).json({ message: 'Produto excluído com sucesso!' });
    } catch (error) {
        console.error('Erro ao deletar produto:', error); // Log de erro
        res.status(500).json({ error: 'Erro ao deletar o produto' });
    }
});

// Rota para obter um produto por ID
app.get('/api/obter/:id', async (req, res) => {
    try {
        let findProd = await db.collection('produtos').doc(req.params.id).get();
        let prod = {
            id: findProd.id,
            nome: findProd.get('nome'),
            descricao: findProd.get('descricao'),
            preco: findProd.get('preco')
        };
        console.log('Produto encontrado: ', prod); // Log do produto encontrado
        res.json(prod);
    } catch (error) {
        console.error('Erro ao obter produto:', error); // Log de erro
        res.status(500).json({ error: 'Erro ao obter o produto' });
    }
});

// Rota para atualizar produto
app.put('/api/editar/:id', async (req, res) => {
    try {
        const produtoRef = db.collection('produtos').doc(req.params.id);
        await produtoRef.update({
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco
        });
        res.status(200).json({ message: 'Produto atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar produto:', error); // Log de erro
        res.status(500).json({ error: 'Erro ao atualizar o produto' });
    }
});
