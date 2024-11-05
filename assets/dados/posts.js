// {
//     "card-img-src": "",
//     "card-title": "",
//     "card-text": "",
//     "author-id": 0,
//     "publish-date": {
//         "date": ["","",""],
//         "hour": ["",""]
//     },
//     "category-id": 0
// }

// author-id
// 0: Mateus
// 1: Guilherme
// 2: Rafael
// 3: Pedro
// 4: Eduardo
// 5: Bernardo

const postsReal =
[
    {
        "card-img-src": "Conheça_mais_a_respeito_do_xadrez_um_esporte_popular_em_todo_mundo.png",
        "card-title": "Conheça mais a respeito do xadrez um esporte popular em todo mundo",
        "card-text": "Descubra as regras, movimentos e valores das peças do xadrez, um jogo de estratégia e tradição que desafia mentes ao redor do mundo",
        "author-id": 4,
        "publish-date": {
            "date": ["03","11","2024"],
            "hour": ["12","07"]
        },
        "category-id": 3
    },
    {
        "card-img-src": "Corinthians_vence_Palmeiras_por_2_a_0_e_conquista_vitória_importante_no_clássico.png",
        "card-title": "Corinthians vence Palmeiras por 2 a 0 e conquista vitória no Derby Paulista",
        "card-text": "Com gols decisivos e uma atuação segura, o Corinthians supera o Palmeiras em casa, garantindo três pontos e lutando contra o rebaixamento",
        "author-id": 0,
        "publish-date": {
            "date": ["04","11","2024"],
            "hour": ["22","07"]
        },
        "category-id": 0
    }
]

const posts1 =
[
    {
        "card-img-src": "/importeds/Bola_de_Ouro_por_que_Vini_Jr_e_Real_Madrid_boicotaram_a_premiação.png",
        "card-title": "Bola de Ouro: por que Vini Jr. e Real Madrid boicotaram a premiação?",
        "card-text": "Atacante do Real Madrid e vencedor da Champions League, Vini Jr. era considerado um dos favoritos para vencer o prêmio Bola de Ouro masculino nesta segunda-feira (28/10). Mas o jogador brasileiro nem chegou a viajar para Paris, onde ocorreu a cerimônia de premiação.",
        "author-id": 0,
        "publish-date": {
            "date": ["31","10","2024"],
            "hour": ["20","34"]
        }
    },

    {
        "card-img-src": "/importeds/Caio_Ribeiro_revela_votos_de_Cleber_Machado_para_a_Bola_de_Ouro.png",
        "card-title": "Caio Ribeiro revela votos de Cleber Machado para a Bola de Ouro",
        "card-text": "Bola de Ouro foi entregue a Rodri, volante do Manchester City, nesta segunda-feira (28/10); saiba como representante brasileiro votou",
        "author-id": 1,
        "publish-date": {
            "date": ["28","10","2024"],
            "hour": ["23","47"]
        }
    },

    {
        "card-img-src": "/importeds/Bola_de_Ouro_Imprensa_espanhola_revela_votos_de_jornalistas.png",
        "card-title": "Bola de Ouro: Imprensa espanhola revela votos de jornalistas",
        "card-text": "Jornal esportivo AS revelou como votaram jornalistas de diferentes países na escolha do melhor jogador",
        "author-id": 2,
        "publish-date": {
            "date": ["30","10","2024"],
            "hour": ["08","47"]
        }
    },

    {
        "card-img-src": "/importeds/Idolo_do_Real_Madrid_detona_resultado_da_Bola_de_Ouro_Absurdo.png",
        "card-title": "Ídolo do Real Madrid detona resultado da Bola de Ouro: ‘Absurdo’",
        "card-text": "Ex-jogador também apontou quem seria o seu vencedor no prêmio de melhor jogador do mundo",
        "author-id": 3,
        "publish-date": {
            "date": ["30","10","2024"],
            "hour": ["17","25"]
        }
    },

    {
        "card-img-src": "/importeds/Editor_da_France_Football_revela_motivos_para_derrota_de_Vini_Jr_na_Bola_de_Ouro.png",
        "card-title": "Editor da France Football revela motivos para derrota de Vini Jr na Bola de Ouro",
        "card-text": "Brasileiro tinha amplo favoritismo, mas foi derrotado por Rodri na corrida pelo troféu",
        "author-id": 4,
        "publish-date": {
            "date": ["29","10","2024"],
            "hour": ["08","34"]
        }
    },

    {
        "card-img-src": "/importeds/Gabigol_e_Lorran_defendem_Vini_Jr_e_provocam_Rodri_após_Bola_de_Ouro_Ganha_prêmio_sem_fazer_nada.png",
        "card-title": "Gabigol e Lorran defendem Vini Jr. e provocam Rodri após Bola de Ouro: “Ganha prêmio sem fazer nada”",
        "card-text": "O resultado da Bola de Ouro 2024 ainda repercute no mundo do futebol, e a “France Football” vem recebendo críticas ao eleger Rodri como melhor jogador. No CT do Ninho do Urubu, o atacante Gabigol e o meio-campista Lorran demonstraram indignação, mas em tom de descontração.",
        "author-id": 5,
        "publish-date": {
            "date": ["31","10","2024"],
            "hour": ["09","49"]
        }
    }

];

const postsTest =
[
    {
        "card-img-src": "/test/soccer.png",
        "card-title": "Publicação 1",
        "card-text": "Futebol 1",
        "author-id": 0,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 0
    },
    {
        "card-img-src": "/test/tennis.png",
        "card-title": "Publicação 2",
        "card-text": "Tenis 1",
        "author-id": 1,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 2
    },
    {
        "card-img-src": "/test/basketball.png",
        "card-title": "Publicação 3",
        "card-text": "Basquete 1",
        "author-id": 2,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 1
    },
    {
        "card-img-src": "/test/basketball.png",
        "card-title": "Publicação 4",
        "card-text": "Basquete 2",
        "author-id": 3,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 1
    },
    {
        "card-img-src": "/test/chess.png",
        "card-title": "Publicação 5",
        "card-text": "Tabuleiro 1",
        "author-id": 4,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 3
    },
    {
        "card-img-src": "/test/chess.png",
        "card-title": "Publicação 6",
        "card-text": "Tabuleiro 2",
        "author-id": 5,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 3
    },
    {
        "card-img-src": "/test/soccer.png",
        "card-title": "Publicação 7",
        "card-text": "Futebol 2",
        "author-id": 0,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 0
    },
    {
        "card-img-src": "/test/soccer.png",
        "card-title": "Publicação 8",
        "card-text": "Futebol 3",
        "author-id": 1,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 0
    },
    {
        "card-img-src": "/test/basketball.png",
        "card-title": "Publicação 9",
        "card-text": "Basquete 3",
        "author-id": 2,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 1
    },
    {
        "card-img-src": "/test/basketball.png",
        "card-title": "Publicação 10",
        "card-text": "Basquete 4",
        "author-id": 3,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 1
    },
    {
        "card-img-src": "/test/chess.png",
        "card-title": "Publicação 11",
        "card-text": "Tabuleiro 3",
        "author-id": 4,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 3
    },
    {
        "card-img-src": "/test/chess.png",
        "card-title": "Publicação 12",
        "card-text": "Tabuleiro 4",
        "author-id": 5,
        "publish-date": {
            "date": ["01","01","2024"],
            "hour": ["18","00"]
        },
        "category-id": 3
    }
];

export const posts = postsReal