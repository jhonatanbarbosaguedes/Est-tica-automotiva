# Site Maxdetailpro - Estética Automotiva

## Descrição
Site profissional para a Maxdetailpro, especialista em estética automotiva em Maringá-PR. Desenvolvido com HTML, CSS e JavaScript puro, inclui sistema de agenda interativo com integração direta ao WhatsApp.

## Funcionalidades
- **Design Responsivo**: Adaptável para desktop e mobile
- **Navegação Suave**: Scroll automático entre seções
- **Logo Personalizada**: Logo da Maxdetailpro com fundo transparente no cabeçalho
- **Favicon**: Ícone de carro na aba do navegador
- **Barra de Navegação**: Cor cinza mais clara para o menu
- **Galeria de Trabalhos**: Exibição de imagens dos serviços
- **Sistema de Agenda**: Calendário interativo para agendamentos
- **Integração WhatsApp**: Agendamento direto via WhatsApp
- **Informações Completas**: Endereço, telefone, Instagram e mapa
- **Seções Completas**: Home, Serviços, Galeria, Agenda e Contato

## Informações da Empresa
- **Nome**: Maxdetailpro
- **Telefone/WhatsApp**: +55 (44) 98426-8112
- **Instagram**: @maxdetailpro
- **Endereço**: Rua Pioneiro Florindo Biagi, 1485, Jd São Clemente, Maringá-PR, 87062-030
- **Atendimento**: Local e domiciliar

## Serviços Oferecidos
1. **Lavagens Especializadas** - Lavagem completa externa e interna
2. **Polimento Profissional** - Restauração do brilho original da pintura
3. **Cristalização de Vidros** - Proteção e clareza máxima para vidros
4. **Proteção de Pintura** - Aplicação de ceras e selantes

## Estrutura de Arquivos
```
site_lavagem_automotiva/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos do site
├── js/
│   └── script.js       # Funcionalidades JavaScript
├── img/
│   ├── logo.jpg             # Logo da Maxdetailpro
│   ├── car_wash_hero.png    # Imagem de fundo do hero
│   ├── gallery_1.jpg        # Imagem da galeria 1
│   ├── gallery_2.webp       # Imagem da galeria 2
│   └── gallery_3.jpg        # Imagem da galeria 3
└── README.md           # Este arquivo
```

## Como Usar no Visual Studio Code

1. **Abrir o Projeto**:
   - Abra o Visual Studio Code
   - Vá em File > Open Folder
   - Selecione a pasta `site_lavagem_automotiva`

2. **Visualizar o Site**:
   - Instale a extensão "Live Server" no VS Code
   - Clique com o botão direito no arquivo `index.html`
   - Selecione "Open with Live Server"

3. **Editar Conteúdo**:
   - **HTML**: Edite `index.html` para alterar textos e estrutura
   - **CSS**: Modifique `css/style.css` para mudar cores e estilos
   - **JavaScript**: Ajuste `js/script.js` para alterar funcionalidades

## Funcionalidades da Agenda

- **Dias Verdes**: Disponíveis para agendamento
- **Dias Vermelhos**: Já ocupados
- **Dia com Borda Azul**: Dia atual
- **Clique em Dias Disponíveis**: Abre seleção de serviço e redireciona para WhatsApp
- **Navegação**: Use as setas < > para navegar entre meses
- **Integração WhatsApp**: Mensagem automática com data e serviço selecionado

## Personalização

### Alterar Dias Ocupados
No arquivo `js/script.js`, procure por `occupiedDays` para alterar os dias ocupados:
```javascript
const occupiedDays = {
    '2025-08-27': true,
    '2025-08-28': true,
    // Adicione mais datas conforme necessário
};
```

### Modificar Informações de Contato
No arquivo `index.html`, procure pela seção `#contato` e altere conforme necessário.

### Alterar Cores
No arquivo `css/style.css`, procure por `#77aaff` (cor principal) e substitua pela cor desejada.

## Integração WhatsApp
- **Número**: +55 (44) 98426-8112
- **Mensagem Automática**: Inclui data selecionada e serviço escolhido
- **Serviços Disponíveis**: 
  1. Lavagem Especializada
  2. Polimento Profissional
  3. Cristalização de Vidros
  4. Proteção de Pintura

## Tecnologias Utilizadas
- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Design Responsivo
- Calendário Interativo Customizado
- Integração WhatsApp API
- Google Maps Embed

## Suporte
Para dúvidas ou modificações, consulte os comentários no código ou entre em contato.

