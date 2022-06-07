//type number
function soma(a: number, b: number): number {
    return a + b;
}

soma(2, 5);

//any type
function soma2(a, b) {
    return a + b;
}

soma2("hi", 3)

function cadastraAluno(aluno: { matricula: number, nome: string, dataNascimento: string }) {

}

//posso chamar a função dessa forma, passando os dados corretos, mas imagina que tenhamos um objeto grande, fica inviável escrever dessa forma.
cadastraAluno({ matricula: 123, nome: "Danilo", dataNascimento: "01/01/2000" });

//então, utilizando interface para resolver esse problema
interface Aluno {
    matricula: number,
    nome: string,
    dataNascimento: string,
    turma?: number
}

//passa valores
let aluno2 = {
    matricula: 123,
    nome: 'João',
    dataNascimento: '01/01/2000',
    turma: 3
}

//chama a função passando o objeto como parâmetro
cadastraAluno(aluno2)

//-----------------------------------------------------
//criando classes
class Estudante{
    matricula: number;
    nome: string;


    salvar(){

    }
    excluir(){

    }

}

let estudante1 = new Estudante();

estudante1.salvar();
estudante1.excluir();