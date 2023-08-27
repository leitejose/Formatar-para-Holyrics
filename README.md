
# Formato para holyrics
Esta aplicação foi criada com o intuito de acelerar o processo de transcrição de letras para criar novas musicas no holyrics. O processo utilizado anteriormente consistia em copiar e colar ou digitar linha por linha de uma musica diretamente no sistema. O processo se torna mais demorado pois é necessario realizar o processo em dois idiomas. 

Criei um prompt para que o chat gpt realizasse esse trabalho, mas normalmente eles traduzia as letras por conta propria, deixando assim a letra errada, entre outros problemas. 

## Próximas melhorias
- Melhorar a logica de programação, para que ele reconheça nas notas musicais sem que seja necessario o uso do "+". (Consegui formular uma condição para que ele reconheça as notas musicais, mas algumas partes da musica possuem a inicial igual as notas musicais. Ex: Nota musical E | "Estamos aqui" parte da letra de uma musica. Assim ela tambem apaga a letra da musica)

- Criar um botão de para copiar toda a musica mesclada.

## Documentação

#### Remove as notas musicais
A aplicação removerar todas as linhas que iniciarem com o caracter +

```http
| Parâmetro   | Tipo          |Descrição                                      |
| :---------- | :------------ | :---------------------------------------------|
|     +       | Caracter de 
|             |reconhecimento |  Inserir no inicio da linha das notas musicais| 


## Autores

- [@leitejose](https://www.github.com/leitejose)


## Contribuindo

Contribuições são sempre bem-vindas!

