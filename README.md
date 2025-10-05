# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Davi Gamarano Neves Rocha
- Matricula: 902643
- Proposta de projeto escolhida: Uma rede social inspirada no Twitter "X".
- Breve descrição sobre seu projeto: Rede social inspirada no X, contendo um Cabeçalho, aba lateral um feed detalhado, no canto direito recomendações, e mais abaixo uma section com destaques da comunidade e por fim o rodapé.

## Print da Home-Page

![Home-Page](print_parte_1.png)
![Home-Page](print_parte_2.png)

## Print da página de detalhes do item

![Detalhes](print_detalhes_comentario.png)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const posts = [
    {
        id: 1,
        username: "user.maneiro",
        handle: "@user.bolado",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "img/sol.jpg",
        date: "2025-10-01",
        likes: 120,
        retweets: 45,
        comments: [
            {
                username: "ana_aninha",
                handle: "@Ana_Aninha_Anão",
                text: "Cê tá bem mano ?",
                date: "2025-10-01"
            },
            {
                username: "frio_gelado",
                handle: "@Frio_Gelado",
                text: "Foto mídia",
                date: "2025-10-01"
            }
        ]
    },
    {
        id: 2,
        username: "yoga_lover",
        handle: "@yoga_peace",
        text: "Enjoying a peaceful yoga session this morning!",
        image: "img/yoga.jpg",
        date: "2025-10-02",
        likes: 85,
        retweets: 30,
        comments: [
            {
                username: "boca_085",
                handle: "@Boca_085",
                text: "Tenho nem osso pra isso",
                date: "2025-10-02"
            }
        ]
    },
    {
        id: 3,
        username: "nature_explorer",
        handle: "@wild_adventures",
        text: "Text of the printing and typesetting industry lorem Ipsum is simply dummy Took a galley to make a type when an unknown printer specimen book.",
        image: "img/aguia.jpg",
        date: "2025-10-03",
        likes: 200,
        retweets: 60,
        comments: [
            {
                username: "flakes_power",
                handle: "@Flakes_Power",
                text: "Parece até IA KAAKAKKAKAAKAKA",
                date: "2025-10-03"
            },
            {
                username: "nobru_oapelao",
                handle: "@Nobru_OApelão",
                text: "Cócóóóóóóóóó",
                date: "2025-10-03"
            }
        ]
    }
];
```