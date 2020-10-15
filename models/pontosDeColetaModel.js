exports.pontos_de_coleta = [
    {
        id: '001',
        nome: 'Ponto de Coleta Fazenda Grande - Jundiaí',
        descricao: 'Ponto de coleta para descartáveis plastiscos',
        endereco: {
            cep: '13212420',
            numero: 456,
            logradouro: 'Rua Daniel Antonieta Gourdinho',
            bairro: 'Fazenda Grande',
            municipio: 'Jundiaí',
            uf: 'SP',
            ibge: 1,
            geolocalizacao: {
                longitude: '304930427349823642',
                latitude: '203817892371982731'
            },
        },
            tipoMaterial: [
                {
                  id: '001',
                  nome: 'Plastico',
                  descricao: 'Materiais plasticos'
                }
            ]
    },
    {
        id: '002',
        nome: 'Ponto de Coleta Centro - Jundiaí',
        descricao: 'Ponto de coleta de plasticos, metais e vidros',
        endereco: {
            cep: '13212420',
            numero: 456,
            logradouro: 'Avenida Jundiaí',
            bairro: 'Centro',
            municipio: 'Jundiaí',
            uf: 'SP',
            ibge: 1,
            geolocalizacao: {
                longitude: '39182391203712371',
                latitude: '201923012397102731'
            },
        },
        tipoMaterial: [
            {
                id: '001',
                nome: 'Plastico',
                descricao: 'Materiais plasticos'
            },
            {
                id: '002',
                nome: 'Metal',
                descricao: 'Metais brutos como: Ferro e aluminio'
            },
            {
                id: '004',
                nome: 'Papel',
                descricao: 'Papeis que não estejam melhados'
            }
        ]
    },
    {
        id: '003',
        nome: 'Ponto de Coleta Mooca - São Paulo',
        descricao: 'Ponto de coleta de plasticos e Papeis',
        endereco: {
            cep: '03111030',
            numero: 247,
            logradouro: 'Rua Ezequiel Ramos',
            bairro: 'Mooca',
            municipio: 'São Paulo',
            uf: 'SP',
            ibge: 10,
            geolocalizacao: {
                longitude: '-23.564583',
                latitude: '-46.601944'
            },
        },
        tipoMaterial: [
            {
                id: '001',
                nome: 'Plastico',
                descricao: 'Materiais plasticos'
            },
            {
                id: '004',
                nome: 'Papel',
                descricao: 'Papeis em condições de reciclagem'
            }
        ]
    },
    {
        id: '004',
        nome: 'Ponto de Coleta Pinheiros - São Paulo',
        descricao: 'Ponto de coleta de vidros',
        endereco: {
            cep: '05415040',
            numero: 210,
            logradouro: 'Rua Mateus Grou',
            bairro: 'Pinheiros',
            municipio: 'São Paulo',
            uf: 'SP',
            ibge: 10,
            geolocalizacao: {
                longitude: '-312.08231',
                latitude: '213.123131'
            },
        },
        tipoMaterial: [
            {
                id: '003',
                nome: 'Vidro',
                descricao: 'Materiais de vidro'
            }
        ]
        
    },
    {
        id: '005',
        nome: 'Ponto de Coleta Centro - Rio de Janeiro',
        descricao: 'Ponto de coleta para Pilhas e Baterias',
        endereco: {
            cep: '20031180',
            numero: 263,
            logradouro: 'Avenida República do Paraguai',
            bairro: 'Centro',
            municipio: 'Rio de Janeiro',
            uf: 'RJ',
            ibge: 20,
            geolocalizacao: {
                longitude: '-312.08231',
                latitude: '213.123131'
            },
        },
        tipoMaterial: [
            {
                id: '005',
                nome: 'Pilhas/Baterias',
                descricao: 'Coleta de pilhas e baterias.'
            }
        ]
        
    },
    {
        id: '006',
        nome: 'Ponto de Coleta Dalben Barao Geraldo - Campinas',
        descricao: 'Ponto de coleta para descartáveis plastiscos, pilhas e papel no meio do supermercado Dalben de Barao de Geraldo',
        endereco: {
            cep: '13084-551',
            numero: 511,
            logradouro: 'Av. Albino J. B. de Oliveira',
            bairro: 'Barao Geraldo',
            municipio: 'Campinas',
            uf: 'SP',
            ibge: 005,
            geolocalizacao: {
                longitude: '304930427349823642',
                latitude: '304930427349823642'
            },
        },
        tipoMaterial: [
            {
                id: '001',
                nome: 'plastico',
                descricao: 'materiais plasticos'
            },
            {
                id: '004',
                nome: 'plastico',
                descricao: 'Papeis usados que nao estejam sujos ou degradados'
            },
            {
                id: '005',
                nome: 'pilhas/baterias',
                descricao: 'materiais como pilhas ou baterias pequenas'
            }
        ]
    },
    {
        id: '007',
        nome: 'Ponto de Coleta Bairro Mansoes',
        descricao: 'Ponto de coleta para descartáveis plastiscos, papel e metal',
        endereco: {
            cep: '13057-500',
            numero: 77,
            logradouro: 'Rua Hermantino Coelho',
            bairro: 'Mansoes de Sto. Antonio',
            municipio: 'Campinas',
            uf: 'SP',
            ibge: 005,
            geolocalizacao: {
                longitude: '304930427349823642',
                latitude: '203817892371982731'
            }
        }, 
        tipoMaterial: [
            {
                id: '001',
                nome: 'plastico',
                descricao: 'materiais plasticos'
            },
            {
                id: '002',
                nome: 'metal',
                descricao: 'Materiais metalicos como ferro e aluminio'
            }
        ]
    },
    {
        id: '008',
        nome: 'Ponto de Coleta Dalben Mansoes',
        descricao: 'Ponto de coleta para descartáveis plastiscos, isopor e pilhas e baterias',
        endereco: {
            cep: '13057-510',
            numero: 433,
            logradouro: 'R. Adelino Martins',
            bairro: 'Mansoes Sto. Antonio',
            municipio: 'Campinas',
            uf: 'SP',
            ibge: 005,
            geolocalizacao: {
                longitude: '304930427349823642',
                latitude: '203817892371982731'
            }
        }, 
        tipoMaterial: [
            {
                id: '001',
                nome: 'plastico',
                descricao: 'materiais plasticos'
            },
            {
                id: '008',
                nome: 'isopor',
                descricao: 'Pecas ou pedacos de isopor'
            },
            {
                id: '005',
                nome: 'pilhas/baterias',
                descricao: 'materiais como pilhas ou baterias pequenas'
            }
        ]
    },
    {
        id: '009',
        nome: 'Ponto de Coleta Supermercado Delta',
        descricao: 'Ponto de coleta para descartáveis plastiscos, papel e pilhas e baterias',
        endereco: {
            cep: '13601-215',
            numero: 18,
            logradouro: 'R. Esmeraldas',
            bairro: 'Jardim Belvedere',
            municipio: 'Araras',
            uf: 'SP',
            ibge: 012,
            geolocalizacao: {
                longitude: '304930427349823642',
                latitude: '203817892371982731'
            }
        }, 
        tipoMaterial: [
            {
                id: '001',
                nome: 'plastico',
                descricao: 'materiais plasticos'
            },
            {
                id: '008',
                nome: 'isopor',
                descricao: 'Pecas ou pedacos de isopor'
            },
            {
                id: '005',
                nome: 'pilhas/baterias',
                descricao: 'materiais como pilhas ou baterias pequenas'
            }
        ]
    },
    {
        id: '010',
        nome: 'Ponto de Coleta do Bar do Te',
        descricao: 'Ponto de coleta de vidro proximo ao bar do te e do posto da guarda municipal',
        endereco: {
            cep: '13603-017',
            numero: 18,
            logradouro: 'R. Osvaldo Russo',
            bairro: 'Jardim Candida',
            municipio: 'Araras',
            uf: 'SP',
            ibge: 012,
            geolocalizacao: {
                longitude: '304930427349823642',
                latitude: '203817892371982731'
            }
        }, 
        tipoMaterial: [
            {
                id: '003',
                nome: 'vidro',
                descricao: 'materiais de vidro'
            }
        ]
    }

]