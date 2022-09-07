//sequelize lib example/tutorial

(async () => {

    const database = require('./db');
    
    const Curso = require('./models/curso');
    const Disciplina = require('./models/disciplina');
    const Equipamento = require('./models/equipamento');
    const Local = require('./models/local');
    const Usuario = require('./models/usuario');

    await database.sync();

    //restart DB
    // await database.sync({force: true});

    // const novoCurso = await Curso.create({
    //     nome: 'Ciência da Computação',
    // })

    //console.log(novoCurso);
    
    // const novoUsuario = await Usuario.create({
    //     nome: 'Ninguém Liga',
    //     email: 'nliga@algumlugar.org',
    //     ra: '123321',
    //     role: 'comum',
    //     idCurso: novoCurso.id,
    // })

    // const curso = await Curso.findByPk(1);

    // const novoUsuario = await Usuario.create({
    //     nome: 'Alguém Liga',
    //     email: 'aliga@algumlugar.org',
    //     ra: '321123',
    //     role: 'comum',
    //     idCurso: curso.id,
    // })

    // console.log(novoUsuario);
    
    //update table
    // curso.nome = 'Computer Science';
    // await curso.save();
    
    //delete
    // await curso.destroy();

    //relations
    //lazy loading
    // const usuario = await Usuario.findByPk(1);
    // const curso = await usuario.getCurso();
    // console.log(curso.nome);

    //eager loading
    // const usuario = await Usuario.findByPk(1, {include: Curso});
    // console.log(usuario.curso.nome);

    //1:N relation

    //lazy loading
    // const curso = await Curso.findByPk(1);
    // const usuarios = await curso.getUsuarios();
    // console.log(usuarios);

    //eager loading
    // const curso = await Curso.findByPk(1, {include: Usuario});
    // console.log(curso.usuarios);

})();